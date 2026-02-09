// method

// let obj ={
//     name:"Harshit",
//     age: 20,
//     city: "Lucknow",
//     display: function(){
//         console.log(this.display);
//     }
// }
// console.log(obj.display());  

// call ,apply and bind

// let obj ={name:"Harshit",
// age: 20,
// city: "Lucknow"}

// function abcd(a,b,c){
//     console.log(this);
//     console.log(a,b,c);
// }

// abcd.call(obj);
// abcd.apply(obj,[1,2,3]);
// let bound = abcd.bind(obj,1,2,3);
// bound();

// CLASS
// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }
// let p1 = new Person("Harshit",20);
// console.log(p1);



//CLASSES


// class user{
//     constructor(name,age,color,city){
//         this.name = name;
//         this.age = age;
//         this.color = color;
//         this.city = city;
//         console.log(this);
//     }
//     display(text){
//         let h=document.createElement("H1");
//         h.textContent=`${this.name} : ${text}`;
//         h.style.color="red";
//         document.body.appendChild(h);
//     }
    
// }

// class admin extends user{
//     constructor(name,age,color,city){
//         super(name,age,color,city);
//     }
//     display(text){
//         let h=document.createElement("H1");
//         h.textContent=`${this.name} : ${text}`;
//         h.style.color="blue";
//         document.body.appendChild(h);
//     }
//     remove(){
//         document.querySelectorAll("H1").forEach((h)=>{
//             h.remove();
//     })}
// }
// user.prototype.country = "India";
// let pi=new user("Harshit",20,"Black","Lucknow");
// let admin1 = new admin("Admin",30,"Red","Delhi");


// promises

let pr= new Promise(function(res,rej){
    let r=Math.floor(Math.random()*10);
    if(r>4) res("Success "+r);
    else rej("Failure "+r);
})
// pr.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// async await

async function abcd(){
    try{
        let data = await pr;
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

abcd();