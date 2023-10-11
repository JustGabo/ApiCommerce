import {pool} from '../db.js'

export const getProducts = async (req,res)=>{
    const result = await pool.query("SELECT * FROM products");
    if (req.body.id == undefined) {
      res.send(result[0]);
    } else {
      const id = req.body.id;
      const result = await pool.query("SELECT * FROM products WHERE id = ?", [
        id,
      ]);
      res.send(result[0]);
    }
}

export const postProduct = async (req,res)=>{
    const {name,category,price} = req.body
    const result = await pool.query('insert into products (name, category,price) values (?,?,?)',[name, category,price])
    const products = await pool.query('select * from products')
    res.send(products[0])
}

export const deleteProduct = async (req,res)=>{
    const id = req.body.id

    if(id){
        const result = pool.query('delete from products where id = ?',[id])
        const products = pool.query('select * from products')
        res.json(products[0])
    }else{
        res.status(404).send('not found')
    }
}

export const updateProduct = async (req,res)=>{
    const {id,name,category,price} = req.body
    const result = await pool.query("update products set name = ifnull(?,name), category = ifnull(?,category), price = ifnull(?, price) where id = ?", [name,category,price,id])
    const products = await pool.query('select * from products')
    res.send(products[0])
}