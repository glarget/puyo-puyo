const SCORE_MULTIPLICATOR = 10;

/**
 * Updates the game score by accumulate the lines with the combo
 */

export default function score(reaction: any[], combo: number): number {
  return (
    reaction.reduce((accumulator, line) => line.length + accumulator, 0) *
    SCORE_MULTIPLICATOR *
    combo
  );
}
