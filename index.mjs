import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import "express-async-errors";
import products from "./routes/product.mjs";

const app = express();
const router = express.Router();


app.use(cors());
app.use(express.json());
app.use("/product", products);

// start the Express server
app.listen(4000, (req, res) => {
  console.log("application running");
});

app.get("/", async (req, res) => {
    res.send("Welcome to my marketplace application");
  });
    

// Global error handling
app.use((err, _req, res, next) => {
  console.error(err);
  res.status(500).send("Uh oh! An unexpected error occured.")
})

