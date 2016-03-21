//Using the JavaScript language, 
//have the function FirstReverse(str) take the str parameter being passed 
//and return the string in reversed order.

function FirstReverse(str) { 

  // code goes here
  var reversedStr="";
  //if reversedStr is just defined, it will be undefined on the first run.
  
  for(var i = str.length - 1; i >= 0; i--){
    reversedStr = reversedStr + str.charAt(i);
  }
  return reversedStr; 
         
}
   
// keep this function call here 
FirstReverse(readline());           
