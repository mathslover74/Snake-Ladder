console.log("linked");

class Player {
  constructor(name) {
    this.name = name;
    this.player = true;
    this.location = 1;
    this.turn = true;
    this.gameStart = false;
    this.auto = false;
  }

  checkWin = (player) => {
    if (this.location >= 100) {
      console.log(`${this.name} wins!`);
      const $win = `Player ${name} win the game!`;
      $(".displayStatus").empty().append($win);
      $("#100").append($(player));
      alert(`Player ${this.name} wins!`);
      alert(`Please reset the game`);
    }
  };
}

//// make sq counting left to right
const mkSq = (row, num) => {
  const $sq = $("<div>").addClass("square").attr("id", `${num}`);
  const $num = $("<div>").addClass("num").text(`${num}`);
  // const $row =$('<div>').addClass(`row${row}`);
  $($sq).append($num);
  $(`.row${row}`).append($sq);
  // $('.gameBoard').append($row)
  // $(`.row2`).append($sq)
};

//// make sq counting right to left
const mkSq2 = (row, num) => {
  const $sq = $("<div>").addClass("square").attr("id", `${num}`);
  const $num = $("<div>").addClass("num").text(`${num}`);
  // const $row =$('<div>').addClass(`row${row}`);

  $($sq).append($num);
  $(`.row${row}`).append($sq);
  // $('.gameBoard').append($row).prepend($row)
  // $(`.row1`).append($sq)
};

///for odd row
const genRow1 = (row, num1, num) => {
  const $row = $("<div>").addClass(`row${row}`);
  $(".gameBoard").prepend($row);

  for (let i = num1; i <= num; i++) {
    mkSq(row, i);
  }
};

///for even row
const genRow2 = (row, num1, num) => {
  const $row = $("<div>").addClass(`row${row}`);
  $(".gameBoard").prepend($row);

  for (let i = num1; i <= num; i++) {
    mkSq2(row, i);
  }
};

///generate board

const genBoard = (size) => {
  for (let i = 1; i <= size; i++) {
    switch (i) {
      case 1:
        genRow1(1, 1, 10);
        break;
      case 2:
        genRow2(2, 11, 20);
        break;
      case 3:
        genRow1(3, 21, 30);
        break;
      case 4:
        genRow2(4, 31, 40);
        break;
      case 5:
        genRow1(5, 41, 50);
        break;
      case 6:
        genRow2(6, 51, 60);
        break;
      case 7:
        genRow1(7, 61, 70);
        break;
      case 8:
        genRow2(8, 71, 80);
        break;
      case 9:
        genRow1(9, 81, 90);
        break;
      case 10:
        genRow2(10, 91, 100);
        break;
    }
  }
};

const reset = () => {
  player1.location = 1;
  player2.location = 1;
  player1.turn = true;
  player2.turn = false;
  $("#1").append($(".x"));
  $("#1").append($(".xo"));
};
const player1 = new Player("1");
const player2 = new Player("2");

const game = () => {
  const $start = "Click Start Game to start";
  $(".displayStatus").empty().append($start);

  genBoard(10);
};

const genPlayer1Status = () => {
  const $player1 = $("<div>").addClass(`x`);
  $(`#${player1.location}`).append($player1);
  player1.gameStart = true;
  console.log(player1);
};

const genPlayer2Status = () => {
  const $player2 = $("<div>").addClass(`${"xo"}`);
  $(`#${player2.location}`).append($player2);
  player2.turn = false;
  player2.gameStart = true;
  console.log(player2);
};

const gameStart1 = () => {
  if (player1.gameStart === false) {
    $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon/25",
      type: "GET",
    }).then(
      (data) => {
        const $img = data.sprites.front_default;
        // $('.x').attr('src',$img);
        // $('.x').css('background-image',`${$img}`);
        // $('body').css('background-image',`url('${$img}')`);
        $(".x").css("background-image", `url('${$img}')`).addClass("pika");
        console.log(data.sprites.front_default);
      },
      () => {
        console.log("bad request");
      }
    );

    $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon/133",
      type: "GET",
    }).then(
      (data) => {
        const $img = data.sprites.front_default;
        // $('.x').attr('src',$img);
        // $('.x').css('background-image',`${$img}`);
        // $('body').css('background-image',`url('${$img}')`);
        $(".xo").css("background-image", `url('${$img}')`).addClass("eevee");
        console.log(data.sprites.front_default);
      },
      () => {
        console.log("bad request");
      }
    );

    const $start = "Player 1 (Pikachu) please start rolling the dice";
    $(".displayStatus").empty().append($start);
    genPlayer1Status();
    player1.gameStart = true;
    genPlayer2Status();
    // if (auto === true) {
    //   player2.auto = true;
    // } else {
    //   player2.auto = false;
    //
  }
};

