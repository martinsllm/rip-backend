const { checkPassword } = require('../services/bcrypt')
const { generateKey, convertKey } = require('../services/token')
const UserData = require('../data/UserData')

module.exports = {

    async Login(req, res, next) {
        try {
            const { email, senha } = req.body;

            const user = await UserData.ListFirst({ email });
            if(!user) throw new Error('Email não encontrado!')

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

            await UserData.ValidateFields({ email, senha }, null);

            await UserData.UpdatePassword({email, senha})

            return res.status(201).json();
        } catch (error) {
            next(error)
        }
    }
}