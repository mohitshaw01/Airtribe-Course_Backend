import Express from "express";

const app = new Express();

app.get("/", (req,res) => {
    res.send("Hello world");
})

app.listen(3000,()=>{
    console.log("hi")
});

