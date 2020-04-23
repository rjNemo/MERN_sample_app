import express from "express";
import admin from "../../services/auth/index.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const {
    email,
    firstName,
    lastName,
    password,
    phoneNumber,
    photoUrl,
  } = req.body;

  const user = await admin.auth().createUser({
    email,
    phoneNumber,
    password,
    displayName: `${firstName} ${lastName}`,
    photoUrl,
  });

  return res.json(user);
});

export default router;
