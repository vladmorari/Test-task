/*1
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  },i* 1000);
}
*/

/*2
const arr = Array.from({ length: 1000 }, () =>
  Math.round(Math.random() * 900 + 1)
);
const uniqueValues=new Set(arr).size;
console.log(arr);
console.log('uniqueValues-',uniqueValues);
*/

const arr = [1, 0, 10, "0", "1", NaN, false, null, undefined, "false", "true"];
for (let i = 0; i < arr.length; i++) {
    if(!! arr[i])console.log(arr[i])
  }

