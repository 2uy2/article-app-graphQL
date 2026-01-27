import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import * as database from "./config/database";
import Article from "./models/article_model";
import { ApolloServer, gql } from "apollo-server-express";
import { Query } from "mongoose";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

const startServer = async () => {

    dotenv.config();
    database.connect();

    const app: Express = express();
    const port: number | string = process.env.PORT;
    //GraphQL

    const apolloServer = new ApolloServer({
        typeDefs,
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

