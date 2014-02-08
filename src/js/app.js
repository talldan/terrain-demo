var intravenous = require('intravenous');
var THREE = require('three');

var appContainer = intravenous.create();
appContainer.register('THREE', THREE, 'singleton');
appContainer.register('renderer', THREE.WebGLRenderer);
appContainer.register('scene', THREE.Scene);
appContainer.register('cameraManager', require('./Camera/CameraManager'), 'singleton');
appContainer.register('windowManager', require('./Window/WindowManager'), 'singleton');
appContainer.register('game', require('./Game'), 'singleton');
appContainer.register('cubeGameObject', require('./GameObject/CubeGameObject'));
appContainer.register('planeGameObject', require('./GameObject/PlaneGameObject'));
appContainer.register('ambientLightGameObject', require('./GameObject/AmbientLightGameObject'));
appContainer.register('pointLightGameObject', require('./GameObject/PointLightGameObject'));

var game = appContainer.get('game');
game.kickOff();
//game.addGameObject(appContainer.get('cubeGameObject'));
game.addGameObject(appContainer.get('pointLightGameObject'));
game.addGameObject(appContainer.get('ambientLightGameObject'));
game.addGameObject(appContainer.get('planeGameObject'));
game.setupScene();
game.beginLoop();