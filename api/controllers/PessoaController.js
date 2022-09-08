const database = require('../models');

class PessoaController {
    static async pegaTodasPessoas (req, res) {
        try {
            const todasAsPessoas = await database.Pessoas.findAll();
            return res.status(200).json(todasAsPessoas);
        } catch (error) {
            return res.status(404).json(error.message)
        }
        
    }
}

module.exports = PessoaController;