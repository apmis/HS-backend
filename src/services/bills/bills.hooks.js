const { authenticate } = require('@feathersjs/authentication').hooks;

const createorderbillhelper = require('../../hooks/createorderbillhelper');

const groupbillbyclient = require('../../hooks/groupbillbyclient');

const updateorderfrompayment = require('../../hooks/updateorderfrompayment');

const {populate} = require('feathers-hooks-common');

const resultSchema = {
  include:[ {
    service: 'labresults',
    nameAs: 'resultDetail',
    parentField: '_id',
    childField: 'billId'
  },
 /* {
    service: 'billing',
    nameAs: 'billingDetails',
    parentField: 'billingId',
    childField: '_id'
  },  */
    /*{
    service: 'doctor',
    nameAs: 'DocDetails',
    parentField: 'doctor',
    childField: 'userID'
  } */
  ],
}
//populate({schema:doctorCitizenSchema})

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
    all: [populate({schema:resultSchema})],
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
