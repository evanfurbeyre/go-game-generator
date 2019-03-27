
let genBoard = function(size) {
   let board = [];
   let maxRand = size * size;
   let usedSpots = Math.floor(maxRand / 4);

   for(let i=0; i<size; i++) {
      board.push(new Array(size).fill(0));
   }

   console.log(board);
}

genBoard(9);


