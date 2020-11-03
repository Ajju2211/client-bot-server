const nlpMain = require("./dialog-manager/nlp-main");
(async ()=>{
    // Just uncomment to train the NLPManager
    // await nlpMain.trainNlp();
    console.log(await nlpMain.sendText({id:1},"bye"));
})();

