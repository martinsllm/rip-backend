const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


module.exports = {

    List: () => {
        return prisma.categoria.findMany();
    },

    ListOne: async (id) => {
        const data = await prisma.categoria.findUnique({
            where: {
                id: Number(id)
            }
        });

        if(!data) throw new Error('Resultado não encontrado!') 
        return data
    },

    ListFirst: async (params) => {
        const { nome } = params;

        const data = await prisma.categoria.findFirst({
            where: {
                nome
            }
        })

        if(data) throw new Error('Dado já registrado!')
        return data
    },

    Create: async (params) => {
        await module.exports.ValidateFields(params, null)
        
        return prisma.categoria.create({
            data: {
                ...params
            }
        })
    },

    Update: async (id, params) => {
        await module.exports.ValidateFields(params, id);

        return prisma.categoria.update({
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
        
        return prisma.categoria.delete({
            where: {
                id: Number(id)
            }
        })
    },

    ValidateFields: async (params, id) => {
        const { nome } = params

        if(id !== null) {
            await module.exports.ListOne(id)
        } else {
            await module.exports.ListFirst(params)
        }

        if(nome === '') throw new Error('Um ou mais campos vazios!')
    }
}