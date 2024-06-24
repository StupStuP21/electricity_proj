const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Rebro = sequelize.define('rebra',{
        name: {
            type: DataTypes.STRING,
            }
        },
        {
            freezeTableName: true,
        }
    );
    return Rebro;
};