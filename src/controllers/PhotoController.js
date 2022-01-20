const PhotoData = require('../data/PhotoData')

module.exports = {

    async List(req, res) {
        try {
            const fotos = await PhotoData.List();

            return res.json(fotos);
        } catch (error) {
            return res.status(500).json({'ERROR': error.message})
        }
    },

    async ListOne(req, res) {
        try {
            const foto = await PhotoData.ListOne(req.params.id);

            if(!foto) return res.status(404).json({'ERROR': 'Foto não encontrada!'})

            return res.json(foto);
        } catch (error) {
            return res.status(500).json({'ERROR': error.message})
        }
    },

    async Create(req, res) {
        try {
            const url = `data:image/jpeg;base64,${req.file.buffer.toString('base64')}`

            await PhotoData.Create(req.params.id, url);

            return res.status(201).json();
        } catch (error) {
            return res.status(500).json({'ERROR': error.message})
        }
    },

    async Delete(req, res) {
        try {
            const { id } = req.params

            const foto = await PhotoData.ListOne(id);

            if(!foto) return res.status(404).json({'ERROR': 'Foto não encontrada!'})

            await PhotoData.Delete(id)

            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({'ERROR': error.message})
        }
    },
}