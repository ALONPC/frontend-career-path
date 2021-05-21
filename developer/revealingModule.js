var namesCollection = (function () {
  // private members
  var objects = [];
  // public members, exposed with return statement
  return {
    addObject,
    objects,
  };

  // Public Method
  function addObject(object) {
    objects.push(object);
    _printMessage(object);
  }

  // Private Method - Prefixed with single underscore
  function _printMessage(object) {
    console.log("Object successfully added:", object);
  }
})();

const object = { name: "Alonso" };
namesCollection.addObject(object);
namesCollection;
namesCollection._printMessage(object);
