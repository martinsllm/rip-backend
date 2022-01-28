const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {

    ListAll: () => {
        return prisma.artigo.findMany({
            include: {
                categoria: {
                    select: {
                        nome: true
                    }
                },
                status: {
                    select: {
                        status: true
                    }
                },
                autor_artigo: {
                    select: {
                        usuario: {
                            select: {
                                nome: true
                            }
                        }
                    }
                },
            }
        });
    },

    ListAllCategory: async (id) => {
        return prisma.artigo.findMany({
            where: {
                categoriaId: Number(id),
            },
            orderBy: {
                nome: 'asc'
            },
            include: {
                status: {
                    select: {
                        status: true
                    }
                },
                autor_artigo: {
                    select: {
                        usuario: {
                            select: {
                                nome: true,
                            }
                        },
                    },
                }
            }
        });
    },

    ListOne: async (id) => {
        const data = await prisma.artigo.findUnique({
            where: {
                id: Number(id)
            },
            include: {
                categoria: {
                    select: {
                        nome: true
                    }
                },
                status: {
                    select: {
                        status: true
                    }
                },
                autor_artigo: {
                    select: {
                        usuario: {
                            select: {
                                nome: true
                            }
                        }
                    }
                },
                artigo_repositorio: {
                    select: {
                        repositorio: {
                            select: {
                                nome: true
                            }
                        }
                    }
                },
                arquivo: {
                    orderBy: {
                        createdAt: 'asc'
                    }
                }
            }
        })

        if(!data) throw new Error('Resultado não encontrado!')
        return data
    },

    Create: async (params) => {
        await module.exports.ValidateFields(params, null);

        return prisma.artigo.create({
            data: {
                ...params
            }
        })
    },

    Update: async (id, params) => {
        await module.exports.ValidateFields(params, id);

        return prisma.artigo.update({
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

        return prisma.artigo.delete({
            where: {
                id: Number(id)
            }
        })
    },

    ValidateFields: async (params, id) => {
        const { nome, sumario } = params;

        if(id !== null) {   
           await module.exports.ListOne(id)
        }

        if(nome === '' || sumario === '') throw new Error('Um ou mais campos vazios!')
    },


}