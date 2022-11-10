import { Prisma } from "@prisma/client";
import { prisma } from "../database/prisma.js";

async function create(data: Prisma.usersUncheckedCreateInput) {
    return prisma.users.create({ data });
}

function findAll() {
    return prisma.users.findMany()
}

const userRepository = {
    create,
    findAll
};

export default userRepository;