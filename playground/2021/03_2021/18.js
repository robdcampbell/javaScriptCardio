function stat(str) {
  // your code
  if (str === "") return "";

  const scoresSeconds = str.split(", ").map((score) => {
    const timeArr = score.split("|");
    const hour = 3600 * Number(timeArr[0]);
    const minute = 60 * Number(timeArr[1]);
    const second = Number(timeArr[2]);
    return hour + minute + second;
  });

  // format to str
  function timeFormat(seconds) {
    let num = new Date(seconds * 1000).toISOString().substr(11, 8);
    return num.split(":").join("|");
  }

  // range
  const calcRange = (arr) => {
    return timeFormat(Math.max(...arr) - Math.min(...arr));
  };

  // average
  const calcAverage = (arr) => {
    return timeFormat(arr.reduce((a, b) => a + b) / scoresSeconds.length);
  };

  // median
  const calcMedian = (arr) => {
    const scoresSort = [...scoresSeconds]
      .sort((a, b) => a - b)
      .map((x) => timeFormat(x));
    const secondsSort = [...scoresSeconds].sort((a, b) => a - b);
    const midIndex = Math.floor(scoresSeconds.length / 2);

    return scoresSort.length % 2 > 0
      ? scoresSort[Math.floor(scoresSort.length / 2)]
      : timeFormat((secondsSort[midIndex - 1] + secondsSort[midIndex]) / 2);

    //scoresSort[ Math.floor((scoresSort.length)/2) ]
  };

  return `Range: ${calcRange(scoresSeconds)} Average: ${calcAverage(
    scoresSeconds
  )} Median: ${calcMedian(scoresSeconds)}`;
}
