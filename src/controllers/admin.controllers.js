const path = require('path');



module.exports = {
    admin : (req, res) =>{
        res.render(path.resolve(__dirname, '../views/pages/admin/admin.ejs'));
    }
}