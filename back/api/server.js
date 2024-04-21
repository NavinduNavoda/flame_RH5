import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 4000;


export async function startServer() {

    app.use(bodyParser.json());

    app.use((req, res, next) => {
        console.log('Request received:', req.method, req.url);
        next();
    });

    app.get('/api/users', (req, res) => {
        const users = [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' },
            { id: 3, name: 'Charlie' }
        ];
        res.json(users);
    });

    app.post('/api/users', (req, res) => {
        console.log('Received new user:', req.body);
        res.status(201).send('User created successfully');
    });

    app.use((err, req, res, next) => {
        console.error('Error:', err);
        res.status(500).send('Internal Server Error');
    });

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}