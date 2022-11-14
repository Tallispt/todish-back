import { Prisma } from "@prisma/client";
import { prisma } from "../database/prisma.js";

async function create(data: Prisma.usersUncheckedCreateInput) {
    return prisma.users.create({ data });

}

async function findUserByUsername(username: string) {
    return prisma.users.findUnique({
        where: {
            username
        }
    })
}

async function findUserByUserId(id: number) {
    return prisma.users.findUnique({
        where: {
            id
        }
    })
}

const userRepository = {
    create,
    findUserByUsername,
    findUserByUserId
};

export default userRepository;