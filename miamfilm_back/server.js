const db = require('./models/indexModel');
const app = require('./app');

db.instance.sync({force: true}).then(async () => {
    console.log('Database connected and synchronized')
    app.listen(3000, () => {
        console.log('Server running on port 3000 !');
    });

    await db.roles.create({nom: "admin"});
    await db.roles.create({nom: "editor"});
    await db.roles.create({nom: "user"});
}).catch((e) => {
    console.error(e)
})