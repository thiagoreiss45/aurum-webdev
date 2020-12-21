/* 
  The purpose of this function is just to
  show the result in console and screen, as a HTML element. 
*/

const showHtml = (function_return, id) => {
  document.getElementById(id).innerHTML = function_return;
  console.log(id + ": " + function_return);
}
    
