function ucFirst(str) {
  // ваш код...В RunJS код работает корректно для всех трех заданных значений.
  if (str === '') {
    str = Number(str);
    if (str === 0) {
      str = '';
      return str;
      // console.log(str);
      // console.log(typeof str);
    }

  } else {
    let firstLetter = str[0].toUpperCase();
    let otherLetters = str.substring(1);
    str = String(`${firstLetter}${otherLetters}`);
    return str;
    // console.log(str);
    // console.log(typeof str);
  }
}
