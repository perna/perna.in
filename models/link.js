'use strict';
module.exports = function(sequelize, DataTypes) {
  var Link = sequelize.define('Link', {
    
    original_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },

    short_url: {
      type: DataTypes.STRING,
      index:true,
      validate: {
        isUrl: true
      }
    },

    public: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },

    click: {
      type: DataTypes.INTEGER
    },

    ip_user: {
      type: DataTypes.STRING(15),
      allowNull: false,
      validate: {
        isIP: true
      }
    },

  }, 

  {
    freezeTableName: true
  },

  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Link;
};