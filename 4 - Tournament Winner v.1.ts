/*
Tournament Winner:

- An algorithms tournament is taking place with teams competing against each other to solve problems.
- Teams compete in a round robin format.
- In each match, one team is 'home' and the other is 'away'.
- There's always one winner per match; no ties.
- Winning team gets 3 points, losing team gets 0.

Input:
- `competitions`: Array of pairs, e.g., [homeTeam, awayTeam].
- `results`: Array indicating match winners. 1 means homeTeam won, 0 means awayTeam won.

Output:
- Function returns the name of the team with the most points.
- It's guaranteed there will be a single winner.
*/

export function tournamentWinner(competitions: string[][], results: number[]) {
  // Write your code here.
  // 0 = away, 1 =home
  const teamScores: { [key: string]: number } = {};

  for (let i = 0; i < competitions.length; i++) {
    let competition = competitions[i];
    let winner = results[i] === 0 ? 1 : 0;
    let winningTeam = competitions[i][winner];

    if (teamScores[winningTeam]) {
      teamScores[winningTeam] += 3;
    } else {
      teamScores[winningTeam] = 3;
    }
  }

  let maxScore = 0;
  let tournamentWinner = "";

  for (const team in teamScores) {
    if (teamScores[team] > maxScore) {
      maxScore = teamScores[team];
      tournamentWinner = team;
    }
  }

  return tournamentWinner;
}

/*
  Space - O(n)
    space needed to keep track of the team scores

  Time - O(n)
    since we are iterating each competition and team scores
*/
