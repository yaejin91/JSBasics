//Using the JavaScript language, 
//have the function FirstFactorial(num) take the num parameter being passed
//and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). 

function FirstFactorial(num) { 

  // code goes here
  var factorial = 1;
  
  for (var i = 1; i <= num; i++){
    factorial = factorial * i;
  }
  return factorial; 
         
}
   
// keep this function call here 
FirstFactorial(readline());           
