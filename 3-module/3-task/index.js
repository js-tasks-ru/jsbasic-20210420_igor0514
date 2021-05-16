function camelize(str) {
  // ваш код...
  
  let ourString = "";
  
  let splittedArray = str.split('-');
  for(let index in splittedArray){
    if(index > 0){
      let firstChar = splittedArray[index].charAt(0).toUpperCase()
      splittedArray[index] = firstChar + splittedArray[index].substring(1)
    }
  }

ourString = splittedArray.join('');
return ourString;
  
}
