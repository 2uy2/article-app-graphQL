"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefsCategory = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefsCategory = (0, apollo_server_express_1.gql) `
    type Category {
        id:ID,
        title:String,
        avatar:String,   
    }
    # Query để lấy ra dữ liệu
    type Query {   
        getListCategory:[Category],
        getCategory(id:ID):Category ,  
    }
    # input để xác định trường dữ liệu tham số đầu vào
    input CategoryInput {
        title:String,
        avatar:String,    
    }
    # Mulation chữa những câu lệnh thêm sửa xoá
    type Mutation {
        # CategoryInput là kiểu dữ liệu đầu vào,Category là kiểu dữ liệu khi gọi ra
        createCategory(category:CategoryInput):Category ,
        deleteCategory(id:ID):String,
        updateCategory(id:ID,category:CategoryInput):Category,
    }  
`;
//type Query định nghĩa ra câu truy vấn có những gì
