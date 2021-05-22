function sumSalary(salaries) {
  // ваш код...
  let sum = 0;
  for (let key in salaries) {

    if (!isFinite(salaries[key])) {
      continue;
    } else if (typeof salaries[key] === 'boolean') {
      continue;
    } else if (typeof salaries[key] === 'number' && isFinite(salaries[key])) {
      sum += salaries[key];
    }

  }
  return sum;

}

