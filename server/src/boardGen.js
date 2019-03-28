
let genBoard = function(size) {
   let board = [];
   let maxRand = size * size;
   let usedSpots = Math.floor(maxRand / 4);

   for(let i=0; i<size; i++) {
      board.push(new Array(size).fill(0));
   }
   board[2][3] = 'B';
   board[3][3] = 'W';

   return board;
}

module.exports = genBoard;

