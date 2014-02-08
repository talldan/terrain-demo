var GameObject = require('./GameObject');

function DirectionalLightGameObject(THREE) {
	this.DirectionalLight = new THREE.DirectionalLight(0xffffff, 0.3);
	this.DirectionalLight.position.set(0, 0.2, 0.9).normalize();
}

DirectionalLightGameObject.$inject = ['THREE'];
DirectionalLightGameObject.prototype = Object.create(GameObject);

DirectionalLightGameObject.prototype.getSceneObject = function() {
	return this.DirectionalLight;
};

module.exports = DirectionalLightGameObject;