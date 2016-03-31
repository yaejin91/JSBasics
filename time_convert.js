//take the num parameter being passed and return the number of hours and minutes 
//the parameter converts to (ie. if num = 63 then the output should be 1:3). 
//Separate the number of hours and minutes with a colon. 

function TimeConvert(num) { 

  // code goes here
  var hours = 0;
  var minutes = 0;
  var time = "";
  
  minutes = num % 60;
  hours = Math.floor(num / 60);
  
  time = hours + ':' + minutes;
  
  return time; 
         
}
   
// keep this function call here 
TimeConvert(readline());    