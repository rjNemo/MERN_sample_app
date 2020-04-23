import admin from "firebase-admin";
import serviceAccount from "../../config/service_account.json";

admin.initializeApp({
  credential: admin.default.credential.cert(serviceAccount),
  databaseURL: "https://devprojects-4749c.firebaseio.com",
});

export default admin;
