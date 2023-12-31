const mongoose = require('mongoose')

const addRecipeSchema = new mongoose.Schema({
    user_id : String,
    recipeTitle: String,
    recipeDescription: String,
    recipeCategory: String,
    recipePrepTime: Array,
    recipeCookTime: Array,
    recipeServes: String,
    recipeIngredients: String,
    recipeDirections: String,
    recipeSaveRecipeAs: String
})

const addRecipeModel = mongoose.model('addYourOwnRecipe', addRecipeSchema)

module.exports = { addRecipeModel }