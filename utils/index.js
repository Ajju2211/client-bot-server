

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