//Create Gameboard (done in HTML)

//Establish doc.ready function to listen for keypresses
$(document).ready(function(){

  // listen for keypress event on the document
  $(document).keypress(function(event){
    // while(1){
      if(event.which === 102){
        player1Move();
        console.log("pressed: " + event.which);
      }
      if(event.which === 106){
        player2Move();
        console.log("pressed: " + event.which);
      }
    })

  // }

});


    //Make the Cars move
      //cars move a grid space on button click (using jquery)
    function player1Move(){
          //Player1 move
          console.log($('.player1').css('left', "+=50px") );
    }
    //Player2 move
    function player2Move(){
          //Player2 move
          console.log($('.player2').css('left', "+=50px") );
    }
    //Check for winner
      //after each button click, check to see if Car value === finishline value in Grid array
        //if they do, display Winner message
