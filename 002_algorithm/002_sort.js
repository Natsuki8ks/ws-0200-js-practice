/**
 *  2.2.1 バブルソート
 *
 *  バブルソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function bubbleSort (array) {
  obj = {};
  for(let i = 0; i < array.length; i++) {
    for(let j = array.length-1; j > i; j--){
      if(array[j] < array[j-1]){
        let tmp = array[j];
        array[j] = array[j-1];
        array[j-1] = tmp;
      }
    }
  }
  return obj;
}
console.log([1, 5, 2, 4, 3]);

/**
 *  2.2.2 挿入ソート
 *
 *  挿入ソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function insertSort (array) {
  obj = {};
  for(let i = 1; i < array.length; i++) {
    let tmp = array[i];
    for(let j = i-1; j >= 0; j--){
      if(array[j] > tmp){
        array[j+1] = array[j];
      } else{
        bresk;
      }
    }
    array[j+1] = tmp;
  }
  return obj;
}
insertSort([10,3,1,4,2]);

/**
 *  2.2.3 マージソート
 *
 *  マージソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function mergeSort (array) {
  this.array = [1,5,4,7,2];
  let msort = array.sort(array);
  return msort;
}
mergeSort();
// Is sort a property?


/**
 *  2.2.4 クイックソート
 *
 *  クイックソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function quickSort (array, start = 0, end = (array.length -1)) {
  let pivot= array[Math.floor((start + end) / 2)];
  let left = start;
  let right = end;

  while(true){
    while(array[left] < pivot){
      left++;
    }
    while(pivot < array[right]) {
      right++;
    }
    if(right <= left) {
      break;
    }
    let tmp = array[left];
    array[left] = array[right];
    array[right] = tmp;
    left++;
    right--;
  }
  if(start < left-1) {
    quickSort(start, left-1);
  }
  if(right+1 < end) {
    quickSort(right+1, end);
  }
  return array;
}

let array =[1, 3, 2, 4, 5];
console.log(array);
