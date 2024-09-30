var str = ["flower","flight","flow"]


if(str.length === 0){
    return "";
}

let prefix = str[0];

for(let i=1; i<str.length; i++){
    while(str[i].indexOf(prefix) !== 0){
        prefix = prefix.substring(0, prefix.length-1);
        console.log(prefix);
        if(prefix === 0){
            return "";
        }
    } 
}

//console.log(prefix);
