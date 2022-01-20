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

        } catch (error) {
            return res.status(500).json({'ERROR': error.message})
        }
    },

    async SendEmail(req, res) {
        try {
            const { email } = req.body;

            const user = await UserData.ListEmail(email);

            if(!user) return res.status(404).json({'ERROR': 'Usuário não localizado!'});

            mailer.sendMail({
                from: process.env.APP_MAILER_USER,
                to: email,
                subject: "Alteração de senha",
                html: "<div> <p>Esqueceu sua senha? Sem problemas, recupere utilizando o token disponibilizado abaixo: </p> </hr>" + generateKey(email) + "</div>"
            });

            return res.status(201).json();
        } catch (error) {
            return res.status(500).json({'ERROR': error.message})
        }
    },

    async ChangePassword(req, res) {
        try {
            const { authorization, senha } = req.body;

            const email = convertKey(authorization);

            const user = await UserData.ListEmail(email);

            if(!user) return res.status(404).json({'ERROR': 'Usuário não localizado!'});

            if (senha === "") return res.status(401).json({ 'ERROR': 'Valor de senha inválido!' })

            if(senha.length < 5) return res.status(401).json({ 'ERROR': 'Senha fraca!' })

            await UserData.UpdatePassword({email, senha})

            return res.status(201).json();
        } catch (error) {
            return res.status(500).json({'ERROR': error.message})
        }
    }
}