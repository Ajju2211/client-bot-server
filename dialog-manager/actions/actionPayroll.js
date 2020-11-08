const axios = require("axios");
const md5 = require("md5");
const { buildResponse } = require("../../utils/make-response");
const payrollActions = require("../action-helpers/payroll");
const dtUtil = require("../../utils/dateUtil");


module.exports['main.payroll.absentees.today'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getToday();
    return await payrollActions.absentees(data, token);
}

module.exports['main.payroll.absentees.yesterday'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getYesterday();
    return await payrollActions.absentees(data, token);
}

module.exports['main.payroll.absentees.lastmonth'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getLastMonth();
    return await payrollActions.absentees(data, token);
}

module.exports['main.payroll.absentees.lastweek'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getLastWeek();
    return await payrollActions.absentees(data, token);
}
// topitems
module.exports['main.payroll.topitems.today'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getToday();
    return await payrollActions.topitems(data, token);
}
module.exports['main.payroll.topitems.yesterday'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getYesterday();
    return await payrollActions.topitems(data, token);
}
module.exports['main.payroll.topitems.lastweek'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getLastWeek();
    return await payrollActions.topitems(data, token);
}
module.exports['main.payroll.topitems.lastmonth'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getLastMonth();
    return await payrollActions.topitems(data, token);
}

// topcategories
module.exports['main.payroll.topcategories.today'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getToday();
    return await payrollActions.topcategories(data, token);
}
module.exports['main.payroll.topcategories.yesterday'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getYesterday();
    return await payrollActions.topcategories(data, token);
}
module.exports['main.payroll.topcategories.lastweek'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getLastWeek();
    return await payrollActions.topcategories(data, token);
}
module.exports['main.payroll.topcategories.lastmonth'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getLastMonth();
    return await payrollActions.topcategories(data, token);
}

// topordertypes
module.exports['main.payroll.topordertypes.today'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getToday();
    return await payrollActions.topordertypes(data, token);
}
module.exports['main.payroll.topordertypes.yesterday'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getYesterday();
    return await payrollActions.topordertypes(data, token);
}
module.exports['main.payroll.topordertypes.lastweek'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getLastWeek();
    return await payrollActions.topordertypes(data, token);
}
module.exports['main.payroll.topordertypes.lastmonth'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getLastMonth();
    return await payrollActions.topordertypes(data, token);
}
