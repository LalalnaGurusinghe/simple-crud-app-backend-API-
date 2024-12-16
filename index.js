const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const productRouter = require("./routes/product.routes"); 
// Middleware
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Welcome into the API server");
});

// Use the product router for all /api routes
app.use("/api", productRouter);

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://admin:12345Lmg@backenddb.l4waw.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to the database");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
