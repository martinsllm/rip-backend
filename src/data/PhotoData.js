const uuid = require('uuid');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {

    List: () => {
        return prisma.foto.findMany();
    },

    ListOne: (id) => {
        return prisma.foto.findUnique({
            where: {
                id
            }
        })
    },

    Create: (id, url) => {
        return prisma.foto.create({
            data: {
                id: uuid.v4().toString(),
                url,
                id_usuario: id
            }
        })
    },

    Delete: (id) => {
        return prisma.foto.delete({
            where: {
                id
            }
        })
    }
}