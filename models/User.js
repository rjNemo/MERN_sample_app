import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  roles: {
    type: Map,
    of: Boolean,
  },
  photoUrl: {
    type: String,
    default: "",
  },
  phoneNumber: {
    type: String,
    default: "",
  },
});

const User = mongoose.model("user", UserSchema);
export default User;
