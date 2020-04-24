import express from "express";
import admin from "../../services/auth/index.js";
import User from "../../models/User.js";

const router = express.Router();

/**
 * @route POST /api/users/
 * @access Public
 * @description Creates a user
 */
router.post("/", async (req, res) => {
  const newUser = new User({
    ...req.body,
  });

  //TODO: verify email uniqueness
  const user = await newUser.save();
  // const user = await admin.auth().createUser({
  //   email,
  //   phoneNumber,
  //   password,
  //   displayName: `${firstName} ${lastName}`,
  //   photoUrl,
  // });

  return res.json(user);
});

/**
 * @route GET /api/users
 * @description Get all users
 * @access Public
 */
router.get("/", (req, res) => {
  User.find().then((u) => res.json(u));
});

export default router;
