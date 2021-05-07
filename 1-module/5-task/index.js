function truncate(str, maxlength) {
  // ваш код...
  if (str.length > maxlength) {
    let changedStr = str.slice(0, maxlength - 1) + '…';
    return changedStr;
  } return str;
}
