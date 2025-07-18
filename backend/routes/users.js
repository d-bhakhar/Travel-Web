import express from 'express'
import { createUser, deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js';
// import { verify } from 'jsonwebtoken';


const router = express.Router()
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
//update user
router.put('/:id',verifyUser, updateUser);

//delete user
router.delete('/:id',verifyUser, deleteUser);

//getSingle user
router.get('/:id',verifyUser, getSingleUser);

//getAll user
router.get('/',verifyAdmin, getAllUser);

export default router;