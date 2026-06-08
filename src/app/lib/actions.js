"use server";

import { connectToDB } from "./connect";
import bcrypt from "bcrypt";
import { Product, User } from "./models";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { signIn } from "../auth";

// add user
export const addUser = async (formData) => {
  const { username, password, email, phone, isAdmin, isActive, address } =
    Object.fromEntries(formData);
  const salt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(password, salt);
  try {
    await connectToDB();
    const newUser = new User({
      username,
      password: hashPass,
      email,
      phone,
      isAdmin: isAdmin === "true",
      isActive: isActive === "true",
      address,
    });
    await newUser.save();
  } catch (e) {
    console.log(e);
    throw new Error("Failed to add user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
// add product
export const addProduct = async (formData) => {
  const { title, cat, price, stock, color, size, desc } =
    Object.fromEntries(formData);

  try {
    await connectToDB();
    const newProduct = new Product({
      title,
      cat,
      price,
      stock,
      color,
      size,
      desc,
    });
    await newProduct.save();
  } catch (e) {
    console.log(e);
    throw new Error("Failed to add product");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};
// deleten user
export const deleteUser = async (formData) => {
  await connectToDB();
  const id = formData.get("id");
  try {
    await User.findByIdAndDelete(id);
  } catch (e) {
    console.log(e);
    throw new Error("Failed to delete user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
// delete product
export const deleteProduct = async (formData) => {
  await connectToDB();
  const id = formData.get("id");
  try {
    await Product.findByIdAndDelete(id);
  } catch (e) {
    console.log(e);
    throw new Error("Failed to delete product");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};
// update user
export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key],
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (e) {
    console.log(e);
    throw new Error("Failed to update user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
// updater product
export const updateProduct = async (formData) => {
  const { id, title, cat, price, stock, color, size, desc } =
    Object.fromEntries(formData);

  try {
    await connectToDB();

    const updateFields = {
      title,
      cat,
      price,
      stock,
      color,
      size,
      desc,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key],
    );

    await Product.findByIdAndUpdate(id, updateFields);
  } catch (e) {
    console.log(e);
    throw new Error("Failed to update product");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", {
      username,
      password,
      redirect: false, // IMPORTANT
    });

    return "SUCCESS";
  } catch (err) {
    return "Wrong Credentials";
  }
};
