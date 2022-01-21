const { checkPassword } = require('../services/bcrypt')
const { generateKey, convertKey } = require('../services/token')
const UserData = require('../data/UserData')

module.exports = {

    async Login(req, res, next) {
        try {
            const { email, senha } = req.body;

            const user = await UserData.ListEmail(email);

            if(await checkPassword(senha, user.senha)){
                return res.json({
                    token: generateKey(email),
                })
            }else {
                throw new Error('Senha incorreta!')
            }

        } catch (error) {
            next(error)
        }
    },

    async SendEmail(req, res, next) {
        try {
            const { email } = req.body;

            await UserData.ListEmail(email);

            mailer.sendMail({
                from: process.env.APP_MAILER_USER,
                to: email,
                subject: "Alteração de senha",
                html: "<div> <p>Esqueceu sua senha? Sem problemas, recupere utilizando o token disponibilizado abaixo: </p> </hr>" + generateKey(email) + "</div>"
            });

            return res.status(201).json();
        } catch (error) {
            next(error)
        }
    },

    async ChangePassword(req, res, next) {
        try {
            const { authorization, senha } = req.body;

            const email = convertKey(authorization);

            await UserData.ListEmail(email);

            if (senha === "") throw new Error('Valor inválido de senha!')

            if(senha.length < 5) throw new Error('Senha fraca!')

            await UserData.UpdatePassword({email, senha})

            return res.status(201).json();
        } catch (error) {
            next(error)
        }
    }
}