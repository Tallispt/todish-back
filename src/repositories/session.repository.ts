import { Prisma } from "@prisma/client";
import { prisma } from "../database/prisma.js";

async function create(data: Prisma.sessionsUncheckedCreateInput) {
    return prisma.sessions.create({ data });
}

const sessionRepository = {
    create,
};

export default sessionRepository;