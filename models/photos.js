'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photos = sequelize.define('Photos', {
    title: DataTypes.STRING,
    photo: DataTypes.BLOB,
    kind: DataTypes.STRING
  }, {});
  Photos.associate = function(models) {
    // associations can be defined here
  };
  return Photos;
};