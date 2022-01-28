const uuid = require('uuid');
const { generateHash } = require('../services/bcrypt');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {

    List: () => {
        return prisma.usuario.findMany();
    },

    ListOne: async (id) => {
        const data = await prisma.usuario.findUnique({
            where: {
                id
            },
            include: {
                foto: {
                    select: {
                        url: true
                    }
                },
                redesocial: true,
                repositorio: true
            }
        })

        if(!data) throw new Error('Resultado não encontrado!')
        return data
    },

    ListFirst: async (params) => {
        const data = await prisma.usuario.findFirst({
            where: {
                ...params
            }
        })

        return data
    },

    Create: async (params) => {
        await module.exports.ValidateFields(params, null)

        return prisma.usuario.create({
            data: {
                ...params,
                id: uuid.v4().toString(),
                senha: await generateHash(params.senha),
                permissao: false,
            }
        })
    },

    Update: async (id, params) => {
        await module.exports.ValidateFields(params, id)

        return prisma.usuario.update({
            where: {
                id
            },
            data: {
                ...params
            }
        })
    },

    UpdatePassword: async (params) => {
        const { email, senha } = params;

        await module.exports.ValidateFields(params, null);

        return prisma.usuario.updateMany({
            where: {
                email
            },
            data: {
                senha: await generateHash(senha)
            }
        })
    },

    Delete: async (id) => {
        await module.exports.ListOne(id)

        return prisma.usuario.delete({
            where: {
                id
            }
        })
    },

    ValidateFields: async (params, id) => {
        const { nome, email, senha } = params;
        let data = await module.exports.ListFirst(params)

        if(id !== null) {
            await module.exports.ListOne(id)
        } else {
            if(Object.keys(params) > 2) {
                if(data) throw new Error('Dado já cadastrado!')
            }
        }

        if(nome === '' || email === '' || senha === '') throw new Error('Um ou mais campos vazios!')

        if(senha.length < 6) throw new Error('Senha fraca!');
    }
}