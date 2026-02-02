// subtask-1

for(i=61; i<=100; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
    else{
        continue;
    }
}

console.log('-----------------------------------------------------');
// subtask-2

for(let j=78; j<=98; j++){
    if(j % 2 === 1){
        continue;
    }
    
    console.log(j);
}
