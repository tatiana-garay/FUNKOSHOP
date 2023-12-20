const path = require('path');
const { getAll } = require('../models/productModel');



module.exports = {
    admin :async (req, res) =>{
        const data = await getAll();

        res.render(path.resolve(__dirname, '../views/pages/admin/admin.ejs'),{
            data
        });
    },
    create : (req, res) =>{
        res.render(path.resolve(__dirname, '../views/pages/admin/create.ejs'))
    },
    createItem: (req, res) => res.send('esta es la vista para agregar un nuevo Item'),
    edit : (req, res) =>{
        res.render(path.resolve(__dirname, '../views/pages/admin/edit.ejs'))
    },
    edtiItem: (req, res)=> res.send('esta es la vista para editar un item'),
    deleteItem: (req, res) => res.sen('esta en la vista para eliminar un item')
}