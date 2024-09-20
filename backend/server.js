import express from "express";
import dotenv from 'dotenv'
dotenv.config();
import connectDB from './config/db.js';

connectDB();
import products from './data/products.js';

const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("API is available...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    if (product) res.json(product);
    else res.status(404).json({ message: "Product not found" });
})

app.listen(port, () => console.log(`Server running on port ${port}`));
