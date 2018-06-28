function NoticiasDAO (connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function ( callback) {

    this._connection.then(function (conn) {
        conn.execute(
            `SELECT * FROM NOTICIAS ORDER BY DATA_CRIACAO DESC`, [], {outFormat: conn.OBJEC}, callback)


    })
};

NoticiasDAO.prototype.getNoticia = function (id_noticia, callback) {
    this._connection.then(function (conn) {
        conn.execute(
            `SELECT * FROM NOTICIAS WHERE ID_NOTICIA = :id ` , [id_noticia.id_noticia],{outFormat: conn.OBJEC}, callback)

    })
};

NoticiasDAO.prototype.salvarNoticia = function (noticia, callback) {
    this._connection.then(function (conn) {
        console.log(noticia);
        conn.execute("insert into noticias(titulo, resumo, autor, data_noticia, noticia) values (:titulo, :resumo, :autor, TO_DATE(:data_noticia, 'yyyy/mm/dd'), :noticia)", 
        [noticia.titulo, noticia.resumo, noticia.autor, noticia.data_noticia, noticia.noticia],
            { autoCommit: true }, callback)
    
    });

};

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
    this._connection.then(function (conn) {
        conn.execute(
            `SELECT * FROM (SELECT * FROM NOTICIAS ORDER BY DATA_CRIACAO DESC) WHERE ROWNUM < 6`, [], {outFormat: conn.OBJEC}, callback)


    })
}
module.exports = function () {

    return NoticiasDAO;
};