const gameStart2 = () => {
  genPlayer1Status();
  genPlayer2Status();
  // player2.auto = true;
  // if (auto === true) {
  //   player2.auto = true;
  // } else {
  //   player2.auto = false;
  //
};
const dice = (num) => {
  switch (num) {
    case 1:
      $(".dicePic")
        .attr("src", "http://roll.diceapi.com/images/poorly-drawn/d6/4.png")
        .css("visibility", "visible");
      break;

    case 2:
      $(".dicePic")
        .attr("src", "http://roll.diceapi.com/images/poorly-drawn/d6/2.png")
        .css("visibility", "visible");
      break;

    case 3:
      $(".dicePic")
        .attr("src", "http://roll.diceapi.com/images/poorly-drawn/d6/3.png")
        .css("visibility", "visible");
      break;

    case 4:
      $(".dicePic")
        .attr("src", "http://roll.diceapi.com/images/poorly-drawn/d6/4.png")
        .css("visibility", "visible");
      break;

    case 5:
      $(".dicePic")
        .attr("src", "http://roll.diceapi.com/images/poorly-drawn/d6/5.png")
        .css("visibility", "visible");
      break;

    case 6:
      $(".dicePic")
        .attr("src", "http://roll.diceapi.com/images/poorly-drawn/d6/6.png")
        .css("visibility", "visible");
      break;
  }
};
const move = () => {
  console.log(player1.turn); //true
  // $(`#5`).append($('.x'))
  if (player1.turn === true && player1.gameStart === true) {
    // random = 75
    random = Math.ceil(Math.random() * 6);
    player1.location += random;
    // dice(6);
    dice(random);
    $(`#${player1.location}`).append($(".x"));
    player1.turn = false;
    player2.turn = true;
    player1.checkWin(".x");
    ladderSnake(player1, ".x");
    const $start = `Player 1 (Pikachu) rolled a ${random}. Player 2 (Eevee) turn please roll the dice.`;
    $(".displayStatus").empty().append($start);
  } else if (player2.turn === true && player2.gameStart === true) {
    // random = 3;
    random = Math.ceil(Math.random() * 6);
    player2.location += random;
    // dice(5);
    dice(random);
    $(`#${player2.location}`).append($(".xo"));
    player2.turn = false;
    player1.turn = true;
    player2.checkWin(".xo");
    ladderSnake(player2, ".xo");
    const $start = `Player 2 (Eevee) rolled a ${random}. Player 1 (Pikachu) turn please roll the dice.`;
    $(".displayStatus").empty().append($start);
  } else {
    console.log("error");
    alert("Please start game first");
  }
};

const ladderSnake = (player, id) => {
  console.log(player.location);
  switch (player.location) {
    case 3:
      $("#23").append($(id)); ///ladder 1
      return;
    case 44:
      $("#67").append($(id)); /// ladder 3
      return;
    case 45:
      $("#15").append($(id)); //snake1
      return;
    case 51:
      $("#33").append($(id)); ///snake 2
      return;
    case 76:
      $("#98").append($(id)); ///ladder 2
      return;
    case 95:
      $("#73").append($(id)); //snake 3
      return;
  }
};

$(() => {
  game();

  // $.ajax({
  //   url: "http://roll.diceapi.com/json/d6",
  //   type: "GET",
  //   data: {
  //     success: true,
  //     dice: [
  //       { value: 1, type: "d6" },
  //       { value: 2, type: "d6" },
  //       { value: 3, type: "d6" },
  //       { value: 4, type: "d6" },
  //       { value: 5, type: "d6" },
  //       { value: 6, type: "d6" },
  //     ],
  //   },
  // }).then(
  //   (data) => {
  //     console.log(data);
  //   },
  //   () => {
  //     console.log("bad request");
  //   }
  // );

  ////button
  $("#roll").on("click", move);
  $("#X").on("click", gameStart1);
  // $("#XO").on("click", gameStart2);
  $("#restart").on("click", reset);
});