const router = require("express").Router();

const salesApi = require("../sample-api/sales_api");
const reconc = require("../sample-api/reconciliation_api");
const authController = require("../sample-api/auth");

// verify user by email_id
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

// reconciliation API
// edcreport
router
    .post('/reconciliation/edcreport', reconc.edcreport);
// bankdepositreport
router
    .post('/reconciliation/bankdepositreport', reconc.bankdepositreport);
// cancellations
router
    .post('/reconciliation/cancellations', reconc.cancellations);
// variance
router
    .post('/reconciliation/variance', reconc.variance);
// pendingpayouts
router
    .post('/reconciliation/pendingpayouts', reconc.pendingpayouts);
// expencetab
router
    .post('/reconciliation/expensetab', reconc.expensetab);
    
module.exports = router;
