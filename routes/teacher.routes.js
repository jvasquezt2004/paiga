import { Router } from 'express';

const router = Router();

router.get('/home', (req, res) => {
    res.send('home teacher');
})

export default router;