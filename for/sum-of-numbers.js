// subtask-1

// let sum = 0;
// for(let i=91; i<=129; i++){

//     if(i % 2 === 1){
//         sum+=i;
//     }
// }

// console.log(sum);


// subtask-2

// let sum2 = 0;
// for(j=51; j<=85; j++){

//     if(j % 2 === 0){
//         sum2+=j;
//     }
// }

// console.log(sum2);

for(let i=91; i<=129; i++){
    let sum = 0;

    if(i % 2 === 1){
        sum+=i;
        console.log(sum);
    }
  
}

console.log('-------------------------------------');

let j = 91;
let sum2 = 0;
while(j<=129){
    if(j % 2 !== 0){
        sum2+=j;
    }
    j++
}

console.log(sum2);


console.log('-------------------------------------');

let k = 206;
let sum3 = 0;
while(k<=311){
    if(k % 2 === 0){
        sum3+=k;
    }
    k++
}

console.log(sum3);