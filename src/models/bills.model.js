// bills-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'bills';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    orderInfo:{
      orderId:{ type: Schema.Types.ObjectId },
      orderObj:{ type: Schema.Types.Mixed },
    },
    serviceInfo:{
      //billingId:{ type: Schema.Types.ObjectId, ref:'billing'},
     // name: { type: String },
     // quantity: { type: Number, required: true },
     // amount:{ type: Number, required: true },
      //-----------------------------------------//
     // costprice: { type:Number },
      price: { type:Number, },
      quantity: { type: Number, },
      productId: { type: Schema.Types.ObjectId, ref:'product'  },
      name: { type: String },
      baseunit: { type: String },
      amount:{ type: Number, required: true },
      billingId:{ type: Schema.Types.ObjectId, ref:'billing'},
      createdby: { type: Schema.Types.ObjectId },
    },
    paymentInfo:{},
    participantInfo:{
      billingFacility:{ type: Schema.Types.ObjectId },
      locationId: { type: Schema.Types.ObjectId, ref:'location'  },
      clientId:{ type: Schema.Types.ObjectId },
      client:{ type: Schema.Types.Mixed },
      paymentmode:{ type: Schema.Types.Mixed }
    },
    createdBy:{ type: Schema.Types.ObjectId },
    billing_status: { type: String, default: "unpaid", required: true}, //unpaid,partially paid, fully paid, waived, cancel,suspend
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

/* [{
  cash:{ type:Boolean, default:true },
  cashDetails:{
    cash_balance:{type:Number, default:0}
  },

  familyCover:{ type:Boolean, default:false },
  familyDetails:{
    familyPrincipal:{ type: Schema.Types.ObjectId,ref:'client' },
    active:{ type: Boolean }
  },

  companyCover:{ type:Boolean, default:false },
  companyDetails:[{
  companyPrincipal:{ type: Schema.Types.ObjectId,ref:'client' },
  company:{ type: Schema.Types.ObjectId,ref:'facility' },
  companyPlan:{ type: String },
  active:{ type: Boolean }
  }],

  hmoCover:{ type:Boolean, default:false },
  hmoDetails:[{
  hmoPrincipal:{ type: Schema.Types.ObjectId,ref:'client' },
  hmo:{ type: Schema.Types.ObjectId,ref:'facility' },
  hmoPlan:{ type: String },
  active:{ type: Boolean },
  }]
}] */