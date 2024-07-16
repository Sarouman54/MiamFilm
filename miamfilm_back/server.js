const db = require('./models/indexModel');
const app = require('./app');
const bcrypt = require('bcrypt')
const video = require('./services/videoService')

// db.sequelize.sync();

db.instance.sync({force: true}).then(async () => {
    console.log('Database connected and synchronized')
    app.listen(3000, () => {
        console.log('Server running on port 3000 !');
    });

    await db.role.create({name: "admin", description: "Le rôle admin a pour fonction de gérer les utilisateurs", created_at: new Date(), updated_at: new Date()});
    await db.role.create({name: "editor", description: "Le rôle editor a pour fonction de gérer les critiques des films et d'associer les recettes à ceux-ci", created_at: new Date(), updated_at: new Date()});
    await db.role.create({name: "user", description: "Le rôle user est accordé aux utilisateurs connectés afin que ceux-ci bénéficient de droits supplémentaires", created_at: new Date(), updated_at: new Date()});

    await video.addVideo("Le Seigneur des anneaux: La communauté de l'anneau");
    await video.addVideo("La Reine des neiges");
    await video.addVideo("How to train your dragon");
    await video.addVideo("Harry Potter et le prince de sang mêlé");
    await video.addVideo("Vice Versa 2");
    await video.addVideo("Le comte de Montecristo");

}).catch((e) => {
    console.error(e)
})