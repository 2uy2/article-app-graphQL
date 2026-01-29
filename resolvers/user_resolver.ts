import md5 from "md5";
import User from "../models/user_model";
import { generateRandomString } from "../helpers/generate";


//resolvers chọc vào database để lấy data nhưng tuân thủ thẻ Query 
export const resolversUser = {
    Mutation: {
        registerUser: async (_, args) => {
     
            const { user } = args;
            const emailExist = await User.findOne({
                email: user.email,
            });
            if (emailExist) {
                return {
                    code: 400,
                    message: "email đã tồn tại"
                }
            }
            else {
                user.passWord = md5(user.password);
                user.token = generateRandomString(30);
                const newUser =await new User(user);
                const data = await newUser.save();
               
                return {
                    code: 200,
                    message: "thành công",
                    id: data.id,
                    fullName: data.fullName,
                    email: data.email,
                    token: data.token
                }
            }
        },
        loginUser:async(_,args)=>{
            const {email,password} = args.user;
            const infoUser  = await User.findOne({
                email:email,
                deleted:false
            })
            if(!infoUser){
                return {
                    code:400,
                    message:"email không tồn tại"
                }
            }
            if(md5(password) !==infoUser.passWord){
                return {
                    code:400,
                    message:"sai mật khẩu "
                }
            }
            return {
                code:400,
                message:"đăng nhập thành công",
                id:infoUser.id,
                fullName:infoUser.fullName,
                email:infoUser.email,
                token:infoUser.token
            }
        }
    }

}
