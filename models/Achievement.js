const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Acheivement extends Model {}

Acheivement.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        acheivement_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        data_received: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        emp_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id"
            }
        },
        off_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "office",
                key: "id"
            }
        }   
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'acheivement',
    }
);

module.exports = Acheivement;