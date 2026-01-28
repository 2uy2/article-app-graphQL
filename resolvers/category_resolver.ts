import Article from "../models/article_model";
import Category from "../models/category_model";

//resolvers chọc vào database để lấy data nhưng tuân thủ thẻ Query 
export const resolversCategory = {
    Query: {
        getListCategory: async () => {
            const categories = await Category.find({
                deleted: false
            });
            return categories
        },
        getCategory:async (_, args) => { //args là tham số có dạng dữ liệu là object(là tham số thứ 2)
            const { id } = args; //phá vỡ cấu trúc
            const category = await Category.findOne({
                _id: id,
                deleted: false,
            })
            return category
        }
    },
    Mutation: {
        createCategory:async (_, args) => {
            const { category } = args;
            const record = new Category(category);
            await record.save();
            return record;
        },
        deleteCategory:async (_, args) => {
            const { id } = args;
            await Category.updateOne({
                _id: id
            }, {
                deleted: true,
                deletedAt: new Date()
            })
            return "xoá thành công"
        },
        updateCategory:async(_,args) => {
            const {id,category} = args;
            await Category.updateOne({
                _id: id
            }, { $set: { ...category } })
            const record = await Category.findOne({
                _id: id,
            })
            return record;
        },
    }
}
