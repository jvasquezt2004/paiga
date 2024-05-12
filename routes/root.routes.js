import { Router } from 'express';
const router = Router();

app.get('/', (req, res) => {
    res.redirect('/login')
})

export default router;