/**
 *  6.1 下記データを持ったオブジェクトを返す関数を実装してください。
 *
 *  name: 'Bob'
 *  age: 32
 *  gender: 'male'
 *
 */

function getPersonObject() {
  const source = {
    name: 'Bob',
    age: 32,
    gender: 'male',
 };
 console.log(source.name);
 console.log(source.age);
 console.log(source.gender);
}


/**
 *  6.2 下記データAが引数で与えられた場合にデータBに書き換える関数を実装してください。
 *
 *  Data A:
 *    name: 'Bob'
 *    age: 32
 *    gender: 'male'
 *  Data B:
 *    name: 'Mary'
 *    age: 37
 *    gender: 'female'
 *
 */

function mutateObject(person) {
  const person = {
    name: 'Bob',
    age: 32,
    gender: 'male',
  };

  person.name = 'Mary';
  person.age = 37;
  person.gender = 'female';

  console.log(person);
}


/**
 *  6.3 下記引数で渡される配列にランダムな1 ~10の数字を割り振り、オブジェクトとして返す
 *      関数を実装してください
 *
 *    [
 *      'Bob',
 *      'Mary',
 *      'Ann',
 *      'Mike'
 *    ]
 *
 *   output:
 *     {
 *       Bob: [Random Number],
 *       Mary: [Random Number],
 *       Ann: [Random Number],
 *       Mike: [Random Number]
 *     }
 *
 */

function assignNumber(persons) {
  
  const randomNumber = [];
    for (i = 1; i < 11; i++) {
    randomNumber[i] = person.splice(Math.floor(Math.random() * results.length), 1)[0];
    }
   console.log(randomNumber);
  
  const  numbering = [];
    Bob: randomNumber[0];
    Mary: randomNumber[1];
    Ann: randomNumber[2];
    Mike: randomNumber[3];
  
}


/**
 *  6.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *      但し、オブジェクトを使って実装すること
 *
 *  example:
 *    [1, 2, 3] => false
 *    [1, 2, 2, 3] => true
 *    [] => false
 *
 */

function isDuplicate(array) {
  
  const number = [1, 2, 3, 4, 4];
  const s = new Set(number);

  if (s.size != number.length) {
    console.log('true');
  } else {
    console.log('false');
  }
  
}
