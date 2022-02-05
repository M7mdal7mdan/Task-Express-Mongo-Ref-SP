const Shop = require("../../models/Shop")



exports.shopList = async (req, res,next) => {
    try{
     await Shop.find(req.shop.id).populate('products');
    res.json(shopArray);}
    catch(error){
       next(error)
    }
  };








exports.createShop = async (req,res,next) =>{
    try{
      const newShop = await Product.create(req.shop.id)
       res.status(201);
       res.json(newShop)
    } catch(error){
       next(error);
    }
 };


