import mongoose from "mongoose";
import { title } from "node:process";
import { getEnabledCategories } from "node:trace_events";

const categorySchema = new mongoose.Schema(
    {
        title:String,
        avatar:String,
        deleted:{
            type:Boolean,
            default:false
        },
        deletedAt:Date,
    },
    {
        timestamps:true
    }
);
const Category = mongoose.model(`Category`,categorySchema,"categories");

export default Category;
