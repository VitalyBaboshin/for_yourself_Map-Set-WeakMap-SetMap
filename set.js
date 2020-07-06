// const set = new Set([1,3,2,3,3,3,4,5,5,6]);
// console.log(set); // log -> Set {1,2,3,4,5,6}
//
// set.add(10).add(20).add(20);
// console.log(set);

// console.log(set.has(30)); // .has return true or false
// console.log(set.size);
// console.log(set.delete(2)) // .delete return true if delete and false not delete
// // console.log(set.clear());
// console.log(set.keys());
//
// for (let se of set) {
//     console.log(se)
// }

function uniqValues(array) {
    return Array.from(new Set(array))
}

console.log(uniqValues([1,1,1,2,2,3,3,4,4,4,5,6,6]))

const arrr = [1,1,1,3,4,2,1,5];
console.log([...new Set(arrr)])
