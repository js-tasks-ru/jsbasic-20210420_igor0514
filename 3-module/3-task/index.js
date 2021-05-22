function camelize(str) {
  // ваш код...

  let ourString = "";
  let splittedArray = str.split('-');
  ourString = splittedArray.map(function (element, index) {
    if (index > 0) {
      let firstChar = splittedArray[index].charAt(0).toUpperCase();
      splittedArray[index] = firstChar + splittedArray[index].substring(1);
    }
  });
  ourString = splittedArray.join('');
  return ourString;

}
