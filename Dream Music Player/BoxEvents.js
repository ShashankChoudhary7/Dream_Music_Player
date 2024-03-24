
var outerDiv = document.getElementById('outer');

outerDiv.addEventListener('mouseover', fuction(){
         console.log('Mouse Over');	
});

outerDiv.addEventListener('mouseout', fuction(){
         console.log('Mouse Out');	
});

var searchInput = document.getElementById('search');

searchInput.addEventListener('keypress', fuction(){
	console.log('Key Pressed');
});

//document.addEventListener('keydown', fuction(event){
//	console.log('Key Down' , event.keycode);
//});