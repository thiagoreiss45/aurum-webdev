/* 
  The purpose of this function is just to
  show the result on the screen, as a HTML element. 
*/

const showHtml = (function_return, id) => {
  document.getElementById(id).innerHTML = function_return;
  console.log(id + ": " + function_return);
}
    
