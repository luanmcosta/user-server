import { Router } from "express";
import { PrismaClient, User} from '@prisma/client'
import { PrismaUsersRepository } from "./repositories/prisma-user-repository";
const prisma = new PrismaClient()

const router = Router();


const usersRepository = new PrismaUsersRepository();

/*
* Create User
*/
router.post('/users', async (req, res) => {
    const user = await usersRepository.create(req.body.data);
    res.json(user);
})

/*
* Get all users
*/
router.get('/users', async (req, res) => {
    const users = await usersRepository.getAll();
    res.json(users);
});

/*
* Get user by ID
*/
router.get('/users/:id', async(req, res) => {
    const user = await usersRepository.get(req.params.id);
    res.json(user);
})

/*
* Delete user by ID
*/
router.delete('/users/:id', async(req, res) => {
    const user = await usersRepository.delete(req.params.id);
    res.json(user);
})

/*
* Update user by ID
*/
router.put('/users', async(req, res) => {
    const user = await usersRepository.update(req.body.data);
    res.json(user);
})

export default router;