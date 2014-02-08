var intravenous = require('intravenous');
var THREE = require('three');

var appContainer = intravenous.create();
appContainer.register('THREE', THREE, 'singleton');
appContainer.register('Game', require('./Game'), 'singleton');
appContainer.register('CubeGameObject', require('./GameObject/CubeGameObject'));

var game = appContainer.get('Game');
game.kickOff();
game.addGameObject(appContainer.get('CubeGameObject'));
game.setupScene();
game.beginLoop();