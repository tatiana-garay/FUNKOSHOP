module.exports ={
    home:(req, res)=> res.send('Esta es la vista el Home'),
    contact: (req, res)=>res.send('Esta es la vista de contacto'),
    about: (req, res)=> res.send('Esta es la vista Sobre Nosotros '),
    faqs: (req, res)=> res.send('Esta es la vista Preguntas Frecuentes')
}