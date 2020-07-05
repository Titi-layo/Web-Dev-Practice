/* Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same 
way both forward and backward, ignoring punctuation, case, and spacing. */


function palindrome(str)
{
let j = 0;
str = str.toLowerCase();
var NewStr = str.split(/[^a-z0-9]/);
str = NewStr.join("");

for (let i = (str.length - 1) ; i >= 0 ; i--)
{
  if(str[i] != str[j])
  {
    return false;
  }
  j++; 
}
  
  return true;

}


console.log(palindrome("race car"));