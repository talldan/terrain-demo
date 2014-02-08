function Game(scene, cameraManager, renderer, windowManager, THREE) {
	this.gameObjects = [];
	this.scene = scene;
	this.camera = cameraManager.getNewCamera(75, 0.1, 10000);
	this.camera.position.z = 300;
	this.camera.position.y = 20;
	this.camera.position.x = 300;
	this.camera.lookAt(new THREE.Vector3(0, -100, 0));
	this.renderer = renderer;
	this.renderer.setSize(windowManager.getWidth(), windowManager.getHeight());
}

Game.$inject = ['scene', 'cameraManager', 'renderer', 'windowManager', 'THREE'];
Game.prototype.kickOff = function() {
	document.body.appendChild(this.renderer.domElement);
};

Game.prototype.addGameObject = function(gameObject) {
	this.gameObjects.push(gameObject);
};

Game.prototype.setupScene = function() {
	var scene = this.scene;
	this.gameObjects.forEach(function(gameObject) {
		if (gameObject.getSceneObject) {
			scene.add(gameObject.getSceneObject());
		}
	});
};

Game.prototype.updateObjects = function() {
	this.gameObjects.forEach(function(gameObject) {
		gameObject.update();
	});
};

Game.prototype.nextTick = function() {
	var self = this;

	requestAnimationFrame(function() {
		self.nextTick.apply(self);
	});

	this.updateObjects();
	this.renderer.render(this.scene, this.camera);
};

Game.prototype.beginLoop = function() {
	this.nextTick();
};

module.exports = Game;