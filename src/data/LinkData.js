const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
    
    List: () => {
        return prisma.redesocial.findMany();
    },

    ListOne: async (id) => {
        const data = await prisma.redesocial.findUnique({
            where: {
                id: Number(id)
            }
        })

        if(!data) throw new Error('Resultado não encontrado!')
        return data
    },

    ListFirst: async (params) => {
        const data = await prisma.redesocial.findFirst({
            where: {
                ...params
            }
        })

        if(data) throw new Error('Dado já registrado!')
        return data
    },

    Create: async (params) => {
        await module.exports.ValidateFields(params, null);

        return prisma.redesocial.create({
            data: {
                ...params
            }
        })
    },

    Update: async (id, params) => {
        await module.exports.ValidateFields(params, id)

        return prisma.redesocial.update({
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

        return prisma.redesocial.delete({
            where: {
                id: Number(id)
            }
        })
    },

    ValidateFields: (params, id) => {
        const { link } = params;

        if(id !== null){
            await module.exports.ListOne(id)
        }

        await module.exports.ListFirst(params)

        if(link === '') throw new Error('Um ou mais campos vazios!')
    }
}