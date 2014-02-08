var GameObject = require('./GameObject');

function PlaneGameObject(THREE) {
	var numVertices = 40;
	var geometry = new THREE.PlaneGeometry(800, 800, numVertices, numVertices);
	drunkardsWalk(geometry.vertices, numVertices, numVertices, 50000);
	geometry.computeFaceNormals();
	geometry.computeVertexNormals();

	var material = new THREE.MeshLambertMaterial({ color: 0x005500 });
	this.mesh = new THREE.Mesh(geometry, material);

	this.mesh.rotation.x = -90 * Math.PI / 180;

//	var objectPositionMatrix = new THREE.Matrix4();
//	objectPositionMatrix.makeRotationAxis(new THREE.Vector3(1, 0, 0).normalize(), Math.PI / 200);
//
//	this.mesh.matrix.multiply(objectPositionMatrix);
//	this.mesh.rotation.setEulerFromRotationMatrix(this.mesh.matrix);
}

function getNextDrunkenDirection(direction) {
	if (Math.random() > 0.9) {
		direction = Math.floor(Math.random() * 20);
	}
	return direction;
}

function getNextDrunkenPosition(vertex, width, height, direction) {
	var lastArrayIndex = (width * height) - 1;

	// arbitrarily weighted direction decisions
	if (direction > 15) {
		// up one
		if (++vertex > lastArrayIndex) {
			vertex = 0;
		}
	}
	else if (direction > 10) {
		// down one
		if (--vertex < 0) {
			vertex = lastArrayIndex;
		}
	}
	else if (direction > 6) {
		// left one
		vertex = vertex + width;
		if (++vertex > lastArrayIndex) {
			vertex = vertex - lastArrayIndex;
		}
	}
	else if (direction > 2) {
		//right one
		vertex = vertex - width;
		if (++vertex < 0) {
			vertex = lastArrayIndex +  vertex;
		}
	}
	else if (direction > 0) {
		// pick a completely new area
		vertex = Math.floor(Math.random() * width * height);
	}

	return vertex;
}

function drunkardsWalk(vertices, width, height, iterations) {
	var vertex = Math.floor(vertices.length / 2);
	var direction = 0;

	while (--iterations > 0) {
		if (vertices[vertex].z < 20) {
			var adjustment = Math.random() * 7;

			vertices[vertex].z += adjustment;

			if (vertices[vertex + width]) {
				vertices[vertex + width].z = adjustment * 0.8;
			}
			if (vertices[vertex - width]) {
				vertices[vertex - width].z = adjustment * 0.8;
			}
			if (vertices[vertex-1]) {
				vertices[vertex-1].z = adjustment * 0.8;
			}
			if (vertices[vertex+1]) {
				vertices[vertex+1].z = adjustment * 0.8;
			}
		}

		direction = getNextDrunkenDirection(direction);
		vertex = getNextDrunkenPosition(vertex, width, height, direction);
	}
}

PlaneGameObject.$inject = ['THREE'];

PlaneGameObject.prototype = Object.create(GameObject);

PlaneGameObject.prototype.update = function() {
};

PlaneGameObject.prototype.getSceneObject = function() {
	return this.mesh;
};

module.exports = PlaneGameObject;