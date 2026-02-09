// let d = document.querySelector("button");
// console.log(d);
// d.addEventListener("click", function(){
//   d.style.backgroundColor= 'red';
//   d.style.cursor = 'pointer';
// })

// let inp = document.querySelector("#inp");
// let btn = document.querySelector("#btn")
// btn.addEventListener("click" , function() {
//   inp.click();

// })
// inp.addEventListener("change",function(dat){
//   let c =dat.target.files[0].name;
//   btn.innerHTML="Selected";
// })
// let box = document.querySelector(".classs")
// box.addEventListener("mouseover",function(){
//   box.style.backgroundColor = "#00000055";
// })
// box.addEventListener("mouseout",function(){
//   box.style.backgroundColor = "#ff000055";
// })
// window.addEventListener("mousemove",function(dat){
    
//     box.style.top= dat.clientY+"px";
//     box.style.left= dat.clientX+"px";
//     // console.log(dat.clientX);
//     // console.log(dat.clientY);
// })

// window.addEventListener("keydown",function(dets){
//   console.log(dets.key);
// })
let b = document.querySelector("body")
let c=document.querySelector(".classs")
let d=document.createElement("div");
d.textContent=("Heyy i am harshit dubey");
console.log(d);
d.classList="Harshit"
b.append(d)
