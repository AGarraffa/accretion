const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Media extends Model {}

Media.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        outlet: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        topic: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        date: {
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
        modelName: 'media'
    }
);

module.exports = Media;