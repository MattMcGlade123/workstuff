import express from 'express'
import { get, merge } from 'lodash';
import { getUsers, getUsersBySessionToken } from '../db/users';

export const isOwner = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { id } = req.params;
    const currentUserId = get(req, 'identity._id') as string;
    console.log('id', id)
    console.log('currentUserId', currentUserId)

    if (!currentUserId) {
      return res.sendStatus(403)
    }

    if (currentUserId.toString() !== id) {
      return res.sendStatus(403)
    }

    return next();
  }
  catch (error) {
    console.error(error);
    return res.sendStatus(400);
  }
}

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const sessionToken = req.cookies['auth-token'];

    console.log('sessionToken', sessionToken)

    if (!sessionToken) {
      return res.sendStatus(403)
    }

    const existingUser = await getUsersBySessionToken(sessionToken);

    console.log('existingUser', existingUser)

    if (!existingUser) {
      return res.sendStatus(403)
    }

    merge(req, { identity: existingUser })

    return next();
  }
  catch (error) {
    console.error(error);
    return res.sendStatus(400);
  }
}