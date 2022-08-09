const hanoi = (n, A, B, C) => {
  if (n === 1) {
    console.log("Move " + n + " " + A + " to " + C);
  } else {
    hanoi(n - 1, A, C, B);
    console.log("Move " + n + " " + A + " to " + C);
    hanoi(n - 1, B, A, C);
  }
};

export default hanoi;
