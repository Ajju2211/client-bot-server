const { buildResponse } = require("../utils/make-response");
module.exports = {
  "greetings.welcome": () =>
    buildResponse({
      text: "Welcome to the Bot",
      buttons: [
        {
          title: "Sales",
          payload: "/main.sales",
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
          payload: "/main.sales.consolidated",
        },
        {
          title: "Top Items",
          payload: "/main.sales.topitems",
        },
        {
          title: "Top categories",
          payload: "/main.sales.topcategories",
        },
        {
          title: "Top OrderTypes",
          payload: "/main.sales.topordertypes",
        },
      ],
    }),
  "main.sales.consolidated": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Today",
          payload: "/main.sales.consolidated.today",
        },
        {
          title: "Yesterday",
          payload: "/main.sales.consolidated.yesterday",
        },
        {
          title: "LastWeek",
          payload: "/main.sales.consolidated.lastweek",
        },
        {
          title: "LastMonth",
          payload: "/main.sales.consolidated.lastmonth",
        },
      ],
    }),
  "main.sales.topitems": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Today",
          payload: "/main.sales.topitems.today",
        },
        {
          title: "Yesterday",
          payload: "/main.sales.topitems.yesterday",
        },
        {
          title: "LastWeek",
          payload: "/main.sales.topitems.lastweek",
        },
        {
          title: "LastMonth",
          payload: "/main.sales.topitems.lastmonth",
        },
      ],
    }),
  "main.sales.topcategories": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Today",
          payload: "/main.sales.topcategories.today",
        },
        {
          title: "Yesterday",
          payload: "/main.sales.topcategories.yesterday",
        },
        {
          title: "LastWeek",
          payload: "/main.sales.topcategories.lastweek",
        },
        {
          title: "LastMonth",
          payload: "/main.sales.topcategories.lastmonth",
        },
      ],
    }),
  "main.sales.topordertypes": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Today",
          payload: "/main.sales.topordertypes.today",
        },
        {
          title: "Yesterday",
          payload: "/main.sales.topordertypes.yesterday",
        },
        {
          title: "LastWeek",
          payload: "/main.sales.topordertypes.lastweek",
        },
        {
          title: "LastMonth",
          payload: "/main.sales.topordertypes.lastmonth",
        },
      ],
    }),
  "main.sales.toppaymentmode": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Today",
          payload: "/main.sales.toppaymentmode.today",
        },
        {
          title: "Yesterday",
          payload: "/main.sales.toppaymentmode.yesterday",
        },
        {
          title: "LastWeek",
          payload: "/main.sales.toppaymentmode.lastweek",
        },
        {
          title: "LastMonth",
          payload: "/main.sales.toppaymentmode.lastmonth",
        },
      ],
    }),
};
