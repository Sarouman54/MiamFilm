const { Sequelize } = require("sequelize")
const dbConfig = require("../db.config")

const instance = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.hostname,
    port: dbConfig.port,
    dialect: "mysql",
  }
)

module.exports = {
  instance,
  user: require('./userModel')(instance),
  role: require('./roleModel')(instance),
  recipe: require('./recipeModel')(instance),
  review: require('./reviewModel')(instance),
  comment: require('./commentModel')(instance),
  tag: require('./tagModel')(instance),
}

// Un rôle peut avoir plusieurs utilisateurs
// instance.models.role.belongsToMany(instance.models.user, {foreignKey: "idUser"})
// Un utilisateur peut avoir un seul et unique rôle
instance.models.user.belongsTo(instance.models.role, {foreignKey: "idRole"});

// Un utilisateur (auteur) peut avoir plusieurs recettes
// instance.models.user.belongsToMany(instance.models.recipe, {foreignKey: "idRecipe"})
// Une recette peut avoir un seul et unique utilisateur (auteur)
instance.models.recipe.belongsTo(instance.models.user, {foreignKey: "idUser"})

// Un tag peut appartenir à plusieurs recettes
// instance.models.tag.belongsToMany(instance.models.recipe, {foreignKey: "idRecipe"})
// Une recette peut avoir plusieurs tags
instance.models.recipe.belongsToMany(instance.models.tag, {through: ""})

// Un tag peut appartenir à plusieurs reviews
// instance.models.tag.belongsToMany(instance.models.review, {foreignKey: "idReview"})
// Une review peut avoir plusieurs tags 
instance.models.review.belongsToMany(instance.models.tag, {through: ""})

// Un utilisateur (auteur) peut avoir plusieurs reviews
// instance.models.user.belongsToMany(instance.models.review, {foreignKey: "idReview"})
// Une review peut avoir un seul et unique utilisateur (auteur)
instance.models.review.belongsTo(instance.models.user, {foreignKey: "idUser"})

// Une review peut avoir plusieurs commentaires
// instance.models.review.belongsToMany(instance.models.comment, {foreignKey: "idComment"})
// Un commentaire ne peut appartenir qu'à une seule et unique review
instance.models.comment.belongsTo(instance.models.review, {foreignKey: "idReview"})

// Un utilisateur (auteur) peut poster plusieurs commentaires
// instance.models.user.belongsToMany(instance.models.comment, {foreignKey: "idComment"})
// Un commentaire ne peut avoir qu'un seul et unique utilisateur (auteur)
instance.models.comment.belongsTo(instance.models.user, {foreignKey: "idUser"})

// Une recette peut avoir plusieurs commentaires
// instance.models.recipe.belongsToMany(instance.models.comment, {foreignKey: "idComment"})
// Un commentaire ne peut être associé qu'à une seule et unique recette
instance.models.comment.belongsTo(instance.models.recipe, {foreignKey: "idRecipe"})
