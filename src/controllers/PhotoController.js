const PhotoData = require('../data/PhotoData')

module.exports = {

    async List(req, res, next) {
        try {
            const data = await PhotoData.List();
            return res.json(data);
        } catch (error) {
            next(error)
        }
    },

    async ListOne(req, res, next) {
        try {
            const data = await PhotoData.ListOne(req.params.id);
            return res.json(data);
        } catch (error) {
            next(error)
        }
    },

    async Create(req, res, next) {
        try {
            const url = `data:image/jpeg;base64,${req.file.buffer.toString('base64')}`

            await PhotoData.Create(req.params.id, url);

            return res.status(201).json();
        } catch (error) {
            next(error)
        }
    },

    async Delete(req, res, next) {
        try {
            await PhotoData.Delete(req.params.id)
            return res.status(204).json();
        } catch (error) {
            next(error)
        }
    },
}