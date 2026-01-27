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
        },
        getArticle:async(_,args)=>{ //args là tham số có dạng dữ liệu là object(tham số thứ 2)
            const {id}= args; //phá vỡ cấu trúc
            const article = await Article.findOne({
                _id:id,
                deleted:false,
            })
            return article
        }
    }
}