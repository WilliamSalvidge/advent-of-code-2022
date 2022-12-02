const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const splitLines = data.split("\n\n");
    const sumValues = splitLines.map(x => {
        const y = x.split("\n")
        sum = y.reduce((acc, curr) => +curr + +acc, 0)
        return sum;
    })
    sumValues.sort((a, b) => b - a);
    console.log(sumValues);
    console.log(sumValues[0] + sumValues[1] + sumValues[2]);
});
