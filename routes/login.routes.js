import { Router } from 'express';

const router = Router();

app.get('/login', (req, res) => {
    res.send('Login');
})

export default Router;