module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const transfersCount = (2 ** disksNumber) - 1;
  const turnsPerSecond = turnsSpeed / 3600;

  return {
    turns: transfersCount,
    seconds: Math.floor(transfersCount / turnsPerSecond),
  }
}
