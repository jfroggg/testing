import {items} from "./items.js";


// <div class="card col-md-6">
//                 <h5 class="card-header">Featured</h5>
//                 <div class="card-body">
//                   <h5 class="card-title">Special title treatment</h5>
//                   <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
//                   <a href="#" class="btn btn-primary">Go somewhere</a>
//                 </div>
//               </div>


var customRows=document.querySelector("#customRows")

var customArray=[];
var length=6;

if(items.length<length){
    length=items.length;
}


for(var i=0;i<length;i++){
    findRandom(); 
}

function findRandom(){
    var randomNumber=Math.floor(Math.random()*items.length);
    console.log(randomNumber);
        if(customArray.includes(items[randomNumber])){
        findRandom();
        }
        else{
        customArray.push(items[randomNumber]);
        }
}

console.log(customArray);

customArray.forEach(element => {
   
    var htmlString='<div class="col-sm-6 col-md-4"><div class="card my-2 border-jason text-center shadow-lg rounded">';
    var header="<h5 class='card-header'>"+element.header+"</h5>";
    var title='<div class="card-body"><h5 class="card-title">'+element.title+'</h5>'
    var text='<p class="card-text">'+element.text+'</p>'
    var link='<a href="'+element.link+'" class="btn btn-orange">Go somewhere</a></div></div></div>'
    customRows.innerHTML+=htmlString+header+title+text+link;
  
});



//This below was the base html for each card from the inital prototype

{/* <div class="card col-md-4 my-2">
    <h5 class="card-header">Item 3</h5>

    <div class="card-body">
        <h5 class="card-title">Link's card</h5>
        <p class="card-text">Meow Meow Meow</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>

</div>  */}


