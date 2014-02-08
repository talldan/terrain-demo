var GameObject = require('./GameObject');

function PointLightGameObject(THREE) {
	this.PointLight = new THREE.PointLight(0xFFFFFF);
	this.PointLight.position.x = 10;
	this.PointLight.position.y = 50;
	this.PointLight.position.z = 120;
}

PointLightGameObject.$inject = ['THREE'];
PointLightGameObject.prototype = Object.create(GameObject);

PointLightGameObject.prototype.getSceneObject = function() {
	return this.PointLight;
};

module.exports = PointLightGameObject;