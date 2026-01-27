import express, {Express, Request,Response} from "express";
import dotenv from "dotenv";
import * as database from "./config/database";
import Article from "./models/article_model";
dotenv.config();
database.connect();

const app: Express=express();
const port :number|string =process.env.PORT;

//rest api 
app.get(`/articles`,async(req:Request,res:Response)=>{
    const article = await Article.find({
        deleted:false
    });

    res.json({
        articles:article
    });
})

app.listen(port,()=>{
    console.log(`app listening on port 3000 ${port}`);
});