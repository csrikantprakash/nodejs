const mongooose = require('mongoose');
const Schema = mongooose.Schema;
const ObjectId = Schema.ObjectId;

const blogSchema = new mongooose.Schema({
    // Your code goes here
    ObjectID: {type:String, ref:"User"},
    topic : {type: String, required: true},
    description: {type: String, required:true},
    posted_at: {type: Date, default:Date.now},
    posted_by: {type: String, required: true}
})

const Blog = mongooose.model('blogs', blogSchema);

module.exports = Blog;