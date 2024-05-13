import { Router } from 'express';

const router = Router();

router.get('/home', (req, res) => {
    res.send('home students');
})

export default router;