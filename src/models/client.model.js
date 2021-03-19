// client-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'client';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({ //nasomart
    firstname: { type: String },
    middlename: { type: String },
    lastname: { type: String },
    dob: { type: Date },
    gender: { type: String },
    maritalstatus: { type: String },
    religion: { type: String },
    phone: { type: String },
    email: { type: String, unique: true, lowercase: true },
    profession: { type: String },
   
    nok_name: { type: String },
    nok_phoneno: { type: String },
    nok_email: { type: String },
    nok_relationship: { type: String },
    bloodgroup: { type: String },
    genotype: { type: String },
    disabilities: { type: String },
    specificDetails:{ type: String },
    clientTags:{ type: String },
    mrn:{ type: String },
    address:{ type: String },
    city:{ type: String },
    lga:{ type: String },
    state:{ type: String },
    country:{ type: String },
    allergies:{ type: String },
    comorbidities:{ type: String },
    alive:{ type:Boolean, default:true },
    active:{ type:Boolean, default:true },

    facility: { type: Schema.Types.ObjectId, ref:'facility', required:true },
    userId: { type: Schema.Types.ObjectId, ref:'users'  },


    paymentinfo:[
      {
        paymentmode:{ type: String,  default:"Cash"},
        organizationId:{ type: Schema.Types.ObjectId },
        organizationName:{ type: String,  },
        principalId:{ type: String,  },
        clientId:{ type: String,  },
        principalName:{ type: String,  },
        plan:{ type: String,  },
        active:{ type: Boolean,default:true},
        principal:{ type: Schema.Types.ObjectId, ref:'client' }


      }
    ]

    /* paymentinfo2:{
      cash:{ type:Boolean, default:true },
      cashDetails:{
        cash_balance:{type:Number, default:0}
      },

      familyCover:{ type:Boolean, default:false },
      familyDetails:{
        familyPrincipal:{ type: Schema.Types.ObjectId,ref:'client' },
        familyName:{ type: Boolean },
        active:{ type: Boolean }
      },

      companyCover:{ type:Boolean, default:false },
      companyDetails:[{
      companyPrincipal:{ type: Schema.Types.ObjectId,ref:'client' },
      company:{ type: Schema.Types.ObjectId,ref:'facility' },
      companyName:{ type: String },
      companyPlan:{ type: String },
      active:{ type: Boolean }
      }],

      hmoCover:{ type:Boolean, default:false },
      hmoDetails:[{
      hmoPrincipal:{ type: Schema.Types.ObjectId,ref:'client' },
      hmo:{ type: Schema.Types.ObjectId,ref:'facility' },
      hmoName:{ type: String },
      hmoPlan:{ type: String },
      active:{ type: Boolean },
      }] 
    }*/
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
