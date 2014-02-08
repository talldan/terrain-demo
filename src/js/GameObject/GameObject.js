var IGameObject = require('./IGameObject');

function GameObject() {}

GameObject.prototype = Object.create(IGameObject);

GameObject.update = function() {};

module.exports = GameObject;