function sumSalary(salaries) {
  // ваш код...
  let sum = 0;
  for (let key in salaries) {

  /*if(!isNaN(salaries[key]) && 
  isFinite(salaries[key]) && 
  typeof salaries[key] != 'boolean')
  {
    sum += salaries[key];
  }*/

    if (isNaN(salaries[key])) {
      continue;
    } else if (!isFinite(salaries[key])) {
      continue;
    } else if (typeof salaries[key] === 'boolean') {
      continue;
    }
    sum += salaries[key];
  } return sum;
}

