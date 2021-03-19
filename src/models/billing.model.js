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
    category: { type: String },
   
    facility:{ type: Schema.Types.ObjectId },
    facilityname:{ type: String },

    productId: { type: Schema.Types.ObjectId},
    baseunit:{ type: String },
    inventoryId:{type: Schema.Types.ObjectId}, 

    /* serviceId: {type: Schema.Types.ObjectId},//billing is either a service or a product
    service_name:{ type: String },
    service: { type: String }, */
  
    panel:{ type: Boolean, default: false },
    panelServices:[{
      serviceId: {type: Schema.Types.ObjectId},
      service_name:{ type: String },
      panel:{ type: Boolean, default: false }
    }],

   createdBy:{ type: Schema.Types.ObjectId },
   updatedBy:{ type: Schema.Types.ObjectId },
    contracts:[{
    source_org:{ type: Schema.Types.ObjectId }, //writer -NHIS,HMO (NHIS is a plan though)
    source_org_name:{ type: String },
    billing_type:{ type: String },

    dest_org:{ type: Schema.Types.ObjectId }, //consumer-facility
    dest_org_name:{ type: String },

    price:{ type: Number },
    plans:[{ type: String }], 
    capitation:{type:Boolean, default:false},
    comments:{ type: String },
   
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
