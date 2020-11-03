const router = require("express").Router();

const salesApi = require("../sample-api/sales_api");

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
