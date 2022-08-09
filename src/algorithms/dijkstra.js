const dijkstra = (flags) => {
  let b = 0;
  let w = 0;
  let r = flags.length - 1;
  let count = 0;
  while (w <= r) {
    if (flags[w] === "W") {
      w++;
    } else if (flags[w] === "B") {
      let aux = flags[w];
      flags[w] = flags[b];
      flags[b] = aux;
      w++;
      b++;
    } else if (flags[w] === "R") {
      let m = flags[w];
      flags[w] = flags[r];
      flags[r] = m;
      r--;
      count++;
    }
  }
};

export default dijkstra;
