function ucFirst(str) {
  // ваш код...
  if (str === '') {
    str = Number(str);
    if (str === 0) {
      str = '';
      return str;
    }

  } else {
    let firstLetter = str[0].toUpperCase();
    let otherLetters = str.substring(1);
    str = `${firstLetter}${otherLetters}`;
    return str;

  }
}
