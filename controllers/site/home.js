const slugify = require('slugify');
const renderHome = (req,res) => {
    titulo = "Wellcome to Products API"
    aviso = "Register to get API key!"
    howto = "(to provide it, place it on header 'api-key' or as URL param 'apikey')"

    let slugTitulo = slugify(titulo, { replacement: '*', lower: false });

    rutas = [
        ["Register","POST /api/users/register"],
        ["List all products","GET /api/products"],
        ["List products by ID","GET /api/products/:productID"],
        ["Create product","POST /api/products"],
        ["Update product","PUT /api/products/:productID"],
        ["Delete product","DELETE /api/products/:productID"]
    ]
  
    res.render('index.pug',
    {  
        titulo: slugTitulo, // Usamos el título slugizado
        aviso: aviso,
        rutas: rutas
    })
}

module.exports = renderHome

