//Array.prototype.push = () => "Hacked js!";
Array.prototype.x2Test = function () {
  return this.map((i) => i * 2);
};
const arr = [1, 2, 3, 4, 5];

//console.log(arr.push("test"));

//console.log(arr);

//const x2 = arr.map((i) => i * 2);

//console.log("x2 ==> ", x2); //  x2 ==>  [ 2, 4, 6, 8, 10 ]

const x2 = arr.x2Test();

console.log("x2 ==> ", x2); // x2 ==>  [ 2, 4, 6, 8, 10 ]
