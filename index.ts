import express, { Express} from "express";
import dotenv from "dotenv";
import * as database from "./config/database";

import { ApolloServer } from "apollo-server-express";

import { typeDefs } from "./typeDefs/index_typeDefs";
import { resolvers } from "./resolvers/index_resolver";
import { requireAuth } from "./middleware/auth_middleware";

const startServer = async () => {

    dotenv.config();
    database.connect();

    const app: Express = express();
    const port: number | string = process.env.PORT;
    //GraphQL
    app.use("/graphql",requireAuth);
    const apolloServer = new ApolloServer({
        typeDefs:typeDefs,
        resolvers,
        introspection:true,//gợi ý code 
        context:({req})=>{
            return {...req};
        }
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({
        app:app,
        path: "/graphql"
    });

    app.listen(port, () => {
        console.log(`app listening on port 3000 ${port}`);
    });
}
startServer();

