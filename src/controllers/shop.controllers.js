const path = require('path');



module.exports = {
    shop : (req, res) =>{
        res.render(path.resolve(__dirname, '../views/pages/shop/shop.ejs'));
    },
    item : (req, res)=>{
        res.render(path.resolve(__dirname, '../views/pages/shop/item.ejs'));
    },
    carrito : (req, res)=>{
        res.render(path.resolve(__dirname, '../views/pages/shop/carrito.ejs'));
    }

}