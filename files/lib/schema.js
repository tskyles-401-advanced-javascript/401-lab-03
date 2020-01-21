'use strict';

module.exports = {
  firstName: { type: 'string', required: true },
  lastName: { type: 'string', required: true },
  hair: { type: 'object', required: true },
  favoriteFoods: { type: 'array', required: true },
  married: { type: 'boolean', required: true },
  kids: { type: 'number', required: true },
};