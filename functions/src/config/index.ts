import dotenv from 'dotenv';
dotenv.config();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

export default {
  /**
   * Jwt secret key
   */
  secret: process.env.JWT_SECRET_KEY,

  /**
   * Send Grid API Key
   */
  sendGrid: process.env.SEND_GRID_API_KEY,
  templateId: process.env.SEND_GRID_TEMPLATE_ID,

  /**
   * Firebase Config files
   */
  firebaseConfig: {
    apiKey: process.env.FIREBASE_API_KEY,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
  },
};
