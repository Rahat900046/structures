//user,title,bio,profilePhoto,links{facebook,twitter},posts,bookmarks

const {
    Schema,
    model
} = require('mongoose')
const profileSchema = newSchema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        trim: true,
        maxlenght: 100
    },
    bio: {
        type: String,
        trim: true,
        maxlenght: 300
    },
    profilepic: String,
    links: {
        website: String,
        facebook: String,
        twitter: String,
        github: String
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }],
    bookmarks: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }]
}, {
    timestamps: true
})

const Profile = model('Profile', profileSchema)
module.exports = Profile