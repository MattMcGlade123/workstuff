import express from 'express';
import jwt from 'jsonwebtoken';

import { createUser, getUserByEmail } from '../dbs/users';
import { authentication, random } from '../helpers';
require("dotenv").config();

export const login = async (
  req: express.Request,
  res: express.Response
): Promise<express.Response> => {
  try {
    const { email, password } = req.body;

    console.log('email', email);
    console.log('password', password);

    if (!email || !password) {
      return res.sendStatus(400);
    }

    const user = await getUserByEmail(email).select('+authentication.salt +authentication.password');
    if (!user) {
      return res.sendStatus(400);
    }

    const expectedHash = authentication(user.authentication.salt, password);
    if (user.authentication.password !== expectedHash) {
      return res.sendStatus(403);
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1d' }
    );

    return res.status(200).json({ token }).end();
  } catch (error) {
    console.error(error);
    return res.sendStatus(400);
  }
};

export const register = async (
  req: express.Request,
  res: express.Response
): Promise<express.Response> => {
  try {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      return res.sendStatus(400);
    }

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return res.sendStatus(400);
    }

    const salt = random();
    const newUser = await createUser({
      email,
      username,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    });

    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1d' }
    );

    return res.status(200).json({ username: newUser.username, token }).end();
  } catch (error) {
    console.error(error);
    return res.sendStatus(400);
  }
};

export const checkAuth = (req: express.Request, res: express.Response) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.json({ authenticated: false });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (decoded) {
      return res.json({ authenticated: true });
    }
    else {
      return res.json({ authenticated: false });
    }
  } catch (err) {
    return res.json({ authenticated: false });
  }
};
