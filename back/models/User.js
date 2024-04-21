import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import CryptoJS from 'crypto-js';



const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});


userSchema.pre('save', function(next) {
    if (!this.isModified('password')) {
        return next();
    }

    
    this.password = CryptoJS.AES.encrypt(this.password, 'secret').toString();
    next();
});


export const User = mongoose.model('User', userSchema);
// module.exports = User;
