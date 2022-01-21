const uuid = require('uuid');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {

    List: () => {
        return prisma.arquivo.findMany();
    },

    ListOne: async (id) => {
        const data = await prisma.arquivo.findUnique({
            where: {
                id
            }
        })

        if(!data) throw new Error('Resultado não encontrado!');
        return data;
    },

    Create: (id, url) => {
        return prisma.arquivo.create({
            data: {
                id: uuid.v4().toString(),
                url,
                artigo: Number(id)
            }
        })
    },

    Delete: async (id) => {
        await module.exports.ListOne(id)

        return prisma.arquivo.delete({
            where: {
                id
            }
        })
    }
}