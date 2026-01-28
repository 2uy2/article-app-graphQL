import mongoose from "mongoose";

const articleSchema = new mongoose.Schema (
    {
        title:String,
        avatar:String,
        description:String,
        categoryId:String,
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
const Article = mongoose.model('Article',articleSchema,"article");
//tham số đầu là tên để gọi dữ liệu, tham số hai là khung, tham số ba là bảng dữ liệu
export default Article;

