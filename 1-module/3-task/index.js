function ucFirst(str) {
  // ваш код...
  if (!str) {
    return '';
  } let firstLetter = str[0].toUpperCase();
  let otherLetters = str.substring(1);
  return `${firstLetter}${otherLetters}`;

}
