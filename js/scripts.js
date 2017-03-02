$(function(){


$("#form").submit(function(event){
  event.preventDefault();
  nameP1 = $("#player1").val();
  nameP2 = $("#player2").val();
});

var PlayerTurn="player1"

  var switchPlayer = function(){
    if (PlayerTurn==="player1"){
      PlayerTurn = "player2";
    }
    else{
      PlayerTurn = "player1";
    };
  }

//Places Mark depending ON PLAYER

//AFTER ANY SQUARE IS CLICKED, PLAYERTURN IS SWITCHED
  $("#a1").click(function(){
    if(PlayerTurn === "player1"){
      $(".a1").text("X");
    } else if (PlayerTurn === "player2"){
      $(".a1").text("O");
    };
    switchPlayer();
  });
  $("#a2").click(function(){
    if(PlayerTurn === "player1"){
      $(".a2").text("X");
    } else if (PlayerTurn === "player2"){
      $(".a2").text("O");
    };
    switchPlayer();
  });
  $("#a3").click(function(){
    if(PlayerTurn === "player1"){
      $(".a3").text("X");
    } else if (PlayerTurn === "player2"){
      $(".a3").text("O");
    };
    switchPlayer();
  });
  $("#b1").click(function(){
    if(PlayerTurn === "player1"){
      $(".b1").text("X");
    } else if (PlayerTurn === "player2"){
      $(".b1").text("O");
    };
    switchPlayer();
  });
  $("#b2").click(function(){
    if(PlayerTurn === "player1"){
      $(".b2").text("X");
    } else if (PlayerTurn === "player2"){
      $(".b2").text("O");
    };
    switchPlayer();
  });
  $("#b3").click(function(){
    if(PlayerTurn === "player1"){
      $(".b3").text("X");
    } else if (PlayerTurn === "player2"){
      $(".b3").text("O");
    };
    switchPlayer();
  });
  $("#c1").click(function(){
    if(PlayerTurn === "player1"){
      $(".c1").text("X");
    } else if (PlayerTurn === "player2"){
      $(".c1").text("O");
    };
    switchPlayer();
  });
  $("#c2").click(function(){
    if(PlayerTurn === "player1"){
      $(".c2").text("X");
    } else if (PlayerTurn === "player2"){
      $(".c2").text("O");
    };
    switchPlayer();
  });
  $("#c3").click(function(){
    if(PlayerTurn === "player1"){
      $(".c3").text("X");
    } else if (PlayerTurn === "player2"){
      $(".c3").text("O");
    };
    switchPlayer();
  });
});
