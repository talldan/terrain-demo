function WindowManager() {
	this.windowWidth = window.innerWidth;
	this.windowHeight = window.innerHeight;
}

WindowManager.prototype.getAspectRatio = function() {
	return this.windowWidth / this.windowHeight;
};

WindowManager.prototype.getWidth = function() {
	return this.windowWidth;
};

WindowManager.prototype.getHeight = function() {
	return this.windowHeight;
};

module.exports = WindowManager;