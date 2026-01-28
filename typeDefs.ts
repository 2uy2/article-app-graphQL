import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Article {
        id:ID,
        title:String,
        avatar:String,
        description:String
    }
    # Query để lấy ra dữ liệu
    type Query { 
        hello: String,
        getListArticle:[Article],
        getArticle(id:ID):Article 
    }
    # Mulation chữa những câu lệnh thêm sửa xoá
    input ArticleInput {
        title:String,
        avatar:String,
        description:String
    }
    type Mutation {
        # ArticleInput là kiểu dữ liệu đầu vào,Article là kiểu dữ liệu khi gọi ra
        createArticle(article:ArticleInput):Article 
    }
    
`
//type Query định nghĩa ra câu truy vấn có những gì