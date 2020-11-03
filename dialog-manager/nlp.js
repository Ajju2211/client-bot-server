const { NlpManager } = require('node-nlp');

 
const manager = new NlpManager({ languages: ['en'], forceNER: true });
// Adds the utterances and intents for the NLP
manager.addDocument('en', 'goodbye for now', 'greetings.bye');
manager.addDocument('en', 'bye bye take care', 'greetings.bye');
manager.addDocument('en', 'okay see you later', 'greetings.bye');
manager.addDocument('en', 'bye for now', 'greetings.bye');
manager.addDocument('en', 'i must go', 'greetings.bye');
manager.addDocument('en', 'hey', 'greetings.hello');
manager.addDocument('en', 'hi', 'greetings.hello');
manager.addDocument('en', 'howdy', 'greetings.hello');
 
// Train also the NLG
manager.addAnswer('en', 'greetings.bye', 'Till next time');
manager.addAnswer('en', 'greetings.bye', 'see you soon!');
// manager.addAnswer('en', 'greetings.hello', 'Hey there!');
// manager.addAnswer('en', 'greetings.hello', 'Greetings!');
manager.addAction('greetings.hello','greet',[0,1],fn=()=>{return JSON.stringify({"hi":1})});
manager.addAction('greetings.hello','greet',[0,1],fn=()=>{return JSON.stringify({"hi":1})});
// Train and save the model.
(async() => {
    await manager.train();
    manager.save();
    // const response = await manager.process('en', '/greetings.hello');
    // const response = await manager.findAllAnswers('en','greetings.hello');
    // console.log(await response.actions);
    console.log(JSON.stringify(response));
    
})();
