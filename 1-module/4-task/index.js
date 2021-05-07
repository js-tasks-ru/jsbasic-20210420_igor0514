function checkSpam(str) {
  // ваш код...
  let convertedStr = str.toLowerCase();
  /*
return convertedStr.includes('1xbet') || convertedStr.includes('xxx');
  Этот вариант решения я встречал в учебнике, но пока не понимаю его алгоритм. Ведь у нас здесь условия if нет вообще. Как же функция возвращает одно из двух истинных значений (если они присутствуют в введенном тексте), если мы не задаем явно условия?
*/
  let firstCheck = convertedStr.includes('1xbet');
  let secondCheck = convertedStr.includes('xxx');
  //   if (firstCheck) {
  //     return true;
  //   } else if (secondCheck) {
  //     return true;
  //   }
  //   return false;
  // }
  return firstCheck || secondCheck;
}
