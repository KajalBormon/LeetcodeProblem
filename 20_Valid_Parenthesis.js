
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
     
    }else if(stack.pop() !== s[i]){
        return false;
    }
}
return stack.length === 0;
