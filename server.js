const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  shortid = require("shortid"),
  PORT = process.env.PORT || 5000;

// MIDDLEWARE
app.use(bodyParser.json());

// DATABASE
mongoose.connect("mongodb://localhost/e-commerce-db", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const Product = mongoose.model(
  "products",
  new mongoose.Schema({
    _id: { type: String, default: shortid.generate },
    title: String,
    description: String,
    price: Number,
    availableSizes: [String],
  })
);

// ROUTES
app.get("/api/products", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

app.post("/api/products", async (req, res) => {
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();
  res.send(savedProduct);
});

app.delete("/api/products/:id", async (req, res) => {
  const delProduct = await Product.findByIdAndDelete(req.params.id);
  res.send(delProduct);
});
// SERVER
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
