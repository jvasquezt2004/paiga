import {createPool} from 'mysql2'

export const pool = createPool({
    host: process.env.HOST,
    user: 'alonso', // Colocar tu nombre de usuario de tu base de datos local
    password: 'password', // Colocar tu password
    port: 3306,
    database: 'paiga'
})
