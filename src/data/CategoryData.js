const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


module.exports = {

    List: () => {
        return prisma.categoria.findMany();
    },

    ListOne: (id) => {
        return prisma.categoria.findUnique({
            where: {
                id: Number(id)
            }
        });
    },

    ListFirst: (params) => {
        return prisma.categoria.findFirst({
            where: {
                ...params
            }
        });
    },

    Create: (params) => {
        return prisma.categoria.create({
            data: {
                ...params
            }
        })
    },

    Update: (id, params) => {
        return prisma.categoria.update({
            where: {
                id: Number(id)
            },
            data: {
                ...params
            }
        })
    },

    Delete: (id) => {
        return prisma.categoria.delete({
            where: {
                id: Number(id)
            }
        })
    }
}