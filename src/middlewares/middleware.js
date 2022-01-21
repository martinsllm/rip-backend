module.exports = (err, req, res, next) => {
    if (err.message === "Resultado não encontrado!")  
        return res.status(404).json({ERROR: err.message}) 

    if (err.message === "Dado já registrado!")  
        return res.status(409).json({ERROR: err.message})

}