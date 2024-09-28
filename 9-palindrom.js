function isPalindrome(x) {
  let reversed = x.toString().split('').reverse().join('');
   return (x.toString() === reversed);
  
};
console.log(isPalindrome(121));


/* --------------Another Way to get Palindrome------------ */

/* function isPalindrome(x){
    if(x<0){
        return false;
    }
    let reversed = 0;
    while(x != 0){
        var remainder = x % 10;
        reversed = reversed * 10 + remainder;
        x = x/10;
    }
    return (x === reversed);
}

console.log(isPalindrome(121)); */



/* ---------------using class ------------ */
/* class Palindrome{
    isPalindrome(x){
        if(x<0){
            return false;
        }
        let reversed = 0;
        while(x != 0){
            let remainder = x % 10;
            reversed = reversed * 10 + remainder;
            x = x/10;
        }
        return (x === reversed);
    }
}

const pal = new Palindrome();
console.log(pal.isPalindrome(-121)); */