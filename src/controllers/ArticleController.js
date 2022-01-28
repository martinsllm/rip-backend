const ArticleData = require('../data/ArticleData')

module.exports = {

    async ListAll(req, res, next) {
        try {
            const data = await ArticleData.ListAll();
            return res.json(data);
        } catch (error) {
            next(error)
        }
    },

    async ListAllCategory(req, res, next) {
        try {
            const data = await ArticleData.ListAllCategory(req.params.id);
            return res.json(data);
        } catch (error) {
            next(error)
        }
    },

    async ListAllStatus(req, res, next) {
        try {
            const data = await ArticleData.ListAllStatus(req.params.id);
            return res.json(data);
        } catch (error) {
            next(error)
        }
    },

    async ListOne(req, res, next) {
        try {
            const data = await ArticleData.ListOne(req.params.id)
            return res.json(data)
        } catch (error) {
            next(error)
        }
    },

    async Create(req, res, next) {
        try {
            await ArticleData.Create(req.body)
            return res.status(201).json()
        } catch (error) {
            next(error)
        }
    },

    async Update(req, res, next) {
        try {
            await ArticleData.Update(req.params.id, req.body)
            return res.status(204).json()
        } catch (error) {
            next(error)
        }
    },

    async Delete(req, res, next) {
        try {
            await ArticleData.Delete(req.params.id)
            return res.status(204).json()
        } catch (error) {
            next(error)
        }
    },


}