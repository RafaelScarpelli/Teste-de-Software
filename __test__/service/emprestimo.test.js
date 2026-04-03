const Livro = require ("../../src/model/Livro")
const Usuario = require ("../../src/model/Usuario")
const ServiceEmprestimo = require("../../src/service/ServiceEmprestimo")

test('Teste usuário e livro válido', () => {
    //Arrange
    const usuario = new Usuario({id: 1, nome: 'Teste', ativo: true, empAtivos: 2, multa: 20})

    const livro = new Livro({ id: 1, titulo: "Teste Título", disponivel: true })
    //Act
    const saida = ServiceEmprestimo.autorizarEmprestimo(usuario, livro)

    //Assert
    expect(true).toBe(saida)
});