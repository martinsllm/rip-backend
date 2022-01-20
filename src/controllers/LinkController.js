const LinkData = require('../data/LinkData')

module.exports = {

    async List(req, res) {
        try {
            const links = await LinkData.List();

            return res.json(links)
        } catch (error) {
            return res.status(500).json({'ERROR': error.message})
        }
    },

    async ListOne(req, res) {
        try {
            const link = await LinkData.ListOne(req.params.id);

            if(!link) return res.status(404).json({'ERROR': 'Link não encontrado'})

            return res.json(link)
        } catch (error) {
            return res.status(500).json({'ERROR': error.message})
        }
    },

    async Create(req, res) {
        try {
            const link = await LinkData.ListFirst(req.body);

            if(link) return res.status(409).json({'ERROR': 'Rede social já registrada!'})

            await LinkData.Create({...req.body})

            return res.status(201).json();
        } catch (error) {
            return res.status(500).json({'ERROR': error.message})
        }
    },

    async Update(req, res) {
        try {
            const { id } = req.params

            const link = await LinkData.ListOne(id);

            if(!link) return res.status(404).json({'ERROR': 'Link não encontrado'})

            await LinkData.Update(id, req.body);

            return res.status(204).json()
        } catch (error) {
            return res.status(500).json({'ERROR': error.message})
        }
    },

    async Delete(req, res) {
        try {
            const { id } = req.params
            
            const link = await LinkData.ListOne(id);

            if(!link) return res.status(404).json({'ERROR': 'Link não encontrado'})

            await LinkData.Delete(id)

            return res.status(204).json()
        } catch (error) {
            return res.status(500).json({'ERROR': error.message})
        }
    },
}