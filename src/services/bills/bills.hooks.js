const { authenticate } = require('@feathersjs/authentication').hooks;

const createorderbillhelper = require('../../hooks/createorderbillhelper');

const groupbillbyclient = require('../../hooks/groupbillbyclient');

const updateorderfrompayment = require('../../hooks/updateorderfrompayment');

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
    find: [groupbillbyclient()],
    get: [],
    create: [createorderbillhelper()],
    update: [],
    patch: [updateorderfrompayment()],
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