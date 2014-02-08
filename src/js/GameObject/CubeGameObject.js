var GameObject = require('./GameObject');

function CubeGameObject(THREE) {
	var geometry = new THREE.CubeGeometry(1, 1, 1);
	var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
	this.mesh = new THREE.Mesh(geometry, material);
}
CubeGameObject.$inject = ['THREE'];

CubeGameObject.prototype = Object.create(GameObject);

CubeGameObject.prototype.update = function() {
	this.mesh.rotation.x += 0.1;
	this.mesh.rotation.y += 0.1;
};

CubeGameObject.prototype.getMesh = function() {
	return this.mesh;
};

module.exports = CubeGameObject;