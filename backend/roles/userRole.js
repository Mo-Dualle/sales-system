
// user roles
const AccessControl = require("accesscontrol");
const access = new AccessControl();

exports.roles = (function () {

  // SALES_ADMIN PERMISSIONS
  access.grant("SALES_ADMIN").readAny("profile").updateAny("profile");
  // CUSTOMER PERMISSIONS
  access.grant("CUSTOMER").readOwn("profile");


  //ADMIN PERMISSIONS
  access
    .grant("ADMIN")
    .extend("SALES_ADMIN")
    .updateAny("profile")
    .deleteAny("profile");

  return access;
})();