const FileData = require('../data/FileData')

module.exports = {

    async List(req, res, next) {
        try {
            const data = await FileData.List();
            return res.json(data);
        } catch (error) {
            next(error)
        }
    },

    async ListOne(req, res, next) {
        try {
            const data = await FileData.ListOne(req.params.id);
            return res.json(data);
        } catch (error) {
            next(error)
        }
    },

    async Create(req, res, next) {
        try {
            const url = `data:application/pdf;base64,${req.file.buffer.toString('base64')}`;

            await FileData.Create(req.params.id, url);

            return res.status(201).json();
        } catch (error) {
            next(error)
        }
    },

    async Delete(req, res, next) {
        try {
            await FileData.Delete(req.params.id)
            return res.status(204).json()
        } catch (error) {
            next(error)
        }
    },
}