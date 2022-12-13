import { Prisma } from "@prisma/client";
import { prisma } from "../config/prisma.js";

async function create(data: Prisma.sessionsUncheckedCreateInput) {
    return prisma.sessions.create({ data });
}

async function findSessionByToken(token: string) {
    return prisma.sessions.findFirst({
        where: {
            token
        }
    })
}

const sessionRepository = {
    create,
    findSessionByToken
};

export default sessionRepository;