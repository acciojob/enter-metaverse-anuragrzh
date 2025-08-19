//your JS code here. If required.
let clickBtn=document.querySelector("#enterBtn")
let para =document.querySelector("#status")
clickBtn.onclick= function(){
	changeText();
}

 function changeText(){
	para.innerHTML="<h1>Entered Metaverse</h1> "
	
}