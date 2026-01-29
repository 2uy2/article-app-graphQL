import { gql } from "apollo-server-express";

export const typeDefsArticle = gql`
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
            filterValue:String
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
`
//type Query định nghĩa ra câu truy vấn có những gì