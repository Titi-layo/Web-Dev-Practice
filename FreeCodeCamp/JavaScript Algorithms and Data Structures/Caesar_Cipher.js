/**A common modern use is the ROT13 cipher, where the values of the letters are shifted 
 * by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string. */


function rot13(str) {

let NewStr = "";
let convert;
let reg = /[A-Z]/;
  for (let char in str)
  {
    if (reg.test(str[char]) == true)
    {
      convert = str.charCodeAt(char) + 13;

      if(convert > 90)
      {
          convert = (convert % 90) + 64;
      }

      NewStr = NewStr + String.fromCharCode(convert);
     
    }


    else
    {
       NewStr = NewStr + str[char];
    }

  }

  return NewStr;

}

console.log(rot13("SERR PBQR PNZC"));