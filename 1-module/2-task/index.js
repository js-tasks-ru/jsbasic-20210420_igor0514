/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  // ваш код...имя не пустое, без пробелов, минимум 4 символа
  if (!name) {
    return false;
  }
  let whitespaceCheck = name.includes(' ');
  if (whitespaceCheck) {
    return false;
  } else if (name.length >= 4) {
    return true;
  } else if (name.length < 4) {
    return false;
  }

}
function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
