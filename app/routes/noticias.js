var dbConnection = require('../../config/dbConnection');

module.exports = function(app){

    
    app.get('/noticias', function(req,res){
        
        dbConnection().then(function(conn) {
            
            return conn.execute(
          `SELECT * FROM NOTICIAS`,[],{outFormat:dbConnection.OBJECT},function(err,result) {
            if(err){
                console.log('erro: '+ err);
            }else{
                return res.render("noticia/noticias", {noticias : result.rows})
            conn.close();
            }
          });    
});

    

    // res.render("noticia/noticias");
})
};  
