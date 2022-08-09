const mouseWalkingMaze = ({ maze, startI, startJ, endI, endJ }) => {
  let sucess = false;
  const visit = (i, j) => {
    maze[i][j] = 1;
    if (i === endI && j === endJ) {
      sucess = true;
    }
    if (!sucess && maze[i][j + 1] === 0) {
      visit(i, j + 1);
    }
    if (!sucess && maze[i + 1][j] === 0) {
      visit(i + 1, j);
    }
    if (!sucess && maze[i][j - 1] === 0) {
      visit(i, j - 1);
    }
    if (!sucess && maze[i - 1][j] === 0) {
      visit(i - 1, j);
    }
    if (!sucess) {
      maze[i][j] = 0;
    }
  };

  visit(startI, startJ);

  return sucess;
};

export default mouseWalkingMaze;
