import mongoose from "mongoose";
import { Transaction } from "./src/app/lib/models.js";
import { connectToDB } from "./src/app/lib/connect.js";

const seedTransactions = async () => {
  try {
    await connectToDB();
    console.log("Database connected");

    await Transaction.insertMany([
      {
        name: "Jashan",
        amount: 3200,
        status: "success",
        type: "deposit",
        method: "card",
        transactionId: "TXN1001",
      },
      {
        name: "Navi",
        amount: 1200,
        status: "pending",
        type: "withdrawal",
        method: "paypal",
        transactionId: "TXN1002",
      },
      {
        name: "Karan",
        amount: 5400,
        status: "failed",
        type: "deposit",
        method: "card",
        transactionId: "TXN1003",
      },
      {
        name: "Simran",
        amount: 2100,
        status: "refunded",
        type: "withdrawal",
        method: "bank",
        transactionId: "TXN1004",
      },
      {
        name: "Aman",
        amount: 7800,
        status: "success",
        type: "deposit",
        method: "paypal",
        transactionId: "TXN1005",
      },
      {
        name: "Ravi",
        amount: 950,
        status: "success",
        type: "withdrawal",
        method: "cash",
        transactionId: "TXN1006",
      },
      {
        name: "Mehak",
        amount: 4300,
        status: "pending",
        type: "deposit",
        method: "card",
        transactionId: "TXN1007",
      },
      {
        name: "Harpreet",
        amount: 6700,
        status: "success",
        type: "deposit",
        method: "bank",
        transactionId: "TXN1008",
      },
      {
        name: "Sahil",
        amount: 1800,
        status: "failed",
        type: "withdrawal",
        method: "paypal",
        transactionId: "TXN1009",
      },
      {
        name: "Anita",
        amount: 9900,
        status: "success",
        type: "deposit",
        method: "card",
        transactionId: "TXN1010",
      },
    ]);

    console.log("Seed data inserted successfully!");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedTransactions();
