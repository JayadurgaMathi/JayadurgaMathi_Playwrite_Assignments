function reverseString(str) {
    let splitVar = str.split(""); // Convert input into characters
    let storeVar = "";
    for (let i = splitVar.length - 1; i >= 0; i--) {
        storeVar = storeVar + splitVar[i];
    }
    return storeVar;
}function isPalindrome(str1) {
    let reversed = reverseString(str1); //  reverse whatever string is passed to me
    if (str1 === reversed) {
        return true;
    } else {
        return false;
    }}
let str1 = "malayalam";
let str2 = "hello";
console.log("Reverse:", reverseString(str1));
console.log("Palindrome:", isPalindrome(str1));
console.log("Reverse:", reverseString(str2));
console.log("Palindrome:", isPalindrome(str2));