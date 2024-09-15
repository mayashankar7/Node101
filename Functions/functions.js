//arguments in a function, only for non-arrow function
function f1(a, b, c) {
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[2])
}
f1(1,2,3)
function funcWithDefault2(a = 55) {
    a = 99; // updating a does not also update arguments[0]
    console.log(arguments[0]);
}
funcWithDefault2(11); // 11

const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

console.log(materials.map((material) => material.length));

