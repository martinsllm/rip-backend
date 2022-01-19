const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {

    List: () => {
        return prisma.status.findMany();
    },

    ListOne: (id) => {
        return prisma.status.findUnique({
            where: {
                id: Number(id)
            }
        })
    },

    ListFirst: (params) => {
        return prisma.status.findFirst({
            where: {
                ...params
            }
        })
    },

    Create: (params) => {
        return prisma.status.create({
            data: {
                ...params
            }
        })
    },

    Update: (id, params) => {
        return prisma.status.update({
            where: {
                id: Number(id)
            },
            data: {
                ...params
            }
        })
    },

    Delete: (id) => {
        return prisma.status.delete({
            where: {
                id: Number(id)
            }
        })
    }

}