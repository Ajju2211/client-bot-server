const router = require("express").Router();

const salesApi = require("../sample-api/sales_api");
const authController = require("../sample-api/auth");

router
    .post('/user/verifyUser', authController.getUserData);
// Login API
router
    .post('/login', authController.login);
// SALES API
// consolidated sales
router
    .post('/sales/consolidated', salesApi.consolidatedSales);

// topitems sales
router
    .post('/sales/topitems', salesApi.topitems);

// topcategories sales
router
    .post('/sales/topcategories', salesApi.topcategories);

// topordertypes sales
router
    .post('/sales/topordertypes', salesApi.topordertypes);

module.exports = router;
