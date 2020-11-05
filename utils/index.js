module.exports.requireAll = (dirPath) => {
  const modules = require('require-dir-all')("../"+dirPath);
  let targetModule = {};
  let keys = Object.keys(modules);
  for(let i=0;i<keys.length;i++){
      Object.assign(targetModule, modules[keys[i]]);
  }
  return targetModule;
};



module.exports.renameKeys = (keysMap, obj) => {
    /**
     * Takes oldkeys,newkeys keyvalue pairs as keysMap,obj
     * to be changed
     */
  return Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] },
    }),
    {}
  );
};
/*
usage example
oldKey:NewKey in keysMap
keysMap = {
    name: 'firstName',
    job: 'passion'
  };
  
  obj = {
    name: 'AZHAR',
    job: 'DEV'
  };
*/

module.exports.generateBackgroundColors = (numOfColors) => {
  // const COLORS = [
  //   "#003f5c,
  // "#2f4b7c",
  // "#665191",
  // "#a5d6a7",
  // "#a05195",
  // "#d45087",
  // "#f95d6a",
  // "#ff7c43",
  // "#81d4fa",
  // "#ffa600",
  // ];
};