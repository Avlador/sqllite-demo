const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
    },
    hobbies: {
        type: DataTypes.JSON,
    },
    age: {
        type: DataTypes.INTEGER,

    }

},
    {
        tableName: 'users',
        timestamps: true,
    })

module.exports = User;