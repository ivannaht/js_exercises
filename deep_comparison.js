// Compare only properties (ignore methods), and consider the possibility of nesting (any number of levels).
function deepComp(obj1, obj2) {
    let result = Object.keys(obj1).length === Object.keys(obj2).length;
    if(result) {
        for(property in obj1) {
            if(typeof(obj1[property]) === typeof(obj2[property])) { 
                result = typeof(obj1[property]) === 'object' ? deepComp(obj1[property], obj2[property]) : obj1[property] === obj2[property]
            } else {
                result =false;
            }
            if(!result) break;
        }
    }
    return result;
}

let a={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let b={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let c={x:[1,2,3,4,5,6], y:0, z: {m:'test', n:false}};
let d={x:[1,2,3,4], y:0, z: {m:'test', n:false}};
let e={x:[1,2,3,4,5], y:0, z: {m:'test', n:true}};
let f={x:[1,2,3,4,5], y:-1, z: {m:'test', n:false}};
console.log(deepComp(a,b)); // -> true
console.log(deepComp(a,c)); // -> false
console.log(deepComp(a,d)); // -> false
console.log(deepComp(a,e)); // -> false
console.log(deepComp(a,f)); // -> false
