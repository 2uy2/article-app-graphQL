import { gql } from "apollo-server-express";

export const typeDefs = gql`
        type Query { 
        hello: String
    }
    `
//type Query định nghĩa ra câu truy vấn có những gì