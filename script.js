const array = function addValueToTheEndOfArray(arr, val) {
  arr.push(val);
  return arr;
};
/* console.log(
  addValueToTheEndOfArray(["alma", "körte", "szilva", "barack"], "banan")
);
 */
//*------------------------------------------

let a = 1;
let b = a;
a = 2;
console.log(a, " ", b);

let c = {
  key: "value",
  key2: {
    subkey: "value3",
  },
};

// let d = c;    -------------- shallow copy
// let d = { ...c}; ------------shallow copy
// let d = Object.assign({}, source);

// let d = JSON.parse(JSON.stringify(c));

let convertCtoString = JSON.stringify(c);

let d = JSON.parse(convertCtoString);
console.log("d tipusa: ", typeof d);
console.log("c tipusa: ", typeof c);
console.log("convertCtoString tipusa: ", typeof convertCtoString);

c.key = "value1";
c.key2.subkey = "value4";
d.key = "value2";
d.key.subkey = "value5";
console.log(c, " ", d);

function createNewArrayWithValue(arr, val) {
  const newArray = [...arr, val]; // shallow copy
  /*   
  const newArray = JSON.parse(JSON.strigify(arr))
  newArray.push(val)                 // deep copy
*/
  return newArray;
}

// console.log(createNewArrayWithValue(array, "New word"));

const array1 = ["a", "b"]
const array2 = ["x", "y", "z"]

function addArrayToArray(arr1, arr2) {
  /*     for (let i = 0; i < arr1.length; i++) {
        arr2.push(arr1[i])
    } */

/*   
    for (const item of arr1) {
    arr2.push(item);
  }
  return arr2;
  */
 return arr1.concat(arr2); // uj tömböt alkot
}
console.log(addArrayToArray(array1, array2));
console.log(array1, array2)
