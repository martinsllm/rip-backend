const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {

    List: () => {
        return prisma.autor_artigo.findMany();
    },

    ListOne: async (id) => {
        const data = await prisma.autor_artigo.findUnique({
            where: {
                id: Number(id)
            }
        })

        if(!data) throw new Error('Resultado não encontrado!')
        return data;
    },

    ListFirst: async (params) => {
        const data = await prisma.autor_artigo.count({
            where: {
                ...params
            }
        })

        if(data) throw new Error('Dado já registrado!')
        return data;
    },

    Create: async (params) => {
        await module.exports.ValidateFields(params, null)

        return prisma.autor_artigo.create({
            data: {
                ...params
            }
        })
    },

    Update: async (id, params) => {
        await module.exports.ValidateFields(params, id)

        return prisma.autor_artigo.update({
            where: {
                id: Number(id)
            },
            data: {
                ...params
            }
        })
        
    },

    Delete: async (id) => {
        await module.exports.ListOne(id)

        return prisma.autor_artigo.delete({
            where: {
                id: Number(id)
            }
        })
    },

    ValidateFields: async (params, id) => {
        if(id !== null) {
            await module.exports.ListOne(id)
        } else {
            await module.exports.ListFirst(params);
        }
    }
}