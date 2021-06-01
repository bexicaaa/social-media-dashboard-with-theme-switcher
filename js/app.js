
let lightMode = localStorage.getItem("lightMode");
const lightModeToggle = document.querySelector("#light-mode-toggle");




//Check if light mode in enabled
//if it is enabled turn it off
//if it is disabled turn it on


const enableLightMode = () => {
  //1. add the class darkmode to the body
  document.body.classList.add('body-light-theme');
  //2. update lightMode in the Local Storage, so that we know that setting is for next time somebody comes
  localStorage.setItem('lightMode', 'enabled'); //key-lightMode, value-enabled


}

//opposite of the previous function 
const disableLightMode = () => {
  document.body.classList.remove('body-light-theme'); 
  localStorage.setItem('lightMode', null); 


}


lightModeToggle.addEventListener("click", () => {
  lightMode = localStorage.getItem('lightMode');
  if (lightMode !== 'enabled') {
    enableLightMode();
  } else {
    disableLightMode();
  }
});
