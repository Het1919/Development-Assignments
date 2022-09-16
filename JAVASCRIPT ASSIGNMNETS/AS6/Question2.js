let num=[3,45,6,7,23,5,7,8];
let num1=[...new Set(num)];//remove duplicate elements.
num1.sort((a, b) => a - b);//sort my numbers.
console.log(num1);

function find_largest(n)
{
    return num1[n];
}

console.log(find_largest(4));