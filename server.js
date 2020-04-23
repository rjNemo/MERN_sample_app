import express from "express";
import mongoose from "mongoose";
import path from "path";
import moment from "moment";
import { MONGO_URI } from "./config/keys.js";
import items from "./routes/api/items.js";

const app = express();

// http port
const PORT = process.env.PORT || 5000;
// database connection key
const db = MONGO_URI;

// connection to database
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`${moment().format()}: MongoDB connected`))
  .catch((e) => console.error(e));

// bodyparser middleware
app.use(express.json());
// Register routes
app.use("/api/items/", items);

// Serve static assets in Production

if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Starts server
app.listen(PORT, () =>
  console.log(
    `${moment().format()}: Server running on http://localhost:${PORT}`
  )
);
