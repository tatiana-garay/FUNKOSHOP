const path = require('path');
const { getAll, getOne } = require('../models/productModel');



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
    edit : async (req, res) =>{
        const {id} = req.params;
        const [product] = await getOne(id)
        res.render(path.resolve(__dirname, '../views/pages/admin/edit.ejs'),{
            product
        })
    },
    edtiItem: (req, res)=> res.send('esta es la vista para editar un item'),
    deleteItem: (req, res) => res.sen('esta en la vista para eliminar un item')
}