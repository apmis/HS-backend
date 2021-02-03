// productentry-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'productentry';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    facility: { type: Schema.Types.ObjectId, ref:'facility', required:true },
    storeId: { type: Schema.Types.ObjectId, ref:'location'  },
    type: { type: String, required: true },
    documentNo: { type: String },
    date: { type: String },
    source: { type: String },
    totalamount: { type:Number, required: true },
    createdby: { type: Schema.Types.ObjectId},
    transactioncategory: { type: String, required: true }, //credit=entry , debit=exit
    productitems:[{
      costprice: { type:Number },
      sellingprice: { type:Number, },
      quantity: { type: Number, required: true },
      productId: { type: Schema.Types.ObjectId, ref:'product'  },
      name: { type: String },
      baseunit: { type: String },
      amount:{ type: Number, required: true },
      serviceId:{ type: Schema.Types.ObjectId, ref:'service'},
      createdby: { type: Schema.Types.ObjectId },
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
