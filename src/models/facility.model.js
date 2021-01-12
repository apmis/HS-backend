// facility-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'facility';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    facilityName: { type: String, required: true },
    facilityAddress: { type: String },
    facilityCity: { type: String },
    facilityContactPhone: { type: String},
    facilityEmail: { type: String},
    facilityOwner: { type: String  },
    facilityType: { type: String  },
    facilityCategory: { type: String  },
    createdby: { type: Schema.Types.ObjectId, ref:'users'  },
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
  
};
