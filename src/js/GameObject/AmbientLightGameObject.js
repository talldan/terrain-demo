var GameObject = require('./GameObject');

function AmbientLightGameObject(THREE) {
	this.AmbientLight = new THREE.AmbientLight(0x404040);
}

AmbientLightGameObject.$inject = ['THREE'];
AmbientLightGameObject.prototype = Object.create(GameObject);

AmbientLightGameObject.prototype.getSceneObject = function() {
	return this.AmbientLight;
};

module.exports = AmbientLightGameObject;