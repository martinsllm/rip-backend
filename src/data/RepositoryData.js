const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {

    List: () => {
        return prisma.repositorio.findMany();
    },

    ListOne: async (id) => {
        const data = await prisma.repositorio.findUnique({
            where: {
                id: Number(id)
            }
        })

        if(!data) throw new Error('Resultado não encontrado!');
        return data
    },

    Create: async (params) => {
        await module.exports.ValidateFields(params, null)

        return prisma.repositorio.create({
            data: {
                ...params
            }
        })
    },

    Update: async (id, params) => {
        await module.exports.ValidateFields(params, id)

        return prisma.repositorio.update({
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

        return prisma.repositorio.delete({
            where: {
                id: Number(id)
            }
        })
    },

    ValidateFields: async (params, id) => {
        const { nome } = params;

        if(id !== null) {
            await module.exports.ListOne(id)
        }

        if(nome === '') throw new Error('Um ou mais campos vazios!')
    }
}