import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import bcrypt from 'bcryptjs';
import { sequelize , Admin } from './models/index.js'

const PORT = process.env.PORT || 5000;

async function ensureDefaultAdmin() {
    const count = await Admin.count();
    if(count > 0) return;

    const username = process.env.ADMIN_USERNAME || 'admin'
    const password = process.env.ADMIN_PASSWORD || 'admin@123'

    const passwordHash = await bcrypt.hash(password,10);

    await Admin.create({
        username,
        passwordHash,
        name:"Administartor"
    });
    console.log(`Default admin created - username: "${username}" . kindly login and change the password `)
}

async function start() {
    try{
        await sequelize.authenticate();
        console.log('MYSQL Connection has been established successfully');
        
        await sequelize.sync({alter:true});
        console.log('MYSQL Database synced successfully');

        await ensureDefaultAdmin();

        app.listen(PORT , ()=>
            console.log(`Server is running on http://localhost:${PORT}`)
        );
    }catch(err){
        console.error('Unable to connect to the database:',err)
        process.exit(1);

    }
}



start();