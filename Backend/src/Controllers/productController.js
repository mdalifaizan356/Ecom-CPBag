import productModel from "../models/productModel.js";

const productController ={
    // Add Product
    addProduct: async (req, res)=>{ 
        try {
            const {Name, Brand, Categories, Price, DND, Stock, Description} = req.body;
            const productData = {
                Name, Brand, Categories, Price, DND, Stock, Description
            };
            const newProduct = new productModel(productData);
            await newProduct.save();
            return res.status(200).json({message: `Product Save Successfully`});
        }
        catch (error) {
            return res.status(500).json({message: `Internal Server Error ${error}`});
        }
    },


    // Show All Product
    allProducts: async (req, res)=>{ 
        try {
            const allProducts = await productModel.find();
            return res.status(200).json({allProducts, message: `Product Save Successfully`});
        }
        catch (error) {
            return res.status(500).json({message: `Internal Server Error ${error}`});
        }
    },

    // Show Selected Product
    selectedProduct: async (req, res)=>{ 
        const {id} = req.params;
        console.log(id);
        try {
            const selectedProduct = await productModel.findById(id);
            console.log(selectedProduct);
            return res.status(200).json({selectedProduct, message: `Product Save Successfully`});
        }
        catch (error) {
            return res.status(500).json({message: `Internal Server Error ${error}`});
        }
    },

};
export default  productController