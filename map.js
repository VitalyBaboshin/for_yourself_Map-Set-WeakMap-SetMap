const obj = {
    name: 'kris',
    age: 23,
    job: 'Engeener'
}

const entries = [
    ['name', 'Vitaliy'],
    ['age', 27],
    ['job', 'Frontend']
]

console.log(Object.entries(obj));
console.log(Object.fromEntries(entries));

const map = new Map(entries);
map.set('ga','dfd')
    .set(12, 'dff');
// console.log(map.get(12));


map.delete(12)
console.log(map.delete('ga'));
console.log(map.has(13));
console.log(map.size);
// map.clear();
console.log(map.size);

// for (let [key, value] of map) {
//     console.log(key, value);
// }
// for (let val of map.values()) {
//     console.log(val);
// }
// for (let key of map.keys()) {
//     console.log(key);
// }
// map.forEach((val, key, m) => {
//     console.log(key, val);
// });
// ============

// const array = [...map];
const array = Array.from(map);
console.log(array);
const mapObj = Object.fromEntries(map.entries());
console.log(mapObj);
// =============

const users = [
    {name: 'maks'},
    {name: 'Fedy'},
    {name: 'Deins'}
]

const visits = new Map();
visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime()+1000*60))
    .set(users[2], new Date(new Date().getTime()+5000*60))

for (let vis of visits) {
    console.log(vis)
}

function lastVisit(user) {
    return visits.get(user)
}

console.log(lastVisit(users[2]))
