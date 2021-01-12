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
};
