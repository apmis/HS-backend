// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const userService=context.app.service('users')
    const userdata={
      firstname: context.data.firstname,
      lastname: context.data.lastname,
      phone: context.data.phone,
      email: context.data.email,
      password: context.data.password,
     // stacker: { type: Boolean, default: false },
    }
    try{
      const user=await userService.create(userdata)
      // console.log(user)
      context.data.userId=user._id
    }
    catch(err){
        console.log(err)
        throw new Error(err)
    }
    

    return context;
  };
};
