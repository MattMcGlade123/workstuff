import { type Response, type NextFunction } from 'express';
import jwt from 'jsonwebtoken'
import type { AuthTokenPayload, RequestWithUser } from '../type.ts';

export const authenticate = async (req: RequestWithUser, res: Response, next: NextFunction) => {
  if (!process.env.JWT_SECRET) {
    return res.status(500).send(`There was an error with the JWT token`);
  }

  const bearerToken = req.headers['authorization']
  const token = bearerToken && bearerToken.split(' ')[1];

  if (token == null) {
    return res.sendStatus(401)
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
      if (error) {
        return res.status(403).send('Invalid token')
      }
      req.user = user as AuthTokenPayload;

      next()
    });
  } catch (error) {
    return res.status(403).send('Invalid token')
  }
}