const CategoryData = require('../data/CategoryData');

module.exports = {

    async List(req, res) {
        try {
            const categorias = await CategoryData.List();

            return res.json(categorias);
        } catch (error) {
            return res.status(500).json({'ERROR': error.message})
        }
    },

    async ListOne(req, res) {
        try {
            const categoria = await CategoryData.ListOne(req.params.id);

            if(!categoria) return res.status(404).json({'ERROR': 'Categoria não encontrada!'})

            return res.json(categoria);
        } catch (error) {
            return res.status(500).json({'ERROR': error.message})
        }
    },

    async Create(req, res) {
        try {
            const categoria = await CategoryData.ListFirst({...req.body});

            if(categoria) return res.status(409).json({'ERROR': 'Categoria já registrada!'})

            await CategoryData.Create({...req.body})

            return res.status(201).json();
        } catch (error) {
            return res.status(500).json({'ERROR': error.message})
        }
    },

    async Update(req, res) {
        try {
            const { id } = req.params

            const categoria = await CategoryData.ListOne(id);

            if(!categoria) return res.status(404).json({'ERROR': 'Categoria não encontrada!'})

            await CategoryData.Update(id, req.body)

            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({'ERROR': error.message})
        }
    },

    async Delete(req, res) {
        try {
            const { id } = req.params

            const categoria = await CategoryData.ListOne(id);

            if(!categoria) return res.status(404).json({'ERROR': 'Categoria não encontrada!'})

            await CategoryData.Delete(id)

            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({'ERROR': error.message})
        }
    },
    
}