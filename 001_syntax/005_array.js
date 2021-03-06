/**
 *  5.1 配列の要素を全て表示するメソッドを実装してください
 *
 */
const array = ['apple', 'banana', 'coconut'];

function printArray(array) { 
  console.log(array);
}
printArray(array);
/**
 *  5.2 全ての曜日を配列として返却するメソッドを実装してください
 *
 *  example:
 *     [
 *       "Monday",
 *       "Tuesday",
 *       "Wednesday",
 *       "Thursday",
 *       "Friday",
 *       "Saturday",
 *       "Sunday",
 *      ]
 *
 */
function getDays() {
  const getDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  console.log(getDays);
}
getDays();
/**
 *  5.3 配列に特定の数があった場合にtrue、そうでない場合にfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3], 1 => true
 *    [1, 2, 3], 5 => false
 *    [], 5 => false
 *
 */
function findNum(array, num) {
  console.log(array.includes(num) ? 'true': 'false')
}
findNum([1, 2, 5], 2);
/**
 *  5.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3] => false
 *    [1, 2, 2, 3] => true
 *    [] => false
 *
 */
function isDuplicate(array) {
  const s = new Set(array);
  return s.size != array.length;
}
isDuplicate([1, 2, 3, 4, 4]);