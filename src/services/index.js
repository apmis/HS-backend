const users = require('./users/users.service.js');
const facility = require('./facility/facility.service.js');
const careteam = require('./careteam/careteam.service.js');
const location = require('./location/location.service.js');
const employee = require('./employee/employee.service.js');
const department = require('./department/department.service.js');
const hsModules = require('./hs-modules/hs-modules.service.js');
const workspace = require('./workspace/workspace.service.js');
const roaster = require('./roaster/roaster.service.js');
const deptUnit = require('./dept-unit/dept-unit.service.js');
const billing = require('./billing/billing.service.js');
const mailer = require('./mailer/mailer.service.js');
const authmanagement = require('./authmanagement/authmanagement.service.js');
const products = require('./products/products.service.js');
const inventory = require('./inventory/inventory.service.js');
const productbatch = require('./productbatch/productbatch.service.js');
const productentry = require('./productentry/productentry.service.js');
const inventorytransaction = require('./inventorytransaction/inventorytransaction.service.js');
const client = require('./client/client.service.js');
const documentation = require('./documentation/documentation.service.js');
const episodeOfCare = require('./episode-of-care/episode-of-care.service.js');
const encounter = require('./encounter/encounter.service.js');
const documentclass = require('./documentclass/documentclass.service.js');
const clinicaldocument = require('./clinicaldocument/clinicaldocument.service.js');
const appointments = require('./appointments/appointments.service.js');
const order = require('./order/order.service.js');
const medication = require('./medication/medication.service.js');
const treatmentsheet = require('./treatmentsheet/treatmentsheet.service.js');
const medicationhelper = require('./medicationhelper/medicationhelper.service.js');
const task = require('./task/task.service.js');
const problem = require('./problem/problem.service.js');
const bills = require('./bills/bills.service.js');
//const authMgt = require('./auth-mgt/auth-mgt.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(facility);
  app.configure(careteam);
  app.configure(location);
  app.configure(employee);
  app.configure(department);
  app.configure(hsModules);
  app.configure(workspace);
  app.configure(roaster);
  app.configure(deptUnit);
  app.configure(billing);
  app.configure(mailer);
  //app.configure(authMgt);
  app.configure(authmanagement);
  app.configure(products);
  app.configure(inventory);
  app.configure(productbatch);
  app.configure(productentry);
  app.configure(inventorytransaction);
  app.configure(client);
  app.configure(documentation);
  app.configure(episodeOfCare);
  app.configure(encounter);
  app.configure(documentclass);
  app.configure(clinicaldocument);
  app.configure(appointments);
  app.configure(order);
  app.configure(medication);
  app.configure(treatmentsheet);
  app.configure(medicationhelper);
  app.configure(task);
  app.configure(problem);
  app.configure(bills);
};
