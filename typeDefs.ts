import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Article {
        id:ID,
        title:String,
        avatar:String,
        description:String,
        category:Category
    }
    type Category {
        id:ID,
        title:String,
        avatar:String,
        
    }
    # Query để lấy ra dữ liệu
    type Query { 
        getListArticle:[Article],
        getArticle(id:ID):Article ,
        getListCategory:[Category],
        getCategory(id:ID):Category ,
        
    }
    # Mulation chữa những câu lệnh thêm sửa xoá
    input ArticleInput {
        title:String,
        avatar:String,
        description:String
    }
    input CategoryInput {
        title:String,
        avatar:String,
        
    }
    type Mutation {
        # ArticleInput là kiểu dữ liệu đầu vào,Article là kiểu dữ liệu khi gọi ra
        createArticle(article:ArticleInput):Article ,
        deleteArticle(id:ID):String,
        updateArticle(id:ID,article:ArticleInput):Article,
        createCategory(category:CategoryInput):Category ,
        deleteCategory(id:ID):String,
        updateCategory(id:ID,category:CategoryInput):Category,
    }
    
`
//type Query định nghĩa ra câu truy vấn có những gì