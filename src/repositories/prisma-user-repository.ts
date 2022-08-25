import { PrismaClient, User } from "@prisma/client";
import { UsersRepository } from "./users-repository";

const prisma = new PrismaClient();

export class PrismaUsersRepository implements UsersRepository {
    async create(data: User){
        const user = await prisma.user.create({
            data: {
                nome: data.nome,
                email: data.email,
                telefone: Number(data.telefone),
                cpf: Number(data.cpf),
                sexo: data.sexo,
                dataNascimento: data.dataNascimento
            }
        });
    
        return user as User;
    };

    async update(data: User){

        const user = await prisma.user.update({
            where: {
                id: data.id
            }, data: {
                nome: data.nome,
                email: data.email,
                telefone: Number(data.telefone),
                cpf: Number(data.cpf),
                sexo: data.sexo,
                dataNascimento: data.dataNascimento
            }
        });

        return user;
    };

    async delete(id: string) {
        const user = await prisma.user.delete({
            where:{
                id
            }
        });
        return user;
    };

    async get(id: string) {
        
        const user = await prisma.user.findUnique({
            where:{
                id
            }
        });
        return user;
    };

    async getAll() {
        const users = await prisma.user.findMany({}); 
        return users;
    }

    
}