// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  //afterhook from invoice create to do the following
  //2.1 create subwallet transaction- debit==> 2.2 update subwallet

  //2.3 mark orders as paid

  /* const objContext ={
    clientId:medication.participantInfo.client._id,//sending money
    clientName: source ,
    client:medication.participantInfo.client,
    facilityId:user.employeeData[0].facilityDetail._id,
    invoiceNo:documentNo,
    totalamount:totalamount,
    createdby:user._id,
    status:"Fully Paid", //billid to be paid : ref invoice to pay
    bills:allItems,
    balance:balance
   } */
  //2.4 mark bills as paid
  return async context => {

    const invoice = context.result
    const SubwalletTxServ = context.app.service('subwallettransactions')
    const orderServ = context.app.service('order')
    const billServ = context.app.service('bills')

    invoice.bills.forEach( async element => {
      let obj={
        // toWallet:{ type: Schema.Types.ObjectId, ref:'facility', }, //receiving money
         //fromWallet:{ type: Schema.Types.ObjectId, ref:'facility', },//sending money
         //subwallet:{ type: Schema.Types.ObjectId, ref:'subwallet', },
         client:invoice.clientId,
         organization:invoice.facilityId,
         category:"debit", //debit/credit
         amount:element.paymentInfo.amountpaid,
         description: element.serviceInfo.name,
        
         toName:context.data.facilityName,
         fromName:invoice.clientName,
         createdby: invoice.createdby,
         
        // refBill:element._id, //billid to be paid : ref invoice to pay
         info:element,
         paymentmode:"Cash",
         
         facility: invoice.facilityId,
         locationId: element.participantInfo.locationId,
         type: "Payment"
  
     }



  //2.1 create subwallet transaction- debit==> 2.2 update subwallet
       await SubwalletTxServ.create(obj)
  //2.3 mark orders as paid
     await orderServ.patch(element.orderInfo.orderId, {
       order_status:invoice.status
     })

  //2.4 mark bills as paid
     await billServ.patch(element._id, element)
      
    });
    return context;
  };
};
