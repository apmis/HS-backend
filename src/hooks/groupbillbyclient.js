// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
   //console.log(context.result.data)
  
    if (!context.params.query.clientId ){
     // console.log("groupme")
      let orderArray=[]
      const uniqueArr = await [... new Set(context.result.data.map(data => JSON.stringify(data.participantInfo.clientId)))]
     // console.log(uniqueArr)
      uniqueArr.forEach( async arr=>{
          //get all orders for client
          let myOrder= await context.result.data.filter(data=>JSON.stringify(data.participantInfo.clientId)===arr)
          // console.log(myOrder)
        //  console.log(JSON.parse(arr))
          let catArray=[]
          const uniqueCat = await [... new Set(myOrder.map(data => data.orderInfo.orderObj.order_category))]
       //   console.log(uniqueCat)
        // group all clients orders by order category
          uniqueCat.forEach( async carr=>{
          let catOrder= await myOrder.filter(data=>data.orderInfo.orderObj.order_category===carr)
            const catGroup={
              order:catOrder,
              catName:carr
            }
           await  catArray.push(catGroup)
           // console.log("catarray:",catArray)
          })

          const orderGroup={
            client_id:JSON.parse(arr),
            clientname:myOrder[0].orderInfo.orderObj.clientname,
            bills:catArray,
          
          }
       // console.log(orderGroup)
          await orderArray.push(orderGroup) 
       //   console.log("orderarray:",orderArray)
        }
        )
 
       context.result.groupedOrder=orderArray
    }



    return context;
  };
};
