
let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  // ваш код...
let filteredArray = [];
for(let index in arr){
  if((arr[index] >= a) && (arr[index] <= b)){
    filteredArray.push(arr[index])
  }
}
return filteredArray;
}
