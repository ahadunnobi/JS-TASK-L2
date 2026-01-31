let scores = [45, 80, 55, 92, 30, 75];
let passedScores = [];
for (let s of scores) {
  if (s >= 60) {
    passedScores.push(s);
  }
}
console.log("Passed Scores:", passedScores);