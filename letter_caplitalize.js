//Capitalize the first letter of each word in a string.

function LetterCapitalize(str) { 

  // code goes here
  var splitStr=str.split(" ");
  var newStr="";
  
  for(var i=0; i<splitStr.length; i++){
    newStr += splitStr[i][0].toUpperCase() + splitStr[i].substring(1,splitStr[i].length) + " ";
  }
  
  return newStr; 
         
}
   
// keep this function call here 
LetterCapitalize(readline());                            
