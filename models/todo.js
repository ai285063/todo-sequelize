'use strict'
// const {
//   Model
// } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    name: DataTypes.STRING,
    isDone: DataTypes.BOOLEAN
  }, {})
  Todo.associate = function (models) {
    // associations can be defined here
    Todo.belongsTo(models.User)
  }
  return Todo
  // class Todo extends Model {
  /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  // static associate (models) {
  // define association here
  // }
}
//   Todo.init({
//     name: DataTypes.STRING,
//     isDone: DataTypes.BOOLEAN
//   }, {
//     sequelize,
//     modelName: 'Todo'
//   })
//   return Todo
// }
