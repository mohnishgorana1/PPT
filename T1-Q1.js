let a = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
console.log(a);

let count = 0;
let j = 0;

for(let i = 0; i <a.length ; i++ ){
    if (a[i] != 0){
        [ a[j], a[i] ] = [ a[i], a[j] ] 
        j++;
    }
}
console.log(a);