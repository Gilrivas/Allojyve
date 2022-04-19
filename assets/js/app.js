window.onload = () => {
  var main = document.getElementById("main");
  var popularList;
  var filmsSortis;
  var aVenirList;
  createApp(main);

  var burger2 = document.getElementById('burger');
	var mobileNavArea = document.getElementById('mobileNavArea');

	burger2.addEventListener('click', function(){
    mobileNavArea.classList.remove('none');

    setTimeout(() => {
        mobileNavArea.classList.add('openNav');
    }, 200);
    
 
})
  
}











      