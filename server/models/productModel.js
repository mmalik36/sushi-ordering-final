const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const CategorySchema=mongoose.Schema(
    {
        name:{type:String, required: true}
    }
)

module.exports=mongoose.model('Category', CategorySchema);

const ProductSchema=mongoose.Schema(
    {
        name:{type: String, required:true},
        adjective:{type: String, required:true},
        description:{type: String, required:true},
        price:{type: String, required:true},
        category:{type: String, required:true},
        
    }
)

module.exports=mongoose.model('Product', ProductSchema);