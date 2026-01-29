import Article from "../models/article_model";
import Category from "../models/category_model";


//resolvers chọc vào database để lấy data nhưng tuân thủ thẻ Query 
export const resolversArticle = {
    Query: {

        getListArticle: async (_,args) => {
            const {sortKey,sortValue,currentPage,limitItems} = args;
            // sort
            const sort = {};
            if (sortKey&&sortValue){
                sort[sortKey]=sortValue
            }
            //end sort
            // pagination
            const skip = (currentPage-1)*limitItems;
            //end pagination
            const article = await Article.find({
                deleted: false
            }).sort(sort).limit(limitItems).skip(skip);
            return article
        },
        getArticle: async (_, args) => { //args là tham số có dạng dữ liệu là object(là tham số thứ 2)
            const { id } = args; //phá vỡ cấu trúc
            const article = await Article.findOne({
                _id: id,
                deleted: false,
            })
            return article
        },    
    },
    Article:{
        category: async(article)=>{
            const categoryId = article.categoryId;
            const category = await Category.findOne({
                _id:categoryId
            });
            return category;
        }
    },
    Mutation: {
        createArticle: async (_, args) => {
            const { article } = args;
            const record = new Article(article);
            await record.save();
            return record;
        },
        deleteArticle: async (_, args) => {
            const { id } = args;
            await Article.updateOne({
                _id: id
            }, {
                deleted: true,
                deletedAt: new Date()
            })
            return "xoá thành công"
        },
        updateArticle: async(_,args) => {
            const {id,article} = args;
            await Article.updateOne({
                _id: id
            }, { $set: { ...article } })
            const record = await Article.findOne({
                _id: id,
            })
            return record;
        },
    }
}
