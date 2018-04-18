var recipes = {};

updateObjectWithKeyAndValue(object, key, value) {
  object[key] = [value];
  return(object);
}
