// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const inventServ=context.app.service('inventory')
    console.log(context.result)
    context.result.productitems.forEach( async element => {
       const exist= await inventServ.find({
         query:{
           productId:element.productId,
           storeId:context.result.storeId,
           facility:context.result.facility
         }
       })
       console.log (exist)
       if (exist.data.length){
         try{
         await inventServ.patch(exist.data[0]._id,
          {
            quantity:exist.data[0].quantity+element.quantity,
            stockvalue:exist.data[0].stockvalue+element.amount,
            costprice:(exist.data[0].stockvalue+element.amount)/(exist.data[0].quantity+element.quantity)
          })
          console.log("product exist, updated datapoints")
        }catch(err){
          console.log(err)
        }

       }else{
         try{
        await inventServ.create({
          facility: context.result.facility,
          storeId:context.result.storeId,
          productId:element.productId, 
          serviceId:null,
          name: element.name,
          baseunit: element.baseunit,
          quantity:element.quantity,
          reorder_level: null,
        
          costprice: element.costprice,
          sellingprice:null,
          stockvalue:element.amount,
          category:null, //find product category
          SKU:null,
          batches:[]
         })
         console.log("product does not exist, created datapoints")
       }catch(err){
        console.log(err)
      }

    }});
    //console.log(console.result)
    //context.result
    //check for each productitem
      //if the product already exist in inventory
        //if yes: update the quantity
          // record the transction
            //invert the header
      // if no: create the inventory
          //record the
          // transaction 
            //invert the header

    return context;
  };
};
