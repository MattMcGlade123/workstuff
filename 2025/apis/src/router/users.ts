import express from 'express'
import { deleteUser, getAllUsers } from '../controllers/users';
import { isAuthenticated, isOwner } from '../middlewares';

export default (router: express.Router) => {
  // @ts-ignore
  router.get('/users', isAuthenticated, getAllUsers)

  // @ts-ignore
  router.delete('/users/:id', isOwner, deleteUser)
}