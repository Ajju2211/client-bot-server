const { buildResponse } = require("../utils/make-response");
module.exports = {
  "greetings.welcome": () =>
    buildResponse({
      text: "Welcome to the Bot",
      buttons: [
        {
          title: "Sales",
          payload: "sales menu",
        },
      ],
    }),
  "greetings.bye": () =>
    buildResponse({
      text: "Thanks for visiting us",
    }),
  "main.sales": () =>
    buildResponse({
      text: "Select the sales types.",
      buttons: [
        {
          title: "Consolidated Sales",
          payload: "main.sales.consolidated",
        },
        {
          title: "Top Items",
          payload: "top items in sales",
        },
        {
          title: "Top categories",
          payload: "top categories in sales",
        },
        {
          title: "Top OrderTypes",
          payload: "top order types in sales",
        },
      ],
    }),
  "main.sales.consolidated": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Today",
          payload: "main.sales.consolidated.today",
        },
        {
          title: "Yesterday",
          payload: "main.sales.consolidated.yesterday",
        },
        {
          title: "LastWeek",
          payload: "main.sales.consolidated.lastweek",
        },
        {
          title: "LastMonth",
          payload: "main.sales.consolidated.lastmonth",
        },
      ],
    }),
  "main.sales.topitems": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Today",
          payload: "today topitems sales",
        },
        {
          title: "Yesterday",
          payload: "yesterday topitems sales",
        },
        {
          title: "LastWeek",
          payload: "last week topitems sales",
        },
        {
          title: "LastMonth",
          payload: "last month topitems sales",
        },
      ],
    }),
  "main.sales.topcategories": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Today",
          payload: "today topcategories sales",
        },
        {
          title: "Yesterday",
          payload: "yesterday topcategories sales",
        },
        {
          title: "LastWeek",
          payload: "last week topcategories sales",
        },
        {
          title: "LastMonth",
          payload: "last month topcategories sales",
        },
      ],
    }),
  "main.sales.topordertypes": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Today",
          payload: "today top ordertypes sales",
        },
        {
          title: "Yesterday",
          payload: "yesterday top ordertypes sales",
        },
        {
          title: "LastWeek",
          payload: "last week top ordertypes sales",
        },
        {
          title: "LastMonth",
          payload: "last month top ordertypes sales",
        },
      ],
    }),
  "main.sales.toppaymentmode": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Today",
          payload: "today top paymentmode sales",
        },
        {
          title: "Yesterday",
          payload: "yesterday top paymentmode sales",
        },
        {
          title: "LastWeek",
          payload: "last week top paymentmode sales",
        },
        {
          title: "LastMonth",
          payload: "last month top paymentmode sales",
        },
      ],
    }),
};
