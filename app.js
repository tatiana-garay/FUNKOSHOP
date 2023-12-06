const express = require('express');
const app = express();

/** ROUTES IMPORT */
const mainRoutes = require('./src/routes/main.routes');
const shopRoutes = require('./src/routes/shop.routes');
const adminRoutes = require('./src/routes/admin.routes');
const authRoutes = require('./src/routes/auth.routes');

const PORT = 3004;

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin',adminRoutes);
app.use('/auth', authRoutes);

app.use(express.static('public'));
app.listen(PORT, ()=> console.log(`Servidor corriendo en ⚡ http://localhost:${PORT}`))
