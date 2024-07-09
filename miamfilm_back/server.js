const db = require('./models/indexModel');
const app = require('./app');
const bcrypt = require('bcrypt')

db.instance.sync({force: true}).then(async () => {
    console.log('Database connected and synchronized')
    app.listen(3000, () => {
        console.log('Server running on port 3000 !');
    });

}).catch((e) => {
    console.error(e)
})