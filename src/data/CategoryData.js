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
        const data = await prisma.categoria.findFirst({
            where: {
                ...params
            }
        });

        if(data) throw new Error('Dado já registrado!')
        return data
    },

    Create: async (params) => {
        await module.exports.ListFirst({...params});
        await module.exports.ValidateFields({...params})
        
        return prisma.categoria.create({
            data: {
                ...params
            }
        })
    },

    Update: async (id, params) => {
        await module.exports.ListOne(id);
        await module.exports.ValidateFields({...params});

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

    ValidateFields: (params) => {
        if(params.nome === '') throw new Error('Um ou mais campos vazios!')
    }
}