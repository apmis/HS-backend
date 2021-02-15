// order-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'order';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    documentationId:{type: Schema.Types.ObjectId} , 
    order_category: { type: String, },
    order: { type: String, required: true },
    instruction: { type: String,  },
    destination: {type: Schema.Types.ObjectId}, //full facility object
    destination_location: {type: Schema.Types.ObjectId, ref:"location"},
    destination_name: { type: String, },
    destination_location_name: { type: String, },

    fulfilled:{ type: Boolean, default: false },
    destination_fulfill: {type: Schema.Types.ObjectId, ref:"facility" },

    order_status: { type: String, default: "pending", required: true}, //result ready => state of the order
    treatment_status: { type: String, default: "pending", required: true}, //=>state of treatment
    medication_status: { type: String, default: "pending", required: true}, //=>state of medication

    encounter: { type: Schema.Types.ObjectId, },
    requestingdoctor_Id: { type: Schema.Types.ObjectId, required: true }, //userid?employeeId
    requestingdoctor_Name: {type: String} ,
    requestingdoctor_locationid:{type: Schema.Types.ObjectId, ref:"facility" },
    requestingdoctor_locationName:{type: String} ,
    requestingdoctor_facilityId:{type: Schema.Types.ObjectId, ref:"facility" },
    requestingdoctor_facilityname:{type: String} ,
    clientId: {type: Schema.Types.ObjectId, required: true },
    clientname:{type: String} ,
    client:{type: Schema.Types.Mixed},

    order_action:[
      {actormname:{type: String} , 
      actorId:{type: Schema.Types.ObjectId} , 
      action:{type: String}, 
      description:{type: String}, 
      createdat:{type:Date , default:Date.now},  
    }],  //action=accept, decline, fulfill
    //prescriptionId:{type: Schema.Types.ObjectId, }
    medication_action:[
     {actorname:{type: String} , 
    actorId:{type: Schema.Types.ObjectId} , 
    action:{type: String}, 
    description:{type: String}, 
    createdat:{type:Date , default:Date.now},   
       } 
     ],
    treatment_action:[
      {actorname:{type: String} , 
      actorId:{type: Schema.Types.ObjectId} , 
      action:{type: String}, 
      description:{type: String}, 
      createdat:{type:Date , default:Date.now},  
    }],  
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
