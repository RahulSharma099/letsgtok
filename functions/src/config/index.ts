import dotenv from "dotenv";
dotenv.config();

process.env.NODE_ENV = process.env.NODE_ENV || "development";

export default {
  /**
   * Jwt secret key
   */
  secret: process.env.JWT_SECRET_KEY,

  /**
   * Firebase Config files
   */
  firebaseConfig: {
    apiKey: process.env.FIREBASE_API_KEY,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
  },
};
