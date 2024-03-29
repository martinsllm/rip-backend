module.exports = (err, req, res, next) => {
    if (err.message === "Resultado não encontrado!" || err.message === "Email não encontrado!")  
        return res.status(404).json({ERROR: err.message}) 

    if (err.message === "Dado já registrado!")  
        return res.status(409).json({ERROR: err.message})

    if (err.message === "Senha incorreta!" || err.message === "Não autorizado!")
        return res.status(401).json({ERROR: err.message})

    if (err.message === "Valor inválido de senha!" || err.message === "Senha fraca!" || err.message === "Um ou mais campos vazios!")
        return res.status(400).json({ERROR: err.message})

    else    
        return res.status(500).json({ERROR: err.message})

}