const uuid = require('uuid');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {

    List: () => {
        return prisma.foto.findMany();
    },

    ListOne: async (id) => {
        const data = await prisma.foto.findUnique({
            where: {
                id
            }
        })

        if(!data) throw new Error('Resultado não encontrado!')
        return data
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

    Delete: async (id) => {
        await module.exports.ListOne(id)
        
        return prisma.foto.delete({
            where: {
                id
            }
        })
    }
}