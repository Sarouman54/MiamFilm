const db = require('./models/indexModel');
const app = require('./app');
const bcrypt = require('bcrypt');

const video = require('./services/videoService');
const role = require('./services/roleService');
const recipe = require('./services/recipeService');
const comment = require('./services/commentService');

// db.sequelize.sync();

db.instance.sync({force: true}).then(async () => {
    console.log('Database connected and synchronized')
    app.listen(3000, () => {
        console.log('Server running on port 3000 !');
    });

    await db.role.create({name: "admin", description: "Le rôle admin a pour fonction de gérer les utilisateurs", created_at: new Date(), updated_at: new Date()});
    await db.role.create({name: "editor", description: "Le rôle editor a pour fonction de gérer les critiques des films et d'associer les recettes à ceux-ci", created_at: new Date(), updated_at: new Date()});
    await db.role.create({name: "user", description: "Le rôle user est accordé aux utilisateurs connectés afin que ceux-ci bénéficient de droits supplémentaires", created_at: new Date(), updated_at: new Date()});

    const adminRole = await role.getIdRoleByName("admin")
    bcrypt.hash('admin', 10, async function(err, bcryptPassword){
        if(bcryptPassword){
            await db.user.create({id: 1, last_name: "admin", first_name: "admin", username: "admin", email: "admin@miamfilm.com", hashedPassword: bcryptPassword, id_role: adminRole.id, created_at: new Date(), updated_at: new Date()})
        }
    })
    const editorRole = await role.getIdRoleByName("editor")
    bcrypt.hash('editor', 10, async function(err, bcryptPassword){
        if(bcryptPassword){
            await db.user.create({id: 2, last_name: "editor", first_name: "editor", username: "editor", email: "editor@miamfilm.com", hashedPassword: bcryptPassword, id_role: editorRole.id, created_at: new Date(), updated_at: new Date()})
        }
    })
    const userRole = await role.getIdRoleByName("user")
    bcrypt.hash('user', 10, async function(err, bcryptPassword){
        if(bcryptPassword){
            await db.user.create({id: 3, last_name: "user", first_name: "user", username: "user", email: "user@miamfilm.com", hashedPassword: bcryptPassword, id_role: userRole.id, created_at: new Date(), updated_at: new Date()})
        }
    })

    await video.addVideo("Le Seigneur des anneaux: La communauté de l'anneau", 2);
    await video.addVideo("La Reine des neiges", 2);
    await video.addVideo("How to train your dragon", 2);
    await video.addVideo("Harry Potter et le prince de sang mêlé", 2);
    await video.addVideo("Vice Versa 2", 2);
    await video.addVideo("Le comte de Montecristo", 2);

    await recipe.addRecipe("Lembas", 4, 20, "3 oeufs, 25cl de miel, 3 kumquats, 2c.c fleur d'oranger, 85g amandes hachées, 55g beurre fondu, 300g farine de blé, 1/2c.c sel", "https://i.ibb.co/mNGj2rw/lembas-bread-recipe.jpg", "Préchauffez le four à 180°C (thermostat 6).-Mettez les œufs, le miel, les kumquats, l’eau de fleur d’oranger, le beurre fondu et les amandes dans un robot culinaire ou un mixeur. Mélangez à puissance maximale pendant 2 à 4 minutes._Ajoutez 150g de farine. Mélangez pendant une minute ou deux._Mettez le mélange dans un bol et ajoutez le reste de la farine et le sel. Fouettez pour bien mélanger._Séparez la pâte en plusieurs morceaux (2 cuillerées à soupe environ) et versez-les dans de petits moules carrés. Ou alors, versez le tout dans un grand plat et séparez-les après cuisson._Cuire au four pendant environ 10 minutes. Chacun doit être légèrement doré. Après cuisson, tracez au couteau les diagonales en surface des lembas.", "Moyen", 3, 2);
    await recipe.addRecipe("Bièraubeurre", 2, 10, "10g sucre vanillé, 10g sucre en poudre, 20g beurre coupé, 50g crème liquide, 1/2c.s cannelle, 400ml cidre doux, 1 bombe crème chantilly", "https://i.ibb.co/RjSq39C/biereaubeurre.jpg", "Placez le sucre vanillé et le sucre en poudre dans une casserole._Faites chauffer plusieurs minutes pour obtenir un caramel. Attention à ne pas le faire brûler !_Ajoutez le beurre coupé en morceau tout en mélangeant au fouet. Vous devez obtenir une texture bien lisse et ambrée._Versez la crème liquide en continuant de mélanger. Ajoutez la cannelle._Versez le cidre dans la casserole et fouettez vivement pendant une minute._Répartissez la Bièraubeurre dans des mugs en ne les remplissant qu’aux 3/4._Recouvrez le quart restant de crème chantilly.", "Facile", 5, 2);

    await comment.addComment("Mon disney préféré !", "Un des meilleurs disney pour ma part. À chaque fois que ça pourrait stagner, le récit trouve un nouveau souffle. Visuellement c'est magnifique. L'histoire entre les deux soeurs est extrêmement touchante, tout comme certains personnages comme Kristoff. Les chansons sont mémorables, et pas que le titre phare que vous avez tous en tête et que je n'ai pas besoin de rappeler. J'aime ce film de mon enfance et maintenant adulte je ne m'en lasse pas ! ", 3, 2, null);
    await comment.addComment("La meilleure bière", "La chantilly apporte de la douceur au cidre faisant de cette petite bièraubeurre une boisson exquise.", 3, 4, 2);

}).catch((e) => {
    console.error(e)
})