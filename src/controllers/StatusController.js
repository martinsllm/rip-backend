const StatusData = require('../data/StatusData');

module.exports = {

    async List(req, res, next) {
        try {
            const data = await StatusData.List();
            return res.json(data);
        } catch (error) {
            next(error)
        }
    },

    async ListOne(req, res, next) {
        try {
            const data = await StatusData.ListOne(req.params.id);
            return res.json(data);
        } catch (error) {
            next(error)
        }
    },

    async Create(req, res, next) {
        try {
            await StatusData.Create({...req.body})
            return res.status(201).json();
        } catch (error) {
            next(error)
        }
    },

    async Update(req, res, next) {
        try {
            await StatusData.Update(req.params.id, req.body)
            return res.status(204).json();
        } catch (error) {
            next(error)
        }
    },

    async Delete(req, res, next) {
        try {
            await StatusData.Delete(req.params.id)
            return res.status(204).json();
        } catch (error) {
            next(error)
        }
    },


}