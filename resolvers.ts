import Article from "./models/article_model"

//resolvers chọc vào database để lấy data nhưng tuân thủ thẻ Query 
export const resolvers = {
    Query: {
        hello: () => {
            return "Hello World"
        },
        getListArticle:async()=>{
            const article = await Article.find({
                deleted:false
            });
            return article
        }
    }
}