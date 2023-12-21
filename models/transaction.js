/** @format */

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Transaction extends Model {
		static associate(models) {
			Transaction.belongsTo(models.User, { foreignKey: "UserId" });
			Transaction.belongsTo(models.Stock, { foreignKey: "StockId" });
		}
	}
	Transaction.init(
		{
			type: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			amount: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					isNumeric: true,
				},
			},
			quantity: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					isNumeric: true,
				},
			},
			date: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			UserId: DataTypes.INTEGER,
			StockId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Transaction",
		}
	);
	return Transaction;
};
