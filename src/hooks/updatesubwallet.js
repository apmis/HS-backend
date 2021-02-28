// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {

    const subwalletServ=context.app.service('subwallet')
    const transServ= context.app.service('subwallettransactions')

    //check if subwallet exist
      //if exist : update subwallet
      //if not create wallet
      

      const exist= await subwalletServ.find({
        query:{
          client:context.result.client,
          organization:context.result.organization
        }
      })
console.log("exist", exist)
      if (exist.data.length){  // update wallet of hospital
        //update
      }else{
      //create
        const obj={
          client: context.result.client, 
          organization: context.result.organization,
          name: context.result.fromName,
          amount:context.result.amount,
          status:"Active",
          //orgType:context.result.client, //client,organization
          orgName:context.result.toName,
          clientName:context.result.fromName
        }

 const deposit=     await subwalletServ.create(obj)
        console.log(deposit)

      }






    return context;
  };
};
