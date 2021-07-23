import { Request, Response, NextFunction } from 'express';
import { errors } from '../error/error.constants';
import { getFirestoreInstance } from '../services/firebase.service';
import { contactSchema, Contact } from './contact.schema';

// 👽 Handler function to submit contact form data
export const submitFormData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const formData: Contact = contactSchema.cast(req.body) || (req.body as Contact);
    const db = await getFirestoreInstance();
    if (!db) {
      throw errors.FIREBASE_CONNECT_ERROR;
    }

    await db.collection('formData').add(formData);
    res.status(201).json({
      success: true,
      message: '✔ Submitted Sucessfully',
    });
  } catch (err) {
    next(err);
  }
};
