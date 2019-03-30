
let genBoard = function(size) {
   let board = [];
   let maxRand = size * size;
   let usedSpots = Math.floor(maxRand / 4);

   for(let i=0; i<size; i++) {
      board.push(new Array(size).fill(0));
   }
   board[1][3] = 'B';
   board[1][4] = 'B';
   board[1][5] = 'B';
   board[2][5] = 'B';

   board[2][2] = 'B';
   board[2][3] = 'W';
   board[2][4] = 'W';
   board[3][4] = 'W';
   board[3][3] = 'B';
   board[3][5] = 'B';

   board[5][4] = 'W';
   board[5][5] = 'B';
   board[5][3] = 'B';
   board[6][4] = 'B';

   // board[5][5] = 'W';
   // board[5][4] = 'B';
   // board[5][6] = 'B';
   // board[4][5] = 'B';
   // board[6][5] = 'B';

   return board;
}

module.exports = genBoard;

