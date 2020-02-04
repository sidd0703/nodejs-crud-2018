const {DataTypes} = require('sequelize');
var connection = require('../db');

const Posts = connection.define('posts', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false        
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {}

)

module.exports = Posts;