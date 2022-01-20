const uuid = require('uuid');
const { generateHash } = require('../services/bcrypt');
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

    ListEmail: (email) => {
        return prisma.usuario.findFirst({
            where: {
                email
            }
        })
    },

    Create: async (params) => {
        return prisma.usuario.create({
            data: {
                ...params,
                id: uuid.v4().toString(),
                senha: await generateHash(params.senha),
                permissao: false,
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