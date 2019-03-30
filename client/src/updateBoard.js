function updateBoard(board, turn) {
  // Constants
  const BLK = 'B';
  const WHT = 'W';
  const L = board.length - 1;


  // a stone is a coordinate pair [i,j] - rows,cols, origin is top-left
  let stones; // array of stones, [[i,j],...]
  let groups; // array of array of stones, [[[i,j],...],...]
  let groupsWithoutFreedoms;  // array of array of stones, that will be removed
  
  // If it is black's turn, take white's stones first,
  [turn === BLK ? WHT : BLK, turn].forEach( player => {
    stones = getStonesWithNoFreedoms(player, board);
    groups = groupStones(player, stones, board);
    groupsWithoutFreedoms = getGroupsWithoutFreedoms(groups);
    removeStones(groupsWithoutFreedoms, board);
  });

  function getStonesWithNoFreedoms(player, board) {
    // Get an array of all of [player]'s stones that have no freedoms
    let stones = [];
    board.forEach((row, i) => row.forEach((cell, j) => {
      if (cell === player) {
        const DoF = getDegreesOfFreedom(board, i, j);
        if (DoF === 0) {
          stones.push([i, j]);
        }
      }
    }));
    
    return stones;
  }

  function groupStones(player, stones, board) {
    let groups = [];
    let groupPtr = -1;
    let stack = [];

    stones.forEach((stone) => {      
      // if stone not in any of groups
      if ( ![].concat(...groups).some(s => s[0] === stone[0] && s[1] === stone[1]) ) {
        groups.push([stone]); // push a new group of stones
        groupPtr += 1; // point to the group
        stack = [stone]; // use a stack for dfs-style search
        while (stack && stack.length > 0) {
           // pick next stone to search from
          let [i, j] = stack.pop();

          // check the 4 directions
          [[i-1,j], [i,j+1], [i+1,j], [i,j-1]].forEach(coords => {
            if (shouldAdd(player, coords)) add(coords);
          });
        }
      }
    });

    // if stone is on board, of same color, and not yet in a group, return true
    function shouldAdd(player, [i, j]) {
      if (!(i > 0 && i < L && j > 0 && j < L)) return false; // not on board
      return (
        // matches color
        board[i][j] === player
        // not already added - "there is not some element in array with same coords"
        && !groups[groupPtr].some(([i2, j2]) => (i2 === i && j2 === j))
      );
    }

    // 'adding' a stone consists of adding it to the stack (for 'dfs' search)
    // and adding it to its respective group
    function add(coords) {
      stack.push(coords);
      groups[groupPtr].push(coords);
    }

    return groups;
  }

  function getGroupsWithoutFreedoms(groups) {

    function hasFreedom([i,j]) {
      // check the 4 directions, return true if stone has any freedoms
      return [[i - 1, j], [i, j + 1], [i + 1, j], [i, j - 1]].some(
        ([i,j]) => board[i][j] === 0
      );
    }
    // return groups where every stone has no freedoms
    return groups.filter(group => group.every(coords => !hasFreedom(coords)));
  }

  function removeStones(groups, board) {
    groups.forEach(group => group.forEach(([i, j]) => {
      board[i][j] = 0;
    }));
  }

  function getDegreesOfFreedom(board, i, j) {
    let DoF = 0; // degrees of freedom

    if (i > 0 && board[i - 1][j] === 0) DoF += 1; // check up
    if (j > 0 && board[i][j - 1] === 0) DoF += 1; // check left
    if (i < L && board[i + 1][j] === 0) DoF += 1; // check right
    if (j < L && board[i][j + 1] === 0) DoF += 1; // check down

    return DoF;
  }
}



export default updateBoard;
