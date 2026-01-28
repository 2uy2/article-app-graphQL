import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import * as database from "./config/database";

import { ApolloServer, gql } from "apollo-server-express";


import { resolvers } from "./resolvers";

import { typeDefs } from "./typeDefs/index_typeDefs";

const startServer = async () => {

    dotenv.config();
    database.connect();

    const app: Express = express();
    const port: number | string = process.env.PORT;
    //GraphQL

    const apolloServer = new ApolloServer({
        typeDefs:typeDefs,
        resolvers,
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

