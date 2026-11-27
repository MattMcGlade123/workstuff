import { type Request, type Response, type NextFunction } from 'express';

export const requireRole =  (role: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (role !== req.user.role) {
      return res.status(403).send('No allowed')
    }

    next()
  }
}