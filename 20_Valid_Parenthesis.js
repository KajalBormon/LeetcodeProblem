
//const s = "()[]{}";
const s = "(]";

const mapping = new Map();

mapping.set('(',')');
mapping.set('{','}');
mapping.set('[',']');

const stack = [];

for(let i=0; i<s.length; i++){
    if(mapping.has(s[i])){
        stack.push(mapping.get(s[i]));
        console.log(stack);
    }else if(stack.pop() !== s[i]){
        console.log( false);
    }
}
console.log(stack.length === 0);
