import express from 'express';
import * as functions from 'firebase-functions';
import { onError, onNotFound } from './error/error.controller';
import formRoutes from './contactForm/contact.routes';
import cors = require('cors');

function startServer() {
  const app = express();

  // It shows the real origin IP in the heroku or Cloudwatch logs
  app.enable('trust proxy');

  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());

  // Middleware that transforms the raw string of req.body into json
  app.use(express.json());

  // 🛣 Router connection to main app
  app.use('/', formRoutes);

  /** Middleware Endpoints */
  app.use(onNotFound);
  app.use(onError);

  return app;
}

const expressApp = startServer();

export const api = functions.region('asia-south1').https.onRequest(expressApp);
