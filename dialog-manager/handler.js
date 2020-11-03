const responses = require("../dialog-manager/responses");
const actions =  require("../dialog-manager/actions");
module.exports.handleIntents = async (userObj, intent) => {
    try{
        if(actions[intent]){
            return await actions[intent](userObj);
        }
        if(responses[intent]){
            return await responses[intent](userObj);
        }
        return [];
    }
    catch(err){
        console.error('ERROR DURING RESPONDING TO INTENT');
        console.error(err);
        return [];
    }

};