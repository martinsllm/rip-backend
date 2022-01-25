const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {

    List: () => {
        return prisma.status.findMany();
    },

    ListOne: async (id) => {
        const data = await prisma.status.findUnique({
            where: {
                id: Number(id)
            }
        })

        if(!data) throw new Error('Resultado não encontrado!')
        return data
    },

    ListFirst: async (params) => {
        const { status } = params;

        const data = await prisma.status.findFirst({
            where: {
                status
            }
        })

        if(data) throw new Error('Dado já registrado!')

        return data
    },

    Create: async (params) => {
        await module.exports.ValidateFields(params, null);

        return prisma.status.create({
            data: {
                ...params
            }
        })
    },

    Update: async (id, params) => {
        await module.exports.ValidateFields(params, id);

        return prisma.status.update({
            where: {
                id: Number(id)
            },
            data: {
                ...params
            }
        })
    },

    Delete: async (id) => {
        await module.exports.ListOne(id);

        return prisma.status.delete({
            where: {
                id: Number(id)
            }
        })
    },

    ValidateFields: async (params, id) => {
        const { status } = params

        if(id !== null) {
           await module.exports.ListOne(id)
        } else {
            await module.exports.ListFirst(params)
        }

        if(status === '') throw new Error('Um ou mais campos vazios!')
    }

}