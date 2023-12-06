const express = require('express');
const router = express.Router();


router.get('/home',(req, res)=> res.send('Esta es la vista el Home'));
router.get('/contact',(req, res)=> res.send('Esta es la vista del Contacto'));
router.get('/about',(req, res)=> res.send('Esta es la vista sobre nosotros'));
router.get('/faqs',(req, res)=> res.send('Esta es la vista de Preguntas Frecuente'));


module.exports = router;