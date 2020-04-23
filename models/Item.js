import mongoose from "mongoose";

// create a schema
const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export const Item = mongoose.model("item", ItemSchema);
