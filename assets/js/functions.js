function createElement(el, classname, id, container){
    var element = document.createElement(el);
        element.classList.add(classname);
        element.id = id;
      
    container.appendChild(element);
}
  
function createCard(array, container){
    for (let index = 0; index < array.length; index++) {
    const element = array[index];
    var card = document.createElement('div');
        card.classList.add('card');
        card.id = element.id;
        
    var title = document.createElement('h2');
        title.innerHTML = element.title;

    var poster = 'https://image.tmdb.org/t/p/w200'
        const moviePoster = element.innerHTML = element.poster_path;
        let photo = poster + moviePoster

    var itemSlide = document.createElement("div")
        itemSlide.classList.add('itemSlide')
        

    var movieImg = document.createElement("img")
    movieImg.src = photo
    
   
    cartes.appendChild(itemSlide);
    itemSlide.appendChild(card);
    card.appendChild(movieImg);
    card.appendChild(title);

    }
    

    let slider = tns({
        container: '.cartes',
        items: 20,
        mouseDrag: true,
        slideBy: 'page',
        speed: 700,
        loop: false,
        touch: true,
        
        center: false,
        
        nav: false,
        controlsContainer: '#controls',
        responsive: {
            1600:{
                items: 5,
                gutter: 20
            },
            1024:{
                items: 3,
                gutter: 10
            },

            600:{
                items: 2,
                gutter:20
            },

            420:{
                items:1,
                gutter:20 
            }
        
        }
        
    })

   
}




