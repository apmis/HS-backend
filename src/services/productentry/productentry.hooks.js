const { authenticate } = require('@feathersjs/authentication').hooks;

const updateinventoryproductentry = require('../../hooks/updateinventoryproductentry');

const updatebillandorder = require('../../hooks/updatebillandorder');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [updateinventoryproductentry(), updatebillandorder()],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
