const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {

    List: () => {
        return prisma.artigo_repositorio.findMany();
    },

    ListOne: async (id) => {
        const data = await prisma.artigo_repositorio.findUnique({
            where: {
                id: Number(id)
            }
        })

        if(!data) throw new Error('Resultado não encontrado!')
        return data;
    },

    ListFirst: async (params) => {
        const data = await prisma.artigo_repositorio.count({
            where: {
                ...params
            }
        })

        if(data) throw new Error('Dado já registrado!')
        return data;
    },

    Create: async (params) => {
        await module.exports.ValidateFields(params, null)

        return prisma.artigo_repositorio.create({
            data: {
                ...params
            }
        })
    },

    Update: async (id, params) => {
        await module.exports.ValidateFields(params, id)

        return prisma.artigo_repositorio.update({
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

        return prisma.artigo_repositorio.delete({
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