
//  PERLOADING THE LOCALSTORAGE ->
let udata = JSON.parse(localStorage.getItem("userdata"));
console.log(udata);
if(udata !=null){
    loaddata();
}


//ADDIND ALL THE EVENTLISNNER

const update = document.querySelectorAll('.update')
update.forEach(ele =>{
    ele.addEventListener('click',function (){
        console.log("update is called")
    })
})


const del = document.querySelectorAll('.delete')
update.forEach(ele =>{
    ele.addEventListener('click',function (){
        console.log("del is called")
    })
})












//   ALL THE FUNCTION IS HERE -> 



function onaction(){
    let name = document.querySelector("#name").value ;
    let desc = document.querySelector("#desc").value ;
    let p = document.querySelector("#p").value ;
    console.log(name + " " + desc + " " + p );

    let data = {name: name , desc : desc , price : p };
   
 
    let udata1= [] ;
console.log(localStorage.getItem("userdata") );
    if(JSON.parse(localStorage.getItem("userdata") )!= null){
        udata1 = JSON.parse(localStorage.getItem("userdata"))
        console.log(udata1)
        udata1.push(data);
    }else{
      //  console.log(udata1)
        udata1.push(data);
       
    }
    localStorage.setItem("userdata" , JSON.stringify(udata1));

    make(data);
  

   
}

function make(obj){
    let table = document.querySelector("#tbody");
    let tr = document.createElement("tr");
    let n = document.createElement("td")
    let p = document.createElement("td")
    let dec = document.createElement("td")
    let b1 =document.createElement("button");
    let b2 =document.createElement("button");

    n.innerText = obj.name;
    p.innerText = obj.price
    dec.innerText = obj.desc
    b1.innerText= " UPDATE"
    b1.classList.add('update')
    b2.innerText= " DEL"
    b2.classList.add('delete')
    tr.append(n,dec,p,b1,b2)
    table.append(tr);
    
}

function loaddata(){
            for(let i=0;i<udata.length;i++){
                make(udata[i]);    
            }
}
