var oracledb = require('oracledb');

var connOracle = function () {

  console.log('Conexao com o banco de dados foi estabelecida');
  return oracledb.getConnection(

    {
      user: "bdextensao", // Usuário do Oracle DB
      password: "ipiranga", // Senha do Oracle DB
      connectString: "localhost/orcl" // Host e Banco de dados do Oracle DB
    })
};
module.exports = function () {
  console.log('O autoload carregou');
  return connOracle;
}