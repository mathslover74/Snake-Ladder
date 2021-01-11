console.log('linked')

//// make sq counting left to right
const mkSq = (num) => {
  const $sq = $('<div>').addClass('square').attr('id',`${num}`)
  const $num =$('<div>').addClass('num').text(`${num}`);

  $($sq).prepend($num);
  $('.gameBoard').append($sq)
  // $(`.row${row}`).append($sq)
  
}

//// make sq counting right to left
const mkSq2 = (num) => {
  const $sq = $('<div>').addClass('square').attr('id',`${num}`)
  const $num =$('<div>').addClass('num').text(`${num}`);
  $($sq).prepend($num);
  $('.gameBoard').prepend($sq)
  // $(`.row${row}`).append($sq)
  
}

///for odd row
const genRow1 = (num1,num) => {
  for(let i = num1; i<=num; i++) {
    // const $row =$('<div>').addClass(`row${row}`)
    // $('.gameBoard').append($row)
    mkSq(i)
  }
}

///for even row
const genRow2 = (num1,num) => {
  for(let i = num1; i<=num; i++) {
    // const $row =$('<div>').addClass(`row${row}`)
    // $('.gameBoard').append($row)
    mkSq2(i)
  }
}

///generate board

const genBoard = (size) => {
  for (let i = 1; i<=size; i++) {
    switch(i) {
      case 1:
        
        genRow1(1,10);
        break;
      case 2:
        genRow2(11,20);
        break;
      case 3:
        genRow1(21,30);
        break;
      case 4:
        genRow2(31,40);
        break;
      case 5:
        genRow1(41,50);
        break;
      case 6:
        genRow2(51,60);
        break;
      case 7:
        genRow1(61,70);
        break;
      case 8:
        genRow2(71,80);
        break;
      case 9:
        genRow1(81,90);
        break;
      case 10:
        genRow2(91,100);
        break;  
      
    }


    }
    
    
    
    // if(i%2==0) {
    //   genRow2(10)
    // } else {
    //   genRow1(10)
    // }
  // }
}
///test
const test = (num,num1) => {
  for (let i = num; i<=num1; i++) {
    switch(i) {
      case 1:
        console.log('1');
        break;
      case 2:
        console.log('2');
        break;
      default:
        console.log('error')
    }
    
    
    
    // if(i%2==0) {
    //   genRow2(10)
    // } else {
    //   genRow1(10)
    // }
  }
}

  


$(() => {

  // test(1,5);
  genBoard(4);


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