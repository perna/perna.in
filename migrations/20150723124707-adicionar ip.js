'use strict';

module.exports = {
  up: function (migration, DataTypes) {
                                    
    migration.addColumn(
      'Link',
      'ip_user',
      {
        type: DataTypes.STRING(15),
        allowNull: false
      }
    );

  },

  down: function (migration, DataTypes) {
    migration.removeColumn('Link', 'ip_user');
  }
};
