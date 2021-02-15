// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
   // console.log(context.result);
   //console.log("context.data==",context.data)
    if(context.data.documentname==="Prescription"){
 
    const orderServ=context.app.service('order')
   /*  const medicationServ=context.app.service('medication')
    const treatmentServ=context.app.service('treatmentsheet') */
    const medicationhelperServ=context.app.service('medicationhelper')

      context.data.documentdetail.forEach(async (element)=> {

     
    //create medicationorder--> dispense
     await orderServ.create({
          documentationId:context.result._id,
          order_category:"Prescription",
          order: element.medication,
          instruction:element.instruction,
          destination_name: element.destination,
          destination:element.destinationId,
         // destination_location:  element.destination.location._id||null, 
         
         // destination_location_name: element.destination.location.name||"",

         // fulfilled:{ type: Boolean, default: false },
        //  pharm_fulfill: {type: Schema.Types.ObjectId, ref:"facility" },
         // status: { type: String, default: "pending", required: true}, //result ready
          
        //  encounter: { type: Schema.Types.ObjectId, },
          requestingdoctor_Id: context.data.createdBy, 
          requestingdoctor_Name: context.data.createdByname,
          requestingdoctor_locationid:context.data.locationId,
          requestingdoctor_locationName:context.data.location,
          requestingdoctor_facilityId:context.data.facility,
          requestingdoctor_facilityname:context.data.facilityname,
          //userid?employeeId
          clientId: context.data.client,
          clientname:context.data.clientname,
          client:context.data.clientobj,
          //client:{type: Schema.Types.Mixed},
          order_action:[],
          medication_action:[],
          treatment_action:[]
          
    }).then()
    .catch((err)=>console.log(err))
      
      //action=accept, decline, fulfill
   // console.log(prescriptionorder)
    //create medication-->medication history
  /*   const medicationlist= await medicationServ.create({
      medication: element.medication,
      instruction:element.instruction,
      requestingdoctor_Id: context.data.createdBy, 
      requestingdoctor_Name: context.data.createdByname,
      requestingdoctor_locationid:context.data.locationId,
      requestingdoctor_locationName:context.data.location,
      requestingdoctor_facilityId:context.data.facility,
      requestingdoctor_facilityname:context.data.facilityname,
      clientId: context.data.client,
      //status: { type: String, default: "pending", required: true} //pending, started, 
      medication_action:[
        /*  {actorname:{type: String} , 
      actorId:{type: Schema.Types.ObjectId} , 
      action:{type: String}, 
      description:{type: String}, 
      createdat:{type:Date , default:Date.now},   
         } */
      /*  ],
       orderId: prescriptionorder._id
    })

    console.log(medicationlist) */

    //create treatment sheet--->for 
    /* const treatmentlist= await treatmentServ.create({
      order_category: "Prescription",
      order: element.medication,
      instruction:element.instruction,
      requestingdoctor_Id: context.data.createdBy, 
      requestingdoctor_Name: context.data.createdByname,
      requestingdoctor_locationid:context.data.locationId,
      requestingdoctor_locationName:context.data.location,
      requestingdoctor_facilityId:context.data.facility,
      requestingdoctor_facilityId:context.data.facilityname,
      clientId: context.data.client, */
      //status: { type: String, default: "pending", required: true} //pending, started, 
    /*   treatment_action:[ */
        /*  {actorname:{type: String} , 
      actorId:{type: Schema.Types.ObjectId} , 
      action:{type: String}, 
      description:{type: String}, 
      createdat:{type:Date , default:Date.now},   
         } */
      /*  ],
       orderId: prescriptionorder._id
    })
    console.log(treatmentlist)  */

    //create medication helper ---->assist documentation
    await medicationhelperServ.create({
      medication: element.medication,
      instruction:element.instruction
     
    }).then()
    .catch((err)=>console.log(err))
  


  })

    }
    return context;
  };
};
