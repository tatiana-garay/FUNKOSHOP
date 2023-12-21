// sirve para buscar en la base de datos 
const { conn } = require('../config/conn');

const getAll = async () =>{
   try{
    const [rows]= await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id;');
    return rows;
   } catch(error){
     return{
        error: true,
        massage: 'hemos encontado un error:'+ error
     }
   } finally{
    conn.releaseConnection();
   }
}

const getOne = async (params) =>{
    try{
        const [rows]= await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id WHERE ?;',params);
        return rows;
       } catch(error){
         return{
            error: true,
            massage: 'hemos encontado un error:'+ error
         }
       } finally{
        conn.releaseConnection();
       }
    }

const create = async (params) =>{
   try{
      const [product] = await conn.query('INSERT INTO product (product_name, product_description, sku, price, dues, stock , discount,  category_id, licence_id, image_front, image_back) VALUE ?;', [params]);
      return product
   } catch (error){
      return {
         error: true,
         massage: 'hemos encontado un error:'+ error
      }
    } finally{
     conn.releaseConnection();
    }
   }




module.exports = {
    getAll,
    getOne,
    create
}