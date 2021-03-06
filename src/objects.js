// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  const names = [];

  Object.keys(obj).forEach((key) => {
    names.push(key);
  });
  return names;
};

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  const newValues = [];

  Object.keys(obj).forEach((key) => {
    newValues.push(obj[key]);
  });
  return newValues;
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const transValue = {};
  Object.keys(obj).forEach((key) => {
    transValue[key] = cb(obj[key]);
  });
  return transValue;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const pairsArray = [];
  Object.keys(obj).forEach((key) => {
    pairsArray.push([key, obj[key]]);
  });
  return pairsArray;
};

/* Extra credit */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
};

/* eslint-enable no-unused-vars */

module.exports = {
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults,
};
