window.onload = () => {
  var main = document.getElementById("main");
  var popularList;
  var filmsSortis;
  var aVenirList;
  createApp(main);

  var burger2 = document.getElementById('burger');
  var closeNav = document.getElementById('closeNav');
	var mobileNavArea = document.getElementById('mobileNavArea');

  burger2.addEventListener('click', function(){
    mobileNavArea.classList.remove('none');

    setTimeout(() => {
        mobileNavArea.classList.add('openNav');
    }, 200);
    
    this.classList.add('none');
    closeNav.classList.remove('none');
})

closeNav.addEventListener('click', function(){

    mobileNavArea.classList.remove('openNav');

    setTimeout(() => {
        mobileNavArea.classList.add('none');
    }, 200);
   
    this.classList.add('none');
    burger2.classList.remove('none');
    
})
  
}











      