import express from 'express';
import rootRoutes from "./routes/root.routes.js";
import loginRoutes from "./routes/login.routes.js";

const app = express()

app.use('/', rootRoutes)
app.use('/', loginRoutes)

export default app