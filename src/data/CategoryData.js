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

        const data = await prisma.categoria.count({
            where: {
                nome
            }
        })

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
        let data
        let quantity = await module.exports.ListFirst(nome)

        if(id !== null) {
            data = await module.exports.ListOne(id)

            if(quantity >= 1 && data.nome !== nome) 
                throw new Error('Dado já registrado!')
        } else {
            if(quantity) throw new Error('Dado já registrado!')
        }

        if(nome === '') throw new Error('Um ou mais campos vazios!')
    }
}