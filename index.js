var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({},object,{[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value) {
  object[key] = value;
  return(object);
}

//deletes `key` from a clone of object and returns the new object (non-destructively)
function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object)
  delete newObj.key;
  return(newObj);
}

//returns object without the delete key/value pair
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return(object);
}
