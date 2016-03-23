//Using the JavaScript language, have the function LongestWord(sen) take the sen parameter 
//being passed and return the largest word in the string. 
//If there are two or more words that are the same length, 
//return the first word from the string with that length. Ignore punctuation.

function LongestWord(sen) { 

  //.match() finds and matches characters in () and returns them in an array.
  //So there is no need to use .split() in this case, because I have to filter out special symbols.
  //The /\w+/ pattern specifies to match one or more of any of the following characters: 
  //A-Z, a-z, 0-9, and the underscore character.
  
  var longest="";
  var words=sen.match(/\w+/g);
  
  for(var i=0; i<words.length; i++){
    //It's not words.length - 1 or else I'll end one short in the for loop.
    if(words[i].length > longest.length){
      longest = words[i];
    }
  }
  
  return longest; 
         
}
   
// keep this function call here 
LongestWord(readline());           