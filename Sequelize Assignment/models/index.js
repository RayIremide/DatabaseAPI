require('dotenv').config()
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: process.env.DIALECT
    }
)

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    }).catch(err => {
        console.log('Unable to connect to the database:', err);
    })

const db = {}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Add our tables
db.users = require('./user')(sequelize, DataTypes);
db.products =require('./product')(sequelize, DataTypes);

// sync all models
// force: false will not drop the table if it already exists
db.sequelize.sync({ force: false })
    .then(() => {
        console.log('Database & tables synced');
    }).catch(err => {
        console.error('Unable to sync database & tables:', err);
    })

module.exports = db;