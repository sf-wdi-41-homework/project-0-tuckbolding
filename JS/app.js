//Create Gameboard
  //must have startline, Grid to move cars up, and finishline to determine winner
var Gameboard;

var player1Grid =[];
var player2Grid =[];
//Create Cars
  // 2 players have separate cars assigned to different buttons
var player1Img = "assets/red-racecar.png";
var player2Img = "assets/pink-racecar.png";


    function createBoard(){

    }

    //Start Game by putting cars on start line
    function startGame(){
      $('.row 1')
    }
    //Make the Cars move
      //cars move a grid space on button click (using jquery)
    function player1Move(){
          //Player1 move
            $('.row').keypress(){
              console.log("player 1 moved!");
          }
    }
    //Player2 move
    function player2Move(){
          //Player2 move
            if($('.row').keypress(){
              console.log("player 2 moved!");
          }
    }
    //Check for winner
      //after each button click, check to see if Car value === finishline value in Grid array
        //if they do, display Winner message
