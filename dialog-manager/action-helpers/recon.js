const axios = require("axios");
const BASE_URL = "http://client-bot-server.herokuapp.com";
const { buildResponse } = require("../../utils/make-response");
const { renameKeys, generateBackgroundColors } = require("../../utils");
module.exports.variance = async (data, token) => {
  const URL = BASE_URL + "/api/v1/reconciliation/variance";
  const resp = await axios.post(URL, data, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  let result = resp.data.result;
  let d = data.for;
  let cards = [];
  result.forEach((outlet) => {
    let obj = {};
    obj.title = outlet.outlet_name;
    obj.metadata = {};
    obj.metadata.title = outlet.outlet_name;
    // Adding 2 vales bcoz ui doesn't have single value
    obj.metadata.data = [
      {
        title: "Amount",
        value: outlet.variance_amount,
      },
      {
        title: "As upto",
        value: data.from + " to " + data.to,
      },
    ];
    cards.push(obj);
  });

  return buildResponse({ cards: cards });
};

module.exports.cancellations = async (data, token) => {
  const URL = BASE_URL + "/api/v1/reconciliation/cancellations";
  const resp = await axios.post(URL, data, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  let result = resp.data.result;
  let cardWithGraph = [];
  const CHARTTYPE = "bar";
  const DIPLAYLEGEND = "true";
  result.forEach((outlet) => {
    let labels = [];
    // Y-Axis
    let chartData = [];
    outlet.details.forEach((detail) => {
      labels.push(detail.reason);
      chartData.push(detail.cancelled_count);
    });
    cardWithGraph.push({
      title: outlet.outlet_name,
      label1:"Cancellations",
      labels: labels,
      chartsData: chartData,
      backgroundColor: generateBackgroundColors(chartData.length),
      chartType: CHARTTYPE,
      displayLegend: DIPLAYLEGEND,
    });
  });

  return buildResponse({ chartCards: cardWithGraph });
};

module.exports.cdreport = async (data, token) => {
  const URL = BASE_URL + "/api/v1/reconciliation/bankdepositreport";
  const resp = await axios.post(URL, data, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  let result = resp.data.result;
  let cardWithGraph = [];
  const CHARTTYPE = "bar";
  const DIPLAYLEGEND = "true";
  result.forEach((outlet) => {
    let labels = [];
    // Y-Axis
    let chartData = [];
    // Intersection of X-Y axes.
    let chartIntersectData = [];
    outlet.details.forEach((detail) => {
      labels.push(detail.aggregator);
      chartData.push(detail.deposited_amount);
      chartIntersectData.push(detail.total_amount);
    });
    cardWithGraph.push({
      title: outlet.outlet_name,
      label1:"Deposited",
      label2:"Amt",
      labels: labels,
      chartsData: chartData,
      chartsIntersectData: chartIntersectData,
      backgroundColor: generateBackgroundColors(chartData.length),
      chartType: CHARTTYPE,
      displayLegend: DIPLAYLEGEND,
    });
  });

  return buildResponse({ chartCards: cardWithGraph });
};

module.exports.edcreport = async (data, token) => {
  const URL = BASE_URL + "/api/v1/reconciliation/edcreport";
  const resp = await axios.post(URL, data, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  let result = resp.data.result;
  let cardWithGraph = [];
  const CHARTTYPE = "bar";
  const DIPLAYLEGEND = "true";
  result.forEach((outlet) => {
    let labels = [];
    // Y-Axis
    let chartData = [];
    // Intersection of X-Y axes.
    let chartIntersectData = [];
    outlet.details.forEach((detail) => {
      labels.push(detail.aggregator);
      chartData.push(detail.sales);
      chartIntersectData.push(detail.amount_credited);
    });
    cardWithGraph.push({
      title: outlet.outlet_name,
      label1:"Amt",
      label2:"AmtCredited",
      labels: labels,
      chartsData: chartData,
      chartsIntersectData: chartIntersectData,
      backgroundColor: generateBackgroundColors(chartData.length),
      chartType: CHARTTYPE,
      displayLegend: DIPLAYLEGEND,
    });
  });

  return buildResponse({ chartCards: cardWithGraph });
};

module.exports.expensetab = async (data, token) => {
  const URL = BASE_URL + "/api/v1/reconciliation/expensetab";
  const resp = await axios.post(URL, data, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  let result = resp.data.result;
  let cardWithGraph = [];
  const CHARTTYPE = "bar";
  const DIPLAYLEGEND = "true";
  result.forEach((outlet) => {
    let labels = [];
    // Y-Axis
    let chartData = [];
    // Intersection of X-Y axes.
    let chartIntersectData = [];
    outlet.details.forEach((detail) => {
      labels.push(detail.aggregator);
      chartData.push(detail.sales);
      chartIntersectData.push(detail.amount_credited);
    });
    cardWithGraph.push({
      title: outlet.outlet_name,
      label1:"Sales",
      label2:"AmtCredited",
      labels: labels,
      chartsData: chartData,
      chartsIntersectData: chartIntersectData,
      backgroundColor: generateBackgroundColors(chartData.length),
      chartType: CHARTTYPE,
      displayLegend: DIPLAYLEGEND,
    });
  });

  return buildResponse({ chartCards: cardWithGraph });
};

module.exports.pendingpayouts = async (data, token) => {
  const URL = BASE_URL + "/api/v1/reconciliation/pendingpayouts";
  const resp = await axios.post(URL, data, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  let result = resp.data.result;
  let cardWithGraph = [];
  const CHARTTYPE = "bar";
  const DIPLAYLEGEND = "true";
  result.forEach((outlet) => {
    let labels = [];
    // Y-Axis
    let chartData = [];
    // Intersection of X-Y axes.
    let chartIntersectData = [];
    outlet.details.forEach((detail) => {
      labels.push(detail.aggregator);
      chartData.push(detail.pending_amount);
      chartIntersectData.push(detail.total_amount);
    });
    cardWithGraph.push({
      title: outlet.outlet_name,
      label1:"PendingAmt",
      label2:"Amt",
      labels: labels,
      chartsData: chartData,
      chartsIntersectData: chartIntersectData,
      backgroundColor: generateBackgroundColors(chartData.length),
      chartType: CHARTTYPE,
      displayLegend: DIPLAYLEGEND,
    });
  });

  return buildResponse({ chartCards: cardWithGraph });
};
