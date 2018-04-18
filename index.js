var recipes = {};



function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({object},key,value);
  return(object);
}


function destructivelyUpdateObjectWithKeyAndValue(object,key,value) {
  object[key] = value;
  return(object);
}

//deletes `key` from a clone of object and returns the new object (non-destructively)
object (it is non-destructive)
function deleteFromObjectByKey(object, key) {
  var o2 = object;
  delete o2[key];
  return(o2);
}
