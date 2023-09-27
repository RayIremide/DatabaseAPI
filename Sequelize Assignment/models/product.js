
const sequelize = require("sequelize");


module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("products", {
        product_id:{
            type:DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey:true
        },
        product_name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        product_description:{
            type:DataTypes.STRING,
            allowNull:false
        },
        unit_price:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        quantity:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
        },{
            tablename:'products'
        })

    return Product;
}