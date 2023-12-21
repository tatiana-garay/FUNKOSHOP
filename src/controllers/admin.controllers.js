const path = require('path');
const { getAll, getOne, create } = require('../models/productModel');



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
    createItem: async (req, res) => {
        
        const product_schema = {
            product_name : req.body.name,
            product_description: req.body.description,
            sku: req.body.sku,
            price: Number( req.body.price),
            dues:Number (req.body.dues),
            stock:Number (req.body.stock),
            discount:Number (req.body.discount),
            category_id: Number (req.body.category),
            licence_id: Number( req.body.licence),
            image_front: req.files[0].originalname,
            image_back: req.files[1].originalname,

        };

        const result = await create([Object.values(product_schema)]);
        console.log("array: ",[Object.values(product_schema)]);
        console.log(result);
        res.send('esta es la vista para agregar un nuevo Item' + result)
    },
    edit : async (req, res) =>{
        const {id} = req.params;
        const [product] = await getOne({ product_id: id })
        res.render(path.resolve(__dirname, '../views/pages/admin/edit.ejs'),{
            product
        })
    },
    edtiItem: (req, res)=> {
        res.send('esta es la vista para editar un item')
    },
    deleteItem: (req, res) => res.sen('esta en la vista para eliminar un item')
}