
const sequelize = require("sequelize");


module.exports = (sequelize, DataTypes) => {
    const allUsers = sequelize.define("allUsers", {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.ENUM,
            values: ['Male', 'Female']
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.ENUM,
            values: ['Admin', 'User'],
            defaultValue: "User"
        }
    }, {
        tableName: 'allUsers'
    });

    return allUsers;
}