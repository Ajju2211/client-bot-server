const axios = require("axios");
const BASE_URL = "https://client-bot-server.herokuapp.com";
const { buildResponse } = require("../../utils/make-response");
const { renameKeys } = require("../../utils");
module.exports.consolidated = async (data, token) => {
    const URL = BASE_URL + "/api/v1/sales/consolidated";
    const resp = await axios.post(URL, data, {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
        },
    });
    let result = resp.data.result;
    let d = data.for;
    let textMessage = `${d}'s Consolidated sales`;
    let cards = [];
    if (data.for === "week" || data.for === "month") {
        d = "Last Week";
        textMessage = `${d}'s Consolidated sales from ${data.from} - ${data.to}`;
    }
    textMessage += `\n Total Bills - ${result.totaldata.bill_count} \n Total Sales - ${result.totaldata.totalsale}`;
    const keysMap = {
        outletname: "name",
        bill_count: "counts",
        totalsale: "totalAmount",
    };
    result.data.forEach((outlet) => {
        cards.push(renameKeys(keysMap, outlet));
    });

    return buildResponse({ text: textMessage, cards: cards });
};

// module.exports.topitems = async (data, token) => {
//     const URL = BASE_URL + "/api/v1/sales/topitems";
//     const resp = await axios.post(URL, data, {
//         headers: {
//             "Content-Type": "application/json",
//             authorization: `Bearer ${token}`,
//         },
//     });
//     let result = resp.data.result;
//     let d = data.for;
//     let textMessage = `${d}'s Consolidated sales`;
//     let cards = [];
//     if (data.for === "week" || data.for === "month") {
//         d = "Last Week";
//         textMessage = `${d}'s Consolidated sales from ${data.from} - ${data.to}`;
//     }
//     textMessage += `\n Total Bills - ${result.totaldata.bill_count} \n Total Sales - ${result.totaldata.totalsale}`;
//     const keysMap = {
//         outletname: "name",
//         bill_count: "counts",
//         totalsale: "totalAmount",
//     };
//     result.data.forEach((outlet) => {
//         cards.push(renameKeys(keysMap, outlet));
//     });

//     return buildResponse({ text: textMessage, cards: cards });
// };
