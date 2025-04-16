let local5=JSON.parse(localStorage.getItem("loc5"))||[]
let formData=(event)=>{
    event.preventDefault();
    let image=document.getElementById("image").value;
    let type=document.getElementById("type").value;
    let price=document.getElementById("price").value;
    let id=Date.now();
   let obj={id,image,type,price};
   local5.push(obj)
   
   localStorage.setItem("loc5",JSON.stringify(local5));
    console.log(local5);
    document.getElementById("image").value=null;
    document.getElementById("type").value=null;
    document.getElementById("price").value=null;
    
}
document.querySelector("form").addEventListener("submit",formData)

