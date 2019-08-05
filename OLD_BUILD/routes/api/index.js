const router = require("express").Router();
const testdataRoutes = require('./testdata.js.js');

//  routes
router.use("/testdata", testdataRoutes);

module.exports = router;
