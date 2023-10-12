import express from "express";
import { PORT } from "./config.js";
import productsRoute from "./server/routes/product.routes.js";
import cors from "cors";

const app = express();

// config
app.use(express.json());
app.set("json spaces", 2);
app.use("*", (req, res, next) => {
  console.log(req.headers["user-agent"]);
  next();
});

const allowList = ["http://localhost:5173", "http://localhost:4000"];

app.use(cors({ origin: allowList }));

// routes
app.get("/api", (req, res) => {
  res.send("tdo bien");
});

app.use("/api/products", productsRoute);

app.listen(PORT, () => {
  console.log("server running on port http://localhost:4000");
});
