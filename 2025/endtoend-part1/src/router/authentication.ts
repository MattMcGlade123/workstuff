import express from 'express';
import { login, register, checkAuth } from '../controllers/authentication';

export default (router: express.Router) => {
  // @ts-ignore
  router.post('/auth/register', register)
  // @ts-ignore
  router.post('/auth/login', login)
  // @ts-ignore
  router.post('/auth/check-auth', checkAuth)
}