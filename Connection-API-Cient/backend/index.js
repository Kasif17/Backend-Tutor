import express from 'express';
import cors from 'cors'

const app= express();


const PORT = process.env.PORT || 3000;

app.use(cors());
app.get('/',(req,res)=>{
    res.send('Hello I am from server')
})

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title:'First Jokes',
            content:"This is a Joke"
        },
        {
            id:2,
            title:'Second Jokes',
            content:"This is a Joke"
        },
        {
            id:3,
            title:'Third Jokes',
            content:"This is a Third Joke"
        },
        {
            id:4,
            title:'Fourt Jokes',
            content:"This is a Fourt Joke"
        },
        {
            id:5,
            title:'Five Jokes',
            content:"This is a Five Joke"
        }
    ]
    res.send(jokes)
})

app.listen(PORT,(req,res)=>{
    console.log(`server is running on PORT ${PORT}`);
    
})