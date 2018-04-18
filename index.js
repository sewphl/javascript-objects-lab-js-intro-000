var recipes = {};



function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({object},{[key]:value});
  //return(object);
}


function destructivelyUpdateObjectWithKeyAndValue(object,key,value) {
  object[key] = value;
  return(object);
}

//deletes `key` from a clone of object and returns the new object (non-destructively)
function deleteFromObjectByKey(object, key) {
  var o2 = object;
  delete o2[key];
  return(o2);
}

//returns object without the delete key/value pair
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return(object);
}
