function showPassword(){
  var x = document.getElementById("passwordlogin");
  var eyeicon = document.getElementById("eyePassword");
  if(x.type==="password"){
      x.type="text";
      eyeicon.classList.add("fa-eye");
      glassshow.classList.add("glass-animate");
      eyeicon.classList.remove("fa-eye-slash");
     
      glassshow.classList.remove("glass-animate1");
     
  }
  else{
      x.type="password";
      eyeicon.classList.add("fa-eye-slash");
      glassshow.classList.add("glass-animate1");
      eyeicon.classList.remove("fa-eye"); 
     
      glassshow.classList.remove("glass-animate");
  }
}
// //get the email input length
var hide = document.querySelector(".eye-svgl");
var hide2 = document.querySelector(".eye-svgr");

    hide.style.display = "none"
    hide2.style.display = "none";
    console.log(hide)
document.querySelector("#emaillogin").addEventListener("input",function(){
    var length = this.value.length;
    var degree = length*3;
    
    var eyemove1 = document.querySelector(".eye-svgl");
    var eyemove2 = document.querySelector(".eye-svgr");
    hide.style.display = "block"
    hide2.style.display = "block";
    eyemove1.style.transform="rotate(-"+degree+"deg)";
    eyemove2.style.transform="rotate(-"+degree+"deg)"; 
});
  
var glassshow = document.querySelector(".glass-img");
function passValue(){
    glassshow.classList.add("glass-animate1");

}


  

