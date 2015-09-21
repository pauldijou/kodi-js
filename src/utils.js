export function millisecondsToTime (milliseconds) {
  const hours = Math.floor(milliseconds / 3600000);
  const minutes = Math.floor(milliseconds / 60000) % 24;
  const seconds = Math.floor(milliseconds / 1000) % 60;
  const millis = Math.round(milliseconds % 1000);
  return { hours, minutes, seconds, milliseconds: millis };
}

export function secondsToTime (seconds) {
  return millisecondsToTime(seconds * 1000);
}
