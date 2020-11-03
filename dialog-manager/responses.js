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
  "main.menu.sales": () =>
    buildResponse({
      text: "Select the sales types.",
      buttons: [
        {
          title: "Consolidated Sales",
          payload: "consolidated sales",
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
  "main.menu.sales.consolidatedsales": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Today",
          payload: "today consolidated sales",
        },
        {
          title: "Yesterday",
          payload: "yesterday consolidated sales",
        },
        {
          title: "LastWeek",
          payload: "last week consolidated sales",
        },
        {
          title: "LastMonth",
          payload: "last month consolidated sales",
        },
      ],
    }),
  "main.menu.sales.topitems": () =>
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
  "main.menu.sales.topcategories": () =>
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
  "main.menu.sales.topordertypes": () =>
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
  "main.menu.sales.toppaymentmode": () =>
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
