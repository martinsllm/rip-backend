const UserData = require('../data/UserData')

module.exports = {

    async List(req, res) {
        try {
            const users = await UserData.List();

            return res.json(users);
        } catch (error) {
            return res.status(500).json({'ERROR': error.message})
        }
    },

    async ListOne(req, res) {
        try {
            const user = await UserData.ListOne(req.params.id);

            if(!user) return res.status(404).json({'ERROR': 'Usuário não encontrado!'})

            return res.json(user);
        } catch (error) {
            return res.status(500).json({'ERROR': error.message})
        }
    },

    async Create(req, res) {
        try {
            const user = await UserData.ListFirst({...req.body});

            if(user) return res.status(409).json({'ERROR': 'Usuário já cadastrado!'});

            await UserData.Create({...req.body});

            return res.status(201).json();
        } catch (error) {
            return res.status(500).json({'ERROR': error.message})
        }
    },

    async Update(req, res) {
        try {
            const user = await UserData.ListOne(req.params.id);

            if(!user) return res.status(404).json({'ERROR': 'Usuário não encontrado!'})

            await UserData.Update(req.params.id, req.body)

            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({'ERROR': error.message})
        }
    },

    async Delete(req, res) {
        try {
            const user = await UserData.ListOne(req.params.id);

            if(!user) return res.status(404).json({'ERROR': 'Usuário não encontrado!'})

            await UserData.Delete(req.params.id)

            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({'ERROR': error.message})
        }
    },
}