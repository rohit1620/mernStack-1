let local5=JSON.parse(localStorage.getItem("loc5"));
// console.log(local5);
let myFun=(local5)=>{
      document.getElementById("show_data").innerHTML=null;
local5.forEach((el,index)=>{
  
    let img=document.createElement("img");
    let h3=document.createElement("h3");
    let p=document.createElement("p");
    let div=document.createElement("div");
    let btn=document.createElement("button");


    img.src=el.image;
    h3.innerText=el.type;
    p.innerText="Price:-"+" "+el.price;
     btn.innerText="Remove";
    div.append(img,h3,p,btn);
    console.log(div);
    
    document.getElementById("show_data").append(div)
    
})
}

myFun(local5)
