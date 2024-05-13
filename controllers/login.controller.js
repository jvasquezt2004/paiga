import pool from "../db/db.js";

export function loginView(req, res) {
    res.render("login")
}

export function loginPost(req, res) {
    const { accountNumber, password } = req.body;
    const query = `
        SELECT 'admin' AS role FROM admin WHERE admin_id = ? AND password_hash = ?
        UNION 
        SELECT 'teacher' AS role FROM teachers WHERE teacher_id = ? AND password_hash = ?
        UNION
        SELECT 'student' AS role FROM students WHERE student_id = ? AND password_hash = ?;
    `;

    pool.execute(query, [accountNumber, password, accountNumber, password, accountNumber, password], (error, results) => {
        if (error) {
            return res.status(500).send('Error al verificar al usuario');
        }
        if (results.length > 0) {
            const userRole = results[0].role;
            switch (userRole) {
                case 'admin':
                    res.redirect('/admin/home');
                    break;
                case 'teacher':
                    res.redirect('/teacher/home');
                    break;
                case 'student':
                    res.redirect('/student/home');
                    break;
                default:
                    res.render('login', { error: 'No role found' });
            }
        } else {
            res.send('Credenciales incorrectas o usuario no encontrado');
        }
    });
}
