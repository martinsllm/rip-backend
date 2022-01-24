const RepositoryData = require('../data/RepositoryData');

module.exports = {

    async List(req, res, next) {
        try {
            const data = await RepositoryData.List();
            return res.json(data);
        } catch (error) {
            next(error)
        }
    },

    async ListOne(req, res, next) {
        try {
            const data = await RepositoryData.ListOne(req.params.id);
            return res.json(data);
        } catch (error) {
            next(error)
        }
    },

    async Create(req, res, next) {
        try {
            await RepositoryData.Create({...req.body})
            return res.status(201).json()
        } catch (error) {
            next(error)
        }
    },

    async Update(req, res, next) {
        try {
            await RepositoryData.Update(req.params.id, req.body)
            return res.status(204).json();
        } catch (error) {
            next(error)
        }
    },

    async Delete(req, res, next) {
        try {
            await RepositoryData.Delete(req.params.id)
            return res.status(204).json();
        } catch (error) {
            next(error)
        }
    },

}