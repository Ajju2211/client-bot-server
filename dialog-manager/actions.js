const axios = require("axios");
const md5 = require("md5");
const { buildResponse } = require("../utils/make-response");
const salesActions = require("../dialog-manager/action-helpers/sales");
const dtUtil = require("../utils/dateUtil");
module.exports.restart = () => {
    return buildResponse({
        text:"Welcome to the bot.",
        buttons:[
            {
                title:"Sales",
                payload:"/main.sales"
            }
        ]
    });
}

module.exports['main.sales.consolidated.today'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getToday();
    return await salesActions.consolidated(data, token);
}

module.exports['main.sales.consolidated.yesterday'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getYesterday();
    return await salesActions.consolidated(data, token);
}

module.exports['main.sales.consolidated.lastmonth'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getLastMonth();
    return await salesActions.consolidated(data, token);
}

module.exports['main.sales.consolidated.lastweek'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getLastWeek();
    return await salesActions.consolidated(data, token);
}
