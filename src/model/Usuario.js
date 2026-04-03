class Usuario{
    constructor(
        {id, nome, ativo, empAtivos, multa}
    ){
        this.id = id;
        this.nome = nome;
        this.ativo = ativo;
        this.empAtivos = empAtivos;
        this.multa = multa;
    };
}

module.exports = Usuario;