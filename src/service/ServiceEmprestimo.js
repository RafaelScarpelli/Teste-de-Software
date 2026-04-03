const constantes = require("../util/Constantes") 

class ServiceEmprestimo{
    static autorizarEmprestimo (usuario, livro){
        return this.validarUsuario(usuario);
    }

    static validarUsuario(usuario){
        if (!usuario.ativo) return false;
        if (!usuario.empAtivos >= constantes.USUARIO_LIMITE_EMPRESTIMOS) return false;
        if (!usuario.multas >= constantes.USUARIO_LIMITE_MULTA) return false;


        return true
    }
}

module.exports = ServiceEmprestimo;