class Game {
    constructor(){} 
    
    getGameState(){
      database.ref('gameState').on('value',function(data){
          gameState = data.val();
      })
    }

    updateState(gameState){
      database.ref('/').update({
          gameState : gameState
      })
    }
    
    
    start(){
      if(gameState==0){
       form = new Form();
       form.display();
       player = new Player();
       player.getCount();
      }  
      player1 = createSprite(displayWidth/5-200,300);
      player2 = createSprite(displayWidth/5-200,450);
      players = [player1,player2];
    }
    
    play(){
      form.hide();
     Player.getPlayersInfo();
     if(allPlayers != undefined){
      // background(0);
       var index = 0;
       var x;
       var y;
       for(var plr in allPlayers){
        
         index += 1
         y = displayHeight- allPlayers[plr].yDistance;
         x = displayWidth -allPlayers[plr].distance;
         players[index-1].x = x;
         players[index-1].y = y;

         if(index == player.index){
           players[index-1].shapeColor = "red";
          camera.position.x =  players[index-1].x;
          camera.position.y = players[index-1].y;


        }
        

         
       }

       if(keyIsDown(RIGHT_ARROW)&& player.index != null){
         player.distance -= 20;
         player.update();
       }
       
       if(keyIsDown(UP_ARROW)&& player.index != null){
        player.yDistance +=10;
        player.update();
      }

      if(keyIsDown(DOWN_ARROW)&& player.index != null){
        player.yDistance -= 10;
        player.update();
      }
      
       
     }
     drawSprites();
     
    }


}