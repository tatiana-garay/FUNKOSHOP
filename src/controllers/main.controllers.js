module.exports ={
    home:(req, res)=> {
        res.render('index',{
            title : "HOME",
            isLogged : true
        });
    },
    contact: (req, res)=>res.send('Esta es la vista de contacto'),
    about: (req, res)=> res.send('Esta es la vista Sobre Nosotros '),
    faqs: (req, res)=> res.send('Esta es la vista Preguntas Frecuentes')
}