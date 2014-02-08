function Game(scene, cameraManager, renderer, windowManager) {
	this.gameObjects = [];
	this.scene = scene;
	this.camera = cameraManager.getNewCamera(75, 0.1, 1000);
	this.renderer = renderer;
	this.renderer.setSize(windowManager.getWidth(), windowManager.getHeight());
}

Game.$inject = ['scene', 'cameraManager', 'renderer', 'windowManager'];

Game.prototype.kickOff = function() {
	this.camera.position.z = 5;
	document.body.appendChild(this.renderer.domElement);
};

Game.prototype.addGameObject = function(gameObject) {
	this.gameObjects.push(gameObject);
};

Game.prototype.setupScene = function() {
	var scene = this.scene;
	this.gameObjects.forEach(function(gameObject) {
		scene.add(gameObject.getMesh());
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
	var self = this;
	self.nextTick.apply(self);
};

module.exports = Game;