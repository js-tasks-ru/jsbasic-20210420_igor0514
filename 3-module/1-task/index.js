
function namify(users) {
  // ваш код...
  let namesArray = users.map(function (x) {
    return x.name;
  });
  return namesArray;
}
