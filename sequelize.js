const Sequelize = require('sequelize');
const UserModel = require('./models/user')

const sequelize = new Sequelize('bookings_gcp', 'roberta', '3456', {
    host: '34.105.145.148',
    dialect: 'mysql',
    port: 3306,
    define: {
        timestamps: false
    }
});

sequelize.authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch((err) => {
            console.log('Unable to connect to the database');
        });



const Bookings = UserModel(sequelize, Sequelize);

module.exports = {
  Bookings,
}