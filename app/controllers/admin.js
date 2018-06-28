module.exports.formulario_inclusao_noticia = function(app, req, res){
    res.render("admin/form_add_noticia", {validacao:{}, noticia: {}});
}

module.exports.noticia_salvar = function(app, req, res){

    var noticia = req.body;

    req.assert('titulo','Título é obrigatorio').notEmpty();
    req.assert('resumo','Resumo é obrigatorio').notEmpty();
    req.assert('resumo','Resumo deve conter pelo menos entre 10 e 100 caracteres').len(10,100);
    req.assert('autor','Autor é obrigatorio').notEmpty();
    req.assert('data_noticia','Data é obrigatorio').notEmpty();
    req.assert('noticia','Noticia é obrigatorio').notEmpty();

    var erros = req.validationErrors();
    console.log(erros);
    if(erros){
        res.render("admin/form_add_noticia", {validacao : erros, noticia: noticia});
        return;
    }

    var connection = app.config.dbConnection();
    var noticiasDAO = new app.app.models.noticiasDAO(connection);

    noticiasDAO.salvarNoticia(noticia,function (err, result) {
        console.log(err);
        res.redirect('/noticias');
        // res.render("noticia/noticias", { noticias: result.rows })
    });



};
