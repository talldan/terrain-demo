var GameObject = require('./GameObject');

function CubeGameObject(THREE) {
	var geometry = new THREE.CubeGeometry(50, 50, 50);
	var material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
	this.mesh = new THREE.Mesh(geometry, material);
}
CubeGameObject.$inject = ['THREE'];

CubeGameObject.prototype = Object.create(GameObject);

CubeGameObject.prototype.update = function() {
	this.mesh.rotation.x += 0.1;
	this.mesh.rotation.y += 0.1;
};

CubeGameObject.prototype.getSceneObject = function() {
	return this.mesh;
};

module.exports = CubeGameObject;