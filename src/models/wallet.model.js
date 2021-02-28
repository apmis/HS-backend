// wallet-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'wallet';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    wallet: { type: Schema.Types.ObjectId, ref:'facility', required:true }, 
    name: { type: String },
    amount:{ type: Number, required: true },
    status:{ type: String },
    entityType:{ type: String }, //client,organization
    orgName:{ type: String },
    clientName:{ type: String }
    //baseunit: { type: String },
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
