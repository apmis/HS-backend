// billing-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'billing';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    name:{ type: String },
    service: { type: String },
    category: { type: String },
    productId: { type: Schema.Types.ObjectId},
    facility:{ type: Schema.Types.ObjectId },
    baseunit:{ type: String },
    inventoryId:{type: Schema.Types.ObjectId}, 
    serviceId: {type: Schema.Types.ObjectId},
    service_name:{ type: String },
    facilityname:{ type: String },

    contracts:[{
    source_org:{ type: Schema.Types.ObjectId }, //writer -NHIS,HMO
    dest_org:{ type: Schema.Types.ObjectId }, //consumer-facility
    price:{ type: Number },
    source_org_name:{ type: String },
    dest_org_name:{ type: String },
    modifier:[{
      tag:{ type: String }, 
      price:{type: Number}, 
      variation:{type: String}
      }]
    }]
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
