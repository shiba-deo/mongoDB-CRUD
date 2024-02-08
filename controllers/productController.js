const Product = require('../models/productModel')


const createProduct = async (req, res) => {
    try{
       const product = await Product.create(req.body);
       res.status(201).json({message: 'Product saved successfully', data: product})
    } catch (error) {
       console.error('Error creating product', error);
       res.status(500).json({error: 'Internal Server Error'});
    }
};

const getAllProducts = async (req, res) => {
    try{ 
      const product = await Product.find({});
      res.status(200).json({message: 'Products fetched successfully', data: product});
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: 'Internal Server Error'});
    }
};

const getProductsById = async (req, res) => {
    try{
       const {id} = req.params;
       const product = await Product.findById(id);
       res.status(200).json(product);
    } catch(error) {
       console.error("Error fetching the id:", error);
       res.status(500).json({error: 'Internal Server Error'})
    }
};

const updateProductsById = async (req, res) => {
    try {
      const {id} = req.params;
      const product = await Product.findByIdAndUpdate(id, req.body);
      if (!product) {
        return res.status(404).json({message: `Cannot find any product with ID ${id}`});
      }
      const updatedProduct = await Product.findById(id);
      res.status(200).json({message: "Product update successfully", data: updatedProduct})
    } catch(error) {
       console.error("Error updating poduct", error);
       res.status(500).json({error: 'Internal Server Error'})
    }
}

const deleteProductById = async (req, res) => {
    try{
       const {id} = req.params;
       const product = await Product.findByIdAndDelete(id);
       if(!product) {
        return res.status(404).json({ message: `Cannot find any product with ID ${id}` });
       }
       res.status(200).json({message: "Product deleted Successfully", data: product})
    } catch(error) {
        console.error("Error deleting product", error);
        res.status(500).json({error: 'Internal Server Error'})
    }
}


module.exports = {createProduct, getAllProducts, getProductsById, deleteProductById, updateProductsById}