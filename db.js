const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('blog', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

sequelize
.authenticate()
.then((r) => {
    console.log('connected !!');
})
.catch((error) => {
    throw error;
})

module.exports = sequelize;