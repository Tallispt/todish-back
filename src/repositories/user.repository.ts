import { Prisma } from "@prisma/client";
import { prisma } from "../database/prisma.js";

async function create(data: Prisma.usersUncheckedCreateInput) {
    return prisma.users.create({ data });

}

async function findUserByUsername(username: string) {
    return prisma.users.findUnique({ where: { username } })
}

const userRepository = {
    create,
    findUserByUsername
};

export default userRepository;