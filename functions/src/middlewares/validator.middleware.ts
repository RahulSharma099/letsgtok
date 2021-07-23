import { Request, Response, NextFunction } from 'express';
import * as yup from 'yup';

type Location = 'query' | 'body' | 'params';

export function validateRequest(_schema: yup.ObjectSchema<any, any, any, any>, _location: Location) {
  return async function isValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    let location;
    try {
      //🤔 using yup for validation
      switch (_location) {
        case 'body':
          location = req.body;
          break;
        case 'params':
          location = req.params;
          break;
        case 'query':
          location = req.query;
          break;
      }
      await _schema.validate(location, { abortEarly: false });
      next();
    } catch (err) {
      let message = '';
      err.errors.forEach((e: string) => {
        message += `${e}. `;
      });
      next({ httpStatus: err.httpStatus || 400, message });
    }
  };
}
