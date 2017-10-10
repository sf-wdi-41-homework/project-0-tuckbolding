//Create Gameboard (done in HTML)

//Establish doc.ready function to listen for keypresses
$(document).ready(function(){

  // listen for keypress event on the document
  $(document).keypress(function(event){
    // while(checkForWin1 === false && checkForWin2 === false){
      if(event.which === 102){
        player1Move();
        checkForWin1();
        console.log("pressed: " + event.which);
      }
      if(event.which === 106){
        player2Move();
        checkForWin2();
        console.log("pressed: " + event.which);
      }
      if(checkForWin1()){
        alert("Player1 Wins!")
      }
      if(checkForWin2()){
        alert("Player2 Wins!")
      }
    //}

  });

});


    //Make the Cars move
      //cars move a grid space on button click (using jquery)
    function player1Move(){
          //Player1 move
          console.log($('.player1').css('left', "+=20px") );
    }
    //Player2 move
    function player2Move(){
          //Player2 move
          console.log($('.player2').css('left', "+=20px") );
    }
    //Check for winner
      //after each button click, check to see if css property 'left'of player 1 img >= css property 'width' >= of dive 'row' that represents the lane
        //if they do, display Winner message
    //
    function checkForWin1(){

          if(parseInt($('.player1').css('left')) >= parseInt($('.row1').css('width'))){
          // if(document.getElementsByClassName('player1').left >= document.getElementsByClassName('row1').width){
            return true;
            alert($('.player1').css('left'));
            alert($('.row1').css('width'));
        } else {
            return false;
        }
    }

    function checkForWin2(){
          if(parseInt($('.player2').css('left')) >= parseInt($('.row2').css('width'))){
            return true;
            alert($('.player2').css('left'));
            alert($('.row2').css('width'));
        } else {
            return false;
        }
    }
