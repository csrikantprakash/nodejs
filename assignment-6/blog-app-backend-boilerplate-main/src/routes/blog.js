const router = require('express').Router();
const Blog = require('../models/Blog')

// Your routing code goes here


router.post('/blog',async (req,res)=>{
    try{
        const user = await Blog.create(req.body)
        res.json({
            status: "Success",
            user
        })
    }catch(e) {
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
   
});

router.put("/blog/:id", async (req, res) => {
    try{
        const user = await Blog.updateOne({_id : req.params.id},req.body);
        const userupdated = await Blog.find({_id : req.params.id});
        res.json({
            status: "Success",
            userupdated
        })
    }catch(e) {
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
});

router.delete("/blog/:id", async (req, res) => {
    try{
        const user = await Blog.deleteOne({_id : req.params.id});
        res.json({
            status: "Success",
            user
        })
    }catch(e) {
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
});

router.get("/blog", async (req, res) => {
    try{
        const {page = 1, search} = req.query;
        const posts = await Blog.find({"topic":search}).skip((page-1) * 5).limit(5);
        res.json({
            status: "Success",
            posts
        })

    }catch(e) {
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
});

module.exports = router;