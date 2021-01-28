const { authenticate } = require('@feathersjs/authentication').hooks;
const {populate} = require('feathers-hooks-common');

const inventorySchema = {
  include:[ {
    service: 'products',
    nameAs: 'productDetail',
    parentField: 'productId',
    childField: '_id'
  },
  /* {
    service: 'doctor',
    nameAs: 'referredDocDetails',
    parentField: 'doc_referred_to',
    childField: 'userID'
  }, 
  {
    service: 'doctor',
    nameAs: 'DocDetails',
    parentField: 'doctor',
    childField: 'userID'
  } */
  ],
}
const createservicefrominventory = require('../../hooks/createservicefrominventory');
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
    all: [populate({schema:inventorySchema})],
    find: [],
    get: [],
    create: [createservicefrominventory()],
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
