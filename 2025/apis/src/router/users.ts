import express from 'express'
import { deleteUser, getAllUsers, updateUser } from '../controllers/users';
import { isAuthenticated, isOwner } from '../middlewares';

export default (router: express.Router) => {
  // @ts-ignore
  router.get('/users', isAuthenticated, getAllUsers)

  // @ts-ignore
  router.delete('/users/:id', isOwner, deleteUser)


  // @ts-ignore
  router.path('/users/:id', isOwner, updateUser)
}