import express from 'express';
import bodyParser from 'body-parser';
import { User } from '../models/User.js';
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';
import cors from 'cors';


const app = express();
const port = 4000;


export async function startServer(secret) {

    app.use(express.json());

    // var whitelist = ['http://localhost:5175', "http://localhost:5173"]
    // var corsOptions = {
    //     credentials: true,
    //     origin: function(origin, callback) {
    //         if (whitelist.indexOf(origin) !== -1) {
    //         callback(null, true)
    //         } else {
    //         callback(new Error('Not allowed by CORS'))
    //         }
    //     }
    // }


    app.use(cors({
        origin: '*',
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    }));


    app.use((req, res, next) => {
        console.log('Request received:', req.method, req.url);
        next();
    });


    app.post('/api/users/signup', async (req, res) => {
        try {

            const newUser = new User({
                name: req.body.name,
                phoneNumber: req.body.phoneNumber,
                email: req.body.email,
                password: req.body.password
            });
    
            await newUser.save();

            const token = jwt.sign({ userId: newUser._id }, secret, { expiresIn: '1h' });

            res.cookie('token', token, { httpOnly: true, maxAge: 3600000 }); 
    
            res.status(201).json({ message: 'User signed up successfully' });
        } catch (error) {
            console.error('Error signing up user:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    });


    app.post('/api/users/login', async (req, res) => {
        try {
            const { email, password } = req.body;
    
            const user = await User.findOne({ email });
    
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
    
            const decryptedPassword = CryptoJS.AES.decrypt(user.password, 'secret').toString(CryptoJS.enc.Utf8);
            if (decryptedPassword !== password) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }


            const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '1h' });

            res.cookie('token', token, { httpOnly: true, maxAge: 3600000 }); 

    
            res.status(200).json({ message: 'Login successful' });
        } catch (error) {
            console.error('Error logging in user:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    });



    app.use((err, req, res, next) => {
        console.error('Error:', err);
        res.status(500).send('Internal Server Error');
    });

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}