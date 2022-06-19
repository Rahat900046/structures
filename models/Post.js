// title,body,author,tags,thumbnails,readTime,Likes,dislikes,comments

const{Schema,model}=require('mongoose')

const postSchema=newSchema({
    title:{
        type:String,
        trim:true,
        required:true,
        maxlenght:100
    },
    body:{
        type:String,
        required:true
    },
    author:{
        type: Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    tags:{
        type: String,
        required:true
    },
    thumbnail:String,
    readTime:String,
    likes:[Schema.Types.ObjectId],
    dislikes:[Schema.Types.ObjectId],
    comments:[
        {
            type:Schema.Types.ObjectId,
            ref:'Post'
        }
    ]
},{
    timestamps:true
})

const Post=model('Post', postSchema)
module.exports=Post