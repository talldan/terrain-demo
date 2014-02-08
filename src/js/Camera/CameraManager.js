function CameraManager(THREE, windowManager) {
	this.THREE = THREE;
	this.windowManager = windowManager;
}

CameraManager.$inject = ['THREE', 'windowManager'];

CameraManager.prototype.getNewCamera = function(fieldOfView, near, far) {
	var aspectRatio = this.windowManager.getAspectRatio();
	return new this.THREE.PerspectiveCamera(fieldOfView, aspectRatio, near, far);
};

module.exports = CameraManager;