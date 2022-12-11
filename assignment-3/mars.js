function marsExploration(s) {
    // Write your code here    
    let number = s.length/3;
    let sos = "";
    let count = 0;
    for(let i=0; i<number; i++){
        sos += "SOS";
    }
    for(let i=0; i<sos.length; i++){
        if(s[i] != sos[i]) count++;
    }
    return count;
}
console.log(marsExploration("SSSSSS"))
console.log(1-"true");