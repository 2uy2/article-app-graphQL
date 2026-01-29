import mongoose from "mongoose";

const userSchema =  new mongoose.Schema(
    {
        fullName:String,
        email:String,
        passWord:String,
        token:String,
        deleted:{
            type:Boolean,
            default:false
        },
        deletedAt:Date
    },
    {
        timestamps:true
    }
);
const User = mongoose.model('User',userSchema,"users");
//tham số đầu là tên để gọi dữ liệu, tham số hai là khung, tham số ba là bảng dữ liệu
export default User;
