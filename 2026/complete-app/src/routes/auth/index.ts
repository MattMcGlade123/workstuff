import { type Request, type Response } from 'express';
import { User } from '../../models/User.ts';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';
import { MongoServerError } from 'mongodb'

export const loginRoute = async (req: Request, res: Response) => {
  if (req.body.email === undefined || req.body.password === undefined) {
    return res.status(400).send(`There is missing data`);
  }
  else {
    try {
      if (!process.env.JWT_SECRET) {
        return res.status(500).send(`There was an error with the JWT token`);
      }

      const customer = await User.findOne({ email: req.body.email });

      if (!customer) {
        return res.status(401).send('Error with logging in');
      }

      if (customer?.password) {
        const hasPassword = await bcrypt.compare(req.body.password, customer.password)

        if (hasPassword) {
          const token = jwt.sign({ userId: customer.id, role: customer.role }, process.env.JWT_SECRET, { expiresIn: '1d' })
          return res.status(200).send({ message: `Succesfully logged in`, token })
        }
        else {
          return res.status(401).send('Error with logging in')
        }
      }
      else {
        return res.status(401).send('Error with saved data')
      }

    } catch (error) {
      if (error instanceof MongoServerError) {
        return res.status(400).send(error.errorResponse.errmsg);
      }

      res.status(500).send(`There was an error`);
    }
  }
}

export const registerRoute = async (req: Request, res: Response) => {
  if (req.body.email === undefined || req.body.name === undefined || req.body.password === undefined) {
    return res.status(400).send(`There is missing data`);
  }
  else {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      const newUser = await User.create({ 'email': req.body.email, 'name': req.body.name, 'password': hashedPassword, 'role': 'customer' })
      res.status(201).send({ message: `User created successfully : Email:${newUser.email} Name:${newUser.name} Role:${newUser.role}` });
    } catch (error) {
      if (error instanceof MongoServerError && error?.errorResponse?.code === 11000) {
        return res.status(400).send(error.errorResponse.errmsg);
      }

      res.status(500).send(`There was an error`);
    }
  }

}
