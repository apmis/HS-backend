// billing-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'billing';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    service: { type: String, required: true },
    category: { type: String, required: true },
    productId: { type: String, required: true },
    facility:{ type: String, required: true },
    
    //contracts:[array]
    source_org:{ type: String, required: true },
    dest_org:{ type: String, required: true },
    price:{ type: String, required: true },
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
