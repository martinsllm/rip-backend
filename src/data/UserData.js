const uuid = require('uuid');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {

    List: () => {
        return prisma.usuario.findMany();
    },

    ListOne: (id) => {
        return prisma.usuario.findUnique({
            where: {
                id
            }
        })
    },

    ListFirst: (params) => {
        return prisma.usuario.findFirst({
            where: {
                ...params
            }
        })
    },

    Create: (params) => {
        return prisma.usuario.create({
            data: {
                id: uuid.v4().toString(),
                permissao: false,
                ...params
            }
        })
    },

    Update: (id, params) => {
        return prisma.usuario.update({
            where: {
                id
            },
            data: {
                ...params
            }
        })
    },

    Delete: (id) => {
        return prisma.usuario.delete({
            where: {
                id
            }
        })
    }
}