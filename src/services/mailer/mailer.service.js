// Initializes the `mailer` service on path `/mailer`
//const { Mailer } = require('./mailer.class');
//const createModel = require('../../models/mailer.model');
const hooks = require('./mailer.hooks');
const Mailer = require('feathers-mailer');
const smtpTransport = require('nodemailer-smtp-transport');

module.exports = function (app) {
  /* const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  }; */

  // Initialize our service with any options it requires
  app.use('/mailer', Mailer(smtpTransport({
    host: 'email-smtp.us-east-1.amazonaws.com',
    secure: true,
    port: 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })) 
  //new Mailer(options, app)
  );

  // Get our initialized service so that we can register hooks
  const service = app.service('mailer');

  service.hooks(hooks);
};
