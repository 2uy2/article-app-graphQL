//resolvers chọc vào database để lấy data nhưng tuân thủ thẻ Query 
export const resolvers = {
    Query: {
        hello: () => {
            return "Hello World"
        }
    }
}