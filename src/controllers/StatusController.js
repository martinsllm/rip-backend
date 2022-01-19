const StatusData = require('../data/StatusData');

module.exports = {

    async List(req, res) {
        try {
            const status = await StatusData.List();

            return res.json(status);
        } catch (error) {
            return res.status(500).json({'ERROR': error.message})
        }
    },

    async ListOne(req, res) {
        try {
            const status = await StatusData.ListOne(req.params.id);

            if(!status) return res.status(404).json({'ERROR': 'Estado não encontrado!'})

            return res.json(status);
        } catch (error) {
            return res.status(500).json({'ERROR': error.message})
        }
    },

    async Create(req, res) {
        try {
            const status = await StatusData.ListFirst({...req.body});

            if(status) return res.status(409).json({'ERROR': 'Estado já registrado!'});

            await StatusData.Create({...req.body})

            return res.status(201).json();
        } catch (error) {
            return res.status(500).json({'ERROR': error.message})
        }
    },

    async Update(req, res) {
        try {
            const status = await StatusData.ListOne(req.params.id);

            if(!status) return res.status(404).json({'ERROR': 'Estado não encontrado!'})

            await StatusData.Update(req.params.id, req.body)

            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({'ERROR': error.message})
        }
    },

    async Delete(req, res) {
        try {
            const status = await StatusData.ListOne(req.params.id);

            if(!status) return res.status(404).json({'ERROR': 'Estado não encontrado!'})

            await StatusData.Delete(req.params.id)

            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({'ERROR': error.message})
        }
    },


}