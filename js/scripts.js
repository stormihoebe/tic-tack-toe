$(function(){

  var player1;
  var player2;

$("#form").submit(function(event){
  event.preventDefault();
  nameP1 = $("#player1").val();
  nameP2 = $("#player2").val();

  player1 = new Player(nameP1, player1places);
  player2 = new Player(nameP2, player2places);

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
        player1places.push("A1");
        checkWinner();
    } else if (PlayerTurn === "player2"){
      $(".a1").text("O");
        player2places.push("A1");
        checkWinner();

    };
    switchPlayer();
  });
  $("#a2").click(function(){
    if(PlayerTurn === "player1"){
      $(".a2").text("X");
      player1places.push("A2");
      checkWinner();

    } else if (PlayerTurn === "player2"){
      $(".a2").text("O");
      player2places.push("A2");
      checkWinner();

    };
    switchPlayer();
  });
  $("#a3").click(function(){
    if(PlayerTurn === "player1"){
      $(".a3").text("X");
      player1places.push("A3");
      checkWinner();

    } else if (PlayerTurn === "player2"){
      $(".a3").text("O");
      player2places.push("A3");
      checkWinner();

    };
    switchPlayer();
  });
  $("#b1").click(function(){
    if(PlayerTurn === "player1"){
      $(".b1").text("X");
      player1places.push("B1");
      checkWinner();

    } else if (PlayerTurn === "player2"){
      $(".b1").text("O");
      player2places.push("B1");
      checkWinner();

    };
    switchPlayer();
  });
  $("#b2").click(function(){
    if(PlayerTurn === "player1"){
      $(".b2").text("X");
        player1places.push("B2");
    } else if (PlayerTurn === "player2"){
      $(".b2").text("O");
        player2places.push("B2");
    };
    checkWinner();

    switchPlayer();
  });
  $("#b3").click(function(){
    if(PlayerTurn === "player1"){
      $(".b3").text("X");
        player1places.push("B3");
    } else if (PlayerTurn === "player2"){
      $(".b3").text("O");
        player2places.push("B3");
    };
    checkWinner();

    switchPlayer();
  });
  $("#c1").click(function(){
    if(PlayerTurn === "player1"){
      $(".c1").text("X");
      player1places.push("C1");
    } else if (PlayerTurn === "player2"){
      $(".c1").text("O");
      player2places.push("C1");
    };
    checkWinner();

    switchPlayer();
  });
  $("#c2").click(function(){
    if(PlayerTurn === "player1"){
      $(".c2").text("X");
      player1places.push("C2");
    } else if (PlayerTurn === "player2"){
      $(".c2").text("O");
      player2places.push("C2");
    };
    checkWinner();

    switchPlayer();
  });
  $("#c3").click(function(){
    if(PlayerTurn === "player1"){
      $(".c3").text("X");
      player1places.push("C3");
    } else if (PlayerTurn === "player2"){
      $(".c3").text("O");
      player2places.push("C3");
    };
    checkWinner();

    switchPlayer();
    console.log(player1.spaces);
  });

});

var player1places=[];
var player2places=[];


function Player(name, places){
  this.playerName = name;
  this.spaces = places;
};
var checkWinner = function(){};
// var checkWinner = function(){
//   player1places = player1.spaces;
//   player2places = player2.spaces;
//   if (player1places.indexOf("A1")) {
//     alert("WINNER!!!")
//   // } else if (player2places.includes(("A1" && "A2" && "A3") || ("A1" && "A2" && "A3") || ("C1" && "C2" && "C3"))) {
//   //   alert("WINNER!!!")
//   };
