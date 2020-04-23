import express from "express";
import { Item } from "../../models/Item.js";

const router = express.Router();

/**
 * @route GET api/items
 * @access Public
 * @description Get all items.
 */
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

/**
 * @route POST api/items
 * @access Public
 * @description Create an item.
 */
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });
  newItem.save().then((item) => res.json(item));
});

/**
 * @route DELETE api/items/:id
 * @access Public
 * @description Delete an item.
 */
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((e) => res.status(404).json({ status: "Not Found" }));
});

export default router;
