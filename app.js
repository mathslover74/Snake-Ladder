console.log('linked')

class Player {
  constructor(name){
    this.name = name;
    this.player = true;
    this.location = 1;
    this.turn = true;
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
    // $('#1').append($player1)
    console.log(player1.location)
  }

  const genPlayers = () => {
    const $x = $('<div>').addClass('x')
    $('#1').append($x)
    const $xo = $('<div>').addClass('xo')
    $('#1').append($xo)
  } 

  const game = () => {
    genBoard(10);
    genPlayer1('x')
    // genPlayers()
  }


$(() => {

  game();
  // test(1,5);
  // genBoard(10);
  // genRow1(1,1,10);
  // genRow2(2,11,20);
  // genRow1(3,21,30);
  // genRow2(4,31,40);


// genRow2(10)
// genRow1(10)
// genRow1(10)
// genRow1(10)
// genRow1(10)
// genRow1(10)
// genRow1(10)
// genRow1(10)
// genRow1(10)
// genRow1(10)

})