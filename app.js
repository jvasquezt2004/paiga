import express from 'express';
import rootRoutes from "./routes/root.routes.js";
import loginRoutes from "./routes/login.routes.js";
import studentRoutes from "./routes/student.routes.js";
import teacherRoutes from "./routes/teacher.routes.js";
import adminRoutes from "./routes/admin.routes.js";

const app = express()

app.use('/', rootRoutes)
app.use('/', loginRoutes)
app.use('/student', studentRoutes)
app.use('/teacher', teacherRoutes)
app.use('/admin', adminRoutes)

export default app