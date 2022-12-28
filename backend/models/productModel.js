import mongoose from "mongoose";

// create table into mongo db
const productSchema = new mongoose.Schema({

    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },

  }, {
    // date
    timestamp: true,
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
