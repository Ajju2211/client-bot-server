
const { NlpManager } = require('node-nlp');

const { buildResponse } = require("../utils/make-response");
const { handleIntent } = require("../dialog-manager/handler");
const manager = new NlpManager({ languages: ['en'],useNoneFeature:false ,forceNER: true });
(async()=>{
    await manager.load('./model.nlp')
})();
module.exports.trainNlp = async ()=>{
    // greetings.welcome
    manager.addDocument('en', 'hi', 'greetings.welcome');
    manager.addDocument('en', 'hello', 'greetings.welcome');
    manager.addDocument('en', 'hi buddy', 'greetings.welcome');
    manager.addDocument('en', 'hey there', 'greetings.welcome');
    manager.addDocument('en', 'good morning', 'greetings.welcome');
    manager.addDocument('en', 'good afternoon', 'greetings.welcome');
    manager.addDocument('en', 'good evening', 'greetings.welcome');
    manager.addDocument('en', 'hello buddy', 'greetings.welcome');
    manager.addDocument('en', 'hi buddy', 'greetings.welcome');
    manager.addDocument('en', 'hey', 'greetings.welcome');
    manager.addDocument('en', 'howdy', 'greetings.welcome');

    // greetings.bye
    manager.addDocument('en', 'bye', 'greetings.bye');
    manager.addDocument('en', 'see you', 'greetings.bye');
    manager.addDocument('en', 'okay see you bye', 'greetings.bye');
    manager.addDocument('en', 'good bye', 'greetings.bye');
    manager.addDocument('en', 'i am leaving', 'greetings.bye');
    manager.addDocument('en', 'i am tired', 'greetings.bye');
    manager.addDocument('en', 'talk later', 'greetings.bye');
    manager.addDocument('en', 'chat later', 'greetings.bye');
    manager.addDocument('en', 'i am busy', 'greetings.bye');
    manager.addDocument('en', 'nice talking with you', 'greetings.bye');
     
    // main.menu
    manager.addDocument('en', 'show me the main menu', 'main.menu');
    manager.addDocument('en', 'show me the main questions', 'main.menu');
    manager.addDocument('en', 'i want to see the main menu', 'main.menu');
    manager.addDocument('en', 'i have some questions', 'main.menu');
    manager.addDocument('en', 'go to home menu', 'main.menu');
    manager.addDocument('en', 'home menu', 'main.menu');

    // main.menu.sales
    manager.addDocument('en', 'sales menu', 'main.menu.sales');
    manager.addDocument('en', 'show me the sales menu', 'main.menu.sales');
    manager.addDocument('en', 'show me the sales', 'main.menu.sales');
    manager.addDocument('en', 'I want to see the sales', 'main.menu.sales');
    manager.addDocument('en', 'go to sales', 'main.menu.sales');


    // main.menu.sales.consolidatedsales
    manager.addDocument('en', 'consolidated sales', 'main.menu.sales.consolidatedsales');
    manager.addDocument('en', 'consolidated items in sales', 'main.menu.sales.consolidatedsales');
    manager.addDocument('en', 'i want to see the consolidated sales', 'main.menu.sales.consolidatedsales');
    manager.addDocument('en', 'show me the consolidated sales', 'main.menu.sales.consolidatedsales');
    manager.addDocument('en', 'show me the sales which are consolidated', 'main.menu.sales.consolidatedsales');
    manager.addDocument('en', 'get the consolidated sales', 'main.menu.sales.consolidatedsales');

        // main.sales.consolidatedsales.lastmonth
        manager.addDocument('en', 'last month consolidated sales', 'main.menu.sales.consolidatedsales.lastmonth');
        manager.addDocument('en', 'i want to see the last month consolidated sales', 'main.menu.sales.consolidatedsales.lastmonth');
        manager.addDocument('en', 'show me the last month consolidated sales', 'main.menu.sales.consolidatedsales.lastmonth');

        // main.sales.consolidatedsales.lastweek
        manager.addDocument('en', 'last week consolidated sales', 'main.menu.sales.consolidatedsales.lastweek');
        manager.addDocument('en', 'i want to see the last week consolidated sales', 'main.menu.sales.consolidatedsales.lastweek');
        manager.addDocument('en', 'show me the last week consolidated sales', 'main.menu.sales.consolidatedsales.lastweek');
        
        // main.sales.consolidatedsales.today
        manager.addDocument('en', 'today consolidated sales', 'main.menu.sales.consolidatedsales.today');
        manager.addDocument('en', 'i want to see today consolidated sales', 'main.menu.sales.consolidatedsales.today');
        manager.addDocument('en', 'show me today consolidated sales', 'main.menu.sales.consolidatedsales.today');

        // main.sales.consolidatedsales.yesterday
        manager.addDocument('en', 'yesterday consolidated sales', 'main.menu.sales.consolidatedsales.yesterday');
        manager.addDocument('en', 'i want to see yesterday consolidated sales', 'main.menu.sales.consolidatedsales.yesterday');
        manager.addDocument('en', 'show me yesterday consolidated sales', 'main.menu.sales.consolidatedsales.yesterday');
    // main.sales.topitems
    manager.addDocument('en', 'top items sales', 'main.menu.sales.topitems');
    manager.addDocument('en', 'top sales items', 'main.menu.sales.topitems');
    manager.addDocument('en', 'show me the top items in the sales', 'main.menu.sales.topitems');
    manager.addDocument('en', 'i want to see the top items of sales', 'main.menu.sales.topitems');
    manager.addDocument('en', 'best items in the sales', 'main.menu.sales.topitems');
    manager.addDocument('en', 'best products in sales', 'main.menu.sales.topitems');

        // main.sales.topitems.today
        manager.addDocument('en', 'today topitems sales', 'main.menu.sales.topitems.today');
        manager.addDocument('en', 'i want to see today top items sales', 'main.menu.sales.topitems.today');
        manager.addDocument('en', 'show me today top items sales', 'main.menu.sales.topitems.today');

        // main.sales.topitems.lastmonth
        manager.addDocument('en', 'last month topitems sales', 'main.menu.sales.topitems.lastmonth');
        manager.addDocument('en', 'i want to see the last month top items sales', 'main.menu.sales.topitems.lastmonth');
        manager.addDocument('en', 'show me the last month top items sales', 'main.menu.sales.topitems.lastmonth');

        // main.sales.topitems.lastweek
        manager.addDocument('en', 'last week topitems sales', 'main.menu.sales.topitems.lastweek');
        manager.addDocument('en', 'i want to see the last week top items sales', 'main.menu.sales.topitems.lastweek');
        manager.addDocument('en', 'show me the last week top items sales', 'main.menu.sales.topitems.lastweek');
        

        // main.sales.topitems.yesterday
        manager.addDocument('en', 'yesterday topitems sales', 'main.menu.sales.topitems.yesterday');
        manager.addDocument('en', 'i want to see yesterday topitems sales', 'main.menu.sales.topitems.yesterday');
        manager.addDocument('en', 'show me yesterday topitems sales', 'main.menu.sales.topitems.yesterday');
    // main.sales.topcategories
    manager.addDocument('en', 'top categories in sales', 'main.menu.sales.topcategories');
    manager.addDocument('en', 'top sales categories', 'main.menu.sales.topcategories');
    manager.addDocument('en', 'show me the top categories in the sales', 'main.menu.sales.topcategories');
    manager.addDocument('en', 'i want to see the top category of sales', 'main.menu.sales.topcategories');
    manager.addDocument('en', 'best categories in the sales', 'main.menu.sales.topcategories');

        // main.sales.topcategories.today
        manager.addDocument('en', 'today topcategories sales', 'main.menu.sales.topcategories.today');
        manager.addDocument('en', 'i want to see today top categories sales', 'main.menu.sales.topcategories.today');
        manager.addDocument('en', 'show me today top categories sales', 'main.menu.sales.topcategories.today');

        // main.sales.topcategories.lastmonth
        manager.addDocument('en', 'last month topcategories sales', 'main.menu.sales.topcategories.lastmonth');
        manager.addDocument('en', 'i want to see the last month top categories sales', 'main.menu.sales.topcategories.lastmonth');
        manager.addDocument('en', 'show me the last month top categories sales', 'main.menu.sales.topcategories.lastmonth');

        // main.sales.topcategories.lastweek
        manager.addDocument('en', 'last week topcategories sales', 'main.menu.sales.topcategories.lastweek');
        manager.addDocument('en', 'i want to see the last week top categories sales', 'main.menu.sales.topcategories.lastweek');
        manager.addDocument('en', 'show me the last week top categories sales', 'main.menu.sales.topcategories.lastweek');
        

        // main.sales.topcategories.yesterday
        manager.addDocument('en', 'yesterday topcategories sales', 'main.menu.sales.topcategories.yesterday');
        manager.addDocument('en', 'i want to see yesterday topcategories sales', 'main.menu.sales.topcategories.yesterday');
        manager.addDocument('en', 'show me yesterday topcategories sales', 'main.menu.sales.topcategories.yesterday');

    // main.sales.topordertypes
    manager.addDocument('en', 'top order types in sales', 'main.menu.sales.topordertypes');
    manager.addDocument('en', 'best order types in the sales', 'main.menu.sales.topordertypes');
    manager.addDocument('en', 'best sales ordertypes', 'main.menu.sales.topordertypes');
    manager.addDocument('en', 'top sales order types', 'main.menu.sales.topordertypes');
    manager.addDocument('en', 'i want to see the best order types', 'main.menu.sales.topordertypes');
    manager.addDocument('en', 'show me the top order types', 'main.menu.sales.topordertypes');
    manager.addDocument('en', 'get me the top order types from sales', 'main.menu.sales.topordertypes');

        // main.sales.topordertypes.today
        manager.addDocument('en', 'today top ordertypes sales', 'main.menu.sales.topordertypes.today');
        manager.addDocument('en', 'i want to see today top ordertypes sales', 'main.menu.sales.topordertypes.today');
        manager.addDocument('en', 'show me today top ordertypes sales', 'main.menu.sales.topordertypes.today');

        // main.sales.topordertypes.lastmonth
        manager.addDocument('en', 'last month top ordertypes sales', 'main.menu.sales.topordertypes.lastmonth');
        manager.addDocument('en', 'i want to see the last month top ordertypes sales', 'main.menu.sales.topordertypes.lastmonth');
        manager.addDocument('en', 'show me the last month top ordertypes sales', 'main.menu.sales.topordertypes.lastmonth');

        // main.sales.topordertypes.lastweek
        manager.addDocument('en', 'last week top ordertypes sales', 'main.menu.sales.topordertypes.lastweek');
        manager.addDocument('en', 'i want to see the last week top ordertypes sales', 'main.menu.sales.topordertypes.lastweek');
        manager.addDocument('en', 'show me the last week top ordertypes sales', 'main.menu.sales.topordertypes.lastweek');
        

        // main.sales.topordertypes.yesterday
        manager.addDocument('en', 'yesterday top ordertypes sales', 'main.menu.sales.topordertypes.yesterday');
        manager.addDocument('en', 'i want to see yesterday topordertypes sales', 'main.menu.sales.topordertypes.yesterday');
        manager.addDocument('en', 'show me yesterday topordertypes sales', 'main.menu.sales.topordertypes.yesterday');

    // main.sales.toppaymentmode
    manager.addDocument('en', 'show me the top payment modes', 'main.menu.sales.toppaymentmode');
    manager.addDocument('en', 'best payment mode across sales', 'main.menu.sales.toppaymentmode');
    manager.addDocument('en', 'top payment mode in sales', 'main.menu.sales.toppaymentmode');
    manager.addDocument('en', 'show me the top payment modes in sales', 'main.menu.sales.toppaymentmode');
    manager.addDocument('en', 'get the best payments in sales', 'main.menu.sales.toppaymentmode');

        // main.sales.toppaymentmode.today
        manager.addDocument('en', 'today top paymentmode sales', 'main.menu.sales.toppaymentmode.today');
        manager.addDocument('en', 'i want to see today top paymentmode sales', 'main.menu.sales.toppaymentmode.today');
        manager.addDocument('en', 'show me today top paymentmode sales', 'main.menu.sales.toppaymentmode.today');

        // main.sales.toppaymentmode.lastmonth
        manager.addDocument('en', 'last month top paymentmode sales', 'main.menu.sales.toppaymentmode.lastmonth');
        manager.addDocument('en', 'i want to see the last month top paymentmode sales', 'main.menu.sales.toppaymentmode.lastmonth');
        manager.addDocument('en', 'show me the last month top paymentmode sales', 'main.menu.sales.toppaymentmode.lastmonth');

        // main.sales.toppaymentmode.lastweek
        manager.addDocument('en', 'last week top paymentmode sales', 'main.menu.sales.toppaymentmode.lastweek');
        manager.addDocument('en', 'i want to see the last week top paymentmode sales', 'main.menu.sales.toppaymentmode.lastweek');
        manager.addDocument('en', 'show me the last week top paymentmode sales', 'main.menu.sales.toppaymentmode.lastweek');
        

        // main.sales.toppaymentmode.yesterday
        manager.addDocument('en', 'yesterday toppaymentmode sales', 'main.menu.sales.toppaymentmode.yesterday');
        manager.addDocument('en', 'i want to see yesterday toppaymentmode sales', 'main.menu.sales.toppaymentmode.yesterday');
        manager.addDocument('en', 'show me yesterday toppaymentmode sales', 'main.menu.sales.toppaymentmode.yesterday');

    

// Train also the NLG
    manager.addAnswer('en', 'greetings.welcome',responses['greetings.welcome']());
    manager.addAnswer('en', 'greetings.bye',responses['greetings.bye']());
    manager.addAnswer('en', 'main.menu.sales',responses['main.menu.sales']());
    manager.addAnswer('en', 'main.menu.sales.consolidatedsales',responses['main.menu.sales.consolidatedsales']());
    manager.addAnswer('en', 'main.menu.sales.topitems',responses['main.menu.sales.topitems']());
    manager.addAnswer('en', 'main.menu.sales.topcategories',responses['main.menu.sales.topcategories']());
    manager.addAnswer('en', 'main.menu.sales.topordertypes',responses['main.menu.sales.topordertypes']());
    manager.addAnswer('en', 'main.menu.sales.toppaymentmode',responses['main.menu.sales.toppaymentmode']());

    
    // Train and save the model.
        await manager.train();
        // saved as model.nlp
        manager.save();
        // const response = await manager.process('en', 'hi');
        // console.log(JSON.stringify(response));
    
}



module.exports.sendText = async (userObj, messageBody)=>{

    let message = messageBody.message;
    userObj.sender = messageBody.sender;
    console.log(message);
    if(message.startsWith('/')){
        let intent = message.toLowerCase().trim();
        return await handleIntent(userObj, intent);
    }

    // const resp = await manager.process("en", messageBody.message);
    // if(resp.actions.length > 0){
    //     try{
    //         const val = await actions[resp.actions[0].action](userObj);
    //         return val;
    //     }catch(err){
    //         console.error(err);
    //         return [];
    //     }
        
    // }
    // // If no action exists ,picks the default answer.
    // else{
    //     console.log(resp.answer);
    //     return resp.answer;
    // }

    
};




