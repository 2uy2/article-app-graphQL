import { gql } from "apollo-server-express";

export const typeDefsUser = gql`
    type User {
        id:ID
        fullName:String
        email:String 
        token:String,
        code:Int,
        message:String

    }
    # Query để lấy ra dữ liệu
    type Query {
        getUser(id:ID):User
    }
    # input để xác định trường dữ liệu tham số đầu vào
    input RegisterUserInput {
        fullName:String
        email:String
        password:String   
    }   
    input loginUserInput {
        email:String,
        password:String
    }
    # Mulation chữa những câu lệnh thêm sửa xoá
    type Mutation {
        registerUser(user:RegisterUserInput):User,
        loginUser(user:loginUserInput):User
    }  
`
//type Query định nghĩa ra câu truy vấn có những gì