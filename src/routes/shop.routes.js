const express = require('express');
const router = express.Router();


const controller = require('../controllers/shop.controllers')


router.get('/',controller.shop);
router.get('/item', controller.item);
router.get('/carrito', controller.carrito);
router.get('/item/:id',(req, res)=> res.send('Esta es la vista del item selecciona'));
router.post('/item/:ide/add',(req, res)=> res.send('Esta es la ruta para agregar item'));
router.get('/cart',(req, res)=> res.send('Esta es la vista del Carrito'));
router.post('/cart',(req, res)=> res.send('Esta es la ruta para agregar item al carrito'));

module.exports = router;