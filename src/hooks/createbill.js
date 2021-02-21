// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    if(!!context.data.billInfo){
      const billServ=context.app.service('bills')
     await billServ.create(context.data.billInfo)
      

    }
    return context;
  };
};
