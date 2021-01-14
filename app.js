console.log('linked')

class Player {
  constructor(name){
    this.name = name;
    this.player = true;
    this.location = 1;
    this.turn = true;
  }

  checkWin =() => {
    if(this.location >= 100){
      console.log(`${this.name} wins!`);
      const $win = `Player ${name} win the game!`
      $('.displayStatus').empty().append($win)
    }
  }


}

//// make sq counting left to right
const mkSq = (row,num) => {
  const $sq = $('<div>').addClass('square').attr('id',`${num}`)
  const $num =$('<div>').addClass('num').text(`${num}`);
  // const $row =$('<div>').addClass(`row${row}`);
  $($sq).append($num);
  $(`.row${row}`).append($sq)
  // $('.gameBoard').append($row)
  // $(`.row2`).append($sq)
}

//// make sq counting right to left
const mkSq2 = (row,num) => {
  const $sq = $('<div>').addClass('square').attr('id',`${num}`)
  const $num =$('<div>').addClass('num').text(`${num}`);
  // const $row =$('<div>').addClass(`row${row}`);

  $($sq).append($num);
  $(`.row${row}`).append($sq)
  // $('.gameBoard').append($row).prepend($row)
  // $(`.row1`).append($sq)
}

///for odd row
const genRow1 = (row, num1,num) => {
  const $row =$('<div>').addClass(`row${row}`)
  $('.gameBoard').prepend($row)
  
  for(let i = num1; i<=num; i++) {
    mkSq(row,i)
  }
}

///for even row
const genRow2 = (row,num1,num) => {
  const $row =$('<div>').addClass(`row${row}`)
  $('.gameBoard').prepend($row)
  
  for(let i = num1; i<=num; i++) {
    mkSq2(row,i)
  }
}

///generate board

const genBoard = (size) => {
  for (let i = 1; i<=size; i++) {
    switch(i) {
      case 1:
        
        genRow1(1,1,10);
        break;
      case 2:
        genRow2(2,11,20);
        break;
      case 3:
        genRow1(3,21,30);
        break;
      case 4:
        genRow2(4,31,40);
        break;
      case 5:
        genRow1(5,41,50);
        break;
      case 6:
        genRow2(6,51,60);
        break;
      case 7:
        genRow1(7,61,70);
        break;
      case 8:
        genRow2(8,71,80);
        break;
      case 9:
        genRow1(9,81,90);
        break;
      case 10:
        genRow2(10,91,100);
        break;  
      }
    }
  }

  const genPlayer1 = (name) => {
    const player1 = new Player (name);
    const $player1 =$('<div>').addClass(`${name}`)
    $(`#${player1.location}`).append($player1)
    $('#6').append($player1)
    console.log(player1.location)
  }

  const genPlayer2 = (name) => {
    const player2 = new Player (name);
    const $player2 =$('<div>').addClass(`${name}`)
    $(`#${player2.location}`).append($player2)
    player2.turn = false;
    // $('#1').append($player1)
    console.log(player2.location)
  }

  const dice = () => {
    let roll = (Math.ceil(Math.random()*6));
    console.log(roll);
    // return;
  }

  const reset = () => {
    player1.location = 1;
    player2.location = 1;
    player1.turn = true;
    player2.turn = false;

  }
 const player1 = new Player ('x');
const player2 = new Player ('xo');
  const game = () => {
    const $start = 'Let the game begin. Player 1 please roll the dice'
    $('.displayStatus').empty().append($start)
    
    genBoard(10);
    ///gen player 1
   
    const $player1 =$('<div>').addClass(`x`)
    $(`#${player1.location}`).append($player1)
    // $('#1').append($player1)
    console.log(player1)
    
    
    const $player2 =$('<div>').addClass(`${'xo'}`)
    $(`#${player2.location}`).append($player2)
    player2.turn = false;
    console.log(player2)
    // genPlayers()
  }

  const move = () => {
    // dice();

console.log(player1.turn) //true
    // $(`#5`).append($('.x'))
if(player1.turn === true) {
  console.log(player1.location) /// 1
  // player1.location += dice() ;
  player1.location += (Math.ceil(Math.random()*6));
  console.log(player1.location)
//   // let x = Number(player1.location);
//   // console.log(x)
  // console.log('#'+`${player1.location}`)
  $(`#${player1.location}`).append($('.x'));
//   // $(`#${player1.location}`).append('.x')
  player1.turn = false;
  console.log(player1.turn) //true
  player2.turn = true;
  console.log(player2.turn) //true
  player1.checkWin;
const $start = 'Player 2 turn please roll the dice'
$('.displayStatus').empty().append($start)
  
}
      
else if (player2.turn === true) {
  player2.location += (Math.ceil(Math.random()*6));
  // player2.location += dice();
  $(`#${player2.location}`).append($('.xo'))
  player2.turn = false;
  player1.turn = true;
  player2.checkWin
const $start = 'Player 1 turn please roll the dice'
$('.displayStatus').empty().append($start)
}else {
  console.log('error')
}
  }


$(() => {

  game();
  // test(1,5);
  // genBoard(10);
  // genRow1(1,1,10);
  // genRow2(2,11,20);
  // genRow1(3,21,30);
  // genRow2(4,31,40);

////button
$('#roll').on('click',move)
  // $('X').on('click',player1)
  // $('XO').on('click',player2)
  $('#restart').on('click',reset)
})