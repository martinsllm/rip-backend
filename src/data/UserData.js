const uuid = require('uuid');
const { generateHash } = require('../services/bcrypt');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {

    List: () => {
        return prisma.usuario.findMany();
    },

    ListOne: async (id) => {
        const data = await prisma.usuario.findUnique({
            where: {
                id
            }
        })

        if(!data) throw new Error('Resultado não encontrado!')
        return data
    },

    ListFirst: async (params) => {
        const data = await prisma.usuario.findFirst({
            where: {
                ...params
            }
        })

        if(data) throw new Error('Dado já registrado!')
        return data
    },

    ListEmail: async (email) => {
        const data = await prisma.usuario.findFirst({
            where: {
                email
            }
        })

        if(!data) throw new Error('Resultado não encontrado!')
        return data
    },

    Create: async (params) => {
        await module.exports.ListFirst(params);

        return prisma.usuario.create({
            data: {
                ...params,
                id: uuid.v4().toString(),
                senha: await generateHash(params.senha),
                permissao: false,
            }
        })
    },

    Update: async (id, params) => {
        await module.exports.ListOne(id)

        return prisma.usuario.update({
            where: {
                id
            },
            data: {
                ...params
            }
        })
    },

    UpdatePassword: async (params) => {
        return prisma.usuario.updateMany({
            where: {
                email: params.email
            },
            data: {
                senha: await generateHash(params.senha)
            }
        })
    },

    Delete: async (id) => {
        await module.exports.ListOne(id)

        return prisma.usuario.delete({
            where: {
                id
            }
        })
    }
}