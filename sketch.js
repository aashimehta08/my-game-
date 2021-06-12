
var gameState = 0;
var playerCount = 0;
var form, player,game;
var hDistance = 0
var vDistance = 0; 
var database;
var player1, player2;
var players = [];
var allPlayers = [];
var swimmerImg;

function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getGameState();
  game.start();
}

function draw() {
  background(255,255,255);  
  

  if(playerCount==2){
    game.updateState(1);
  }

  if(gameState==1){
    clear();
    game.play();
  }
}