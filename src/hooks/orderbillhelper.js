// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {

    const exist= await context.app.service('orderbillhelper').find({
      query:{
        order:  context.data.order,
        product:context.data.product,
      }
    })
    if(exist.data.length>0){
      context.result=exist
    }

    return context;
  };
};
