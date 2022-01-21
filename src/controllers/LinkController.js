const LinkData = require('../data/LinkData')

module.exports = {

    async List(req, res, next) {
        try {
            const data = await LinkData.List();
            return res.json(data)
        } catch (error) {
            next(error)
        }
    },

    async ListOne(req, res, next) {
        try {
            const data = await LinkData.ListOne(req.params.id);
            return res.json(data)
        } catch (error) {
            next(error)
        }
    },

    async Create(req, res, next) {
        try {
            await LinkData.Create({...req.body})
            return res.status(201).json();
        } catch (error) {
            next(error)
        }
    },

    async Update(req, res, next) {
        try {
            await LinkData.Update(req.params.id, req.body);
            return res.status(204).json()
        } catch (error) {
            next(error)
        }
    },

    async Delete(req, res, next) {
        try {
            await LinkData.Delete(req.params.id)
            return res.status(204).json()
        } catch (error) {
            next(error)
        }
    },
}