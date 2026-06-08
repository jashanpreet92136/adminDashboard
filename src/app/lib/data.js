import { connectToDB } from "./connect.js";
import { Product, Transaction, User } from "./models.js";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = parseInt(process.env.ITEM_PER_PAGE);
  console.log("ITEM_PER_PAGE:", process.env.ITEM_PER_PAGE);
  try {
    await connectToDB();
    const count = await User.countDocuments({
      username: { $regex: regex },
    });
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id) => {
  try {
    await connectToDB();

    const user = await User.findById(id);

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};
export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = parseInt(process.env.ITEM_PER_PAGE);

  try {
    await connectToDB();
    const count = await Product.countDocuments({
      title: { $regex: regex },
    });
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};
export const fetchProduct = async (id) => {
  try {
    await connectToDB();

    const product = await Product.findById(id);

    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product!");
  }
};

export const fetchTrans = async () => {
  try {
    await connectToDB();

    const transactions = await Transaction.find();

    return transactions;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product!");
  }
};
