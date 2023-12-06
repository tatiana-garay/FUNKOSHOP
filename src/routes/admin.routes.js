const express = require('express');
const router = express.Router();

router.get('/',(req, res)=> res.send('Esta es la vista de Admin'));
router.get('/create',(req, res)=> res.send('Esta es la vista para crear nuevo item'));
router.post('/create',(req, res)=> res.send('Esta es la ruta para agregar nuevo item '));
router.get('/edit/:id',(req, res)=> res.send('Esta es la vista para editar un item especifico'));
router.put('/edit/:id',(req, res)=> res.send('Esta es la vista para realizar'));
router.delete('/delete/:id',(req, res)=> res.send('Esta es la vista para eliminar un item'));

module.exports = router;