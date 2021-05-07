function ucFirst(str) {
  // ваш код...
  if (!str) {
    return '';
  } else {
    let firstLetter = str[0].toUpperCase();
    let otherLetters = str.substring(1);
    str = `${firstLetter}${otherLetters}`;
    return str;

  }
}
