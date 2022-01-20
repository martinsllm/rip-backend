const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
    
    List: () => {
        return prisma.redesocial.findMany();
    },

    ListOne: (id) => {
        return prisma.redesocial.findUnique({
            where: {
                id: Number(id)
            }
        })
    },

    ListFirst: (params) => {
        return prisma.redesocial.findFirst({
            where: {
                ...params
            }
        })
    },

    Create: (params) => {
        return prisma.redesocial.create({
            data: {
                ...params
            }
        })
    },

    Update: (id, params) => {
        return prisma.redesocial.update({
            where: {
                id: Number(id)
            },
            data: {
                ...params
            }
        })
    },

    Delete: (id) => {
        return prisma.redesocial.delete({
            where: {
                id: Number(id)
            }
        })
    }
}