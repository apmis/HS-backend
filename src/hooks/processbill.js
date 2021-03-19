// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const ClientServ=context.app.service('clinicaldocument')
    const orderServ=context.app.service('order')
    const billServ=context.app.service('bills')

    //create documentation
  let docu= await  ClientServ.create(context.data.document)
      .then()
      .catch((err)=>{
        console.log(err)
      })

    // create order
      context.data.serviceList.forEach(async (el)=>{
        el.orderinfo.documentationId=docu._id
        let ordu= await orderServ.create(el.orderinfo)
          .then()
          .catch((err)=>{
            console.log(err)
          })
         //create bill
          el.billInfo.orderInfo.orderId=ordu._id
          let billu= await billServ.create(el.billInfo)
      })

   

    return context;
  };
};
