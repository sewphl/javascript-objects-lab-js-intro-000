var recipes = {};


/*
function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({object},key,value);
  return(object);
}
*/
/*
function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return(object);
}
*/

function destructivelyUpdateObjectWithKeyAndValue(key,value) {
  Object.assign({object},key,value);
  return(object);
}
