const { checkPassword } = require('../services/bcrypt')
const { generateKey, convertKey } = require('../services/token')
const UserData = require('../data/UserData')

module.exports = {

    async Login(req, res) {
        try {
            const { email, senha } = req.body;

            const user = await UserData.ListEmail(email);

            if(!user) return res.status(404).json({'ERROR': 'Usuário não localizado!'});

            if(await checkPassword(senha, user.senha)){
                return res.json({
                    token: generateKey(email),
                })
            }else {
                throw { message: 'Erro ao gerar code!' }
            }

            return res.json();
        } catch (error) {
            return res.status(500).json({'ERROR': error.message})
        }
    }
}