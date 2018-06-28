module.exports.noticias = function(app,req,res){

    var connection = app.config.dbConnection();
    var noticiasDAO = new app.app.models.noticiasDAO(connection);

    noticiasDAO.getNoticias(function(err, result) {
        res.render("noticia/noticias", { noticias: result.rows })
    })
}

module.exports.noticia = function(app,req, res){

    var connection = app.config.dbConnection();
    var noticiasDAO = new app.app.models.noticiasDAO(connection);

    var id_noticia = req.query
    
    console.log(app.locals.moment());

    noticiasDAO.getNoticia(id_noticia, function(err, result) {


        res.render("noticia/noticia", { noticia: result.rows [0] })
    });
    
            
        
};
