import express, {Express, Request,Response} from "express";

const app: Express=express();
const port :number=3000;

//rest api 
app.get(`/articles`,(req:Request,res:Response)=>{
    res.json({
        articles:[]
    });
})

app.listen(port,()=>{
    console.log(`app listening on port 3000 ${port}`);
});