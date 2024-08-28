import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import { Card } from "./models/cardModel.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on ${PORT}`);
    });

    console.log("DB Connected");
  })
  .catch((err) => console.error("Connection error", err));

//server check

app.get("/ping", (req, res) => {
  res.json({ message: "Server is running" });
});

//create a card

app.post("/cards", async (req, res) => {
  try {
    const { title, description } = req.body;
    const newCard = new Card({ title, description });
    await newCard.save();
    res.status(201).json({
      message: "Created A New Card",
      newCard,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//get all card

app.get("/cards", async (req, res) => {
  try {
    const cards = await Card.find();
    res.json({
      success: true,
      cards,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//get single card

app.get("/cards/:title", async (req, res) => {
  try {
    const card = await Card.findOne({ title: req.params.title });
    if (!card) return res.status(404).json({ message: "Card not found" });
    res.json({
      success: true,
      card,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
