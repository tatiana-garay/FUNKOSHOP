const path = require('path');



module.exports = {
    auth : (req, res) =>{
        res.render(path.resolve(__dirname, '../views/auth/login.ejs'));
    }
}