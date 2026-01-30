"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefsArticle = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefsArticle = (0, apollo_server_express_1.gql) `
    type Article {
        id:ID,
        title:String,
        avatar:String,
        description:String,
        category:Category
    }
    # Query để lấy ra dữ liệu
    type Query { 
        getListArticle(
            sortKey:String,
            sortValue:String,
            currentPage:Int=1,
            limitItems:Int=2,
            filterKey:String,
            filterValue:String,
            keyWord:String
            ):[Article],
        getArticle(id:ID):Article ,   
    }
    # input để xác định trường dữ liệu tham số đầu vào
    input ArticleInput {
        title:String,
        avatar:String,
        description:String,
        categoryId:String
    } 
    # Mulation chữa những câu lệnh thêm sửa xoá
    type Mutation {
        # ArticleInput là kiểu dữ liệu đầu vào,Article là kiểu dữ liệu khi gọi ra
        createArticle(article:ArticleInput):Article ,
        deleteArticle(id:ID):String,
        updateArticle(id:ID,article:ArticleInput):Article,       
    }
`;
//type Query định nghĩa ra câu truy vấn có những gì
