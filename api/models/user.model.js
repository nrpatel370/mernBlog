import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },

    email: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    profilePic: {
        type: String,
        default:
            'https://banner2.cleanpng.com/20180810/biz/3efdae17d419cdcf3886d344b989ea45.webp'
    }
}, {timestamps: true});

const User = mongoose.model('User',userSchema);

export default User;

