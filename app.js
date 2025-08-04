const express = require('express');
const app = express();
const PORT = process.env.PORT || 3777;

app.get("/",(req,res)=>{
    res.send("Welcome to ShopEasy from me");
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})