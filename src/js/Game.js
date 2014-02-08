function Game(THREE) {
	this.THREE = THREE;
	this.gameObjects = [];
	this.camera = null;
	this.scene = null;
	this.renderer = null;
}
Game.$inject = ['THREE'];

Game.prototype.kickOff = function() {
	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;

	this.scene = new this.THREE.Scene();

	this.camera = new this.THREE.PerspectiveCamera(75, windowWidth / windowHeight, 0.1, 1000);
	this.camera.position.z = 5;

	this.renderer = new this.THREE.WebGLRenderer();
	this.renderer.setSize(window.innerWidth, window.innerHeight);

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