//Create Gameboard
  //must have startline, Grid to move cars up, and finishline to determine winner

var player1Grid =[];
var player2Grid =[];

//Establish doc.ready function to listen for keypresses
$(document).ready(function(){

  // listen for keypress event on the document
  $(document).keypress(function(event){
    if(event.which === 102){
      player1Move();
      console.log("pressed: " + event.which);
    }
  })


});


    //Make the Cars move
      //cars move a grid space on button click (using jquery)
    function player1Move(){
          //Player1 move
            $('.player1').css('left', function( left ) {
              return left + 50;
            });
    }
    //Player2 move
    function player2Move(){
          //Player2 move
          $('.player2').css('left', function( left ) {
            return left + 50;
          });
    }
    //Check for winner
      //after each button click, check to see if Car value === finishline value in Grid array
        //if they do, display Winner message
