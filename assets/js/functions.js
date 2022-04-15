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

    var body = document.createElement('div');
        body.classList.add('card-body');
        
    var poster = 'https://image.tmdb.org/t/p/w200'
        const moviePoster = element.innerHTML = element.poster_path;
        let photo = poster + moviePoster  

   

    var movieImg = document.createElement("img")
        movieImg.src = photo

    var title = document.createElement('h2');
        title.innerHTML = element.title; 

    

    card.appendChild(movieImg);
    body.appendChild(title);
    card.appendChild(body);
    container.appendChild(card);

  

  

    


    card.onclick = function(){
        
        dataF.forEach(movie => {
            if (movie.id === parseInt(this.id)) {
                createModale(movie);
            }
        });

    
    
  
        
 };
    







    
   
}

function createModale(movie){
    
    var modale = document.createElement('div');
    modale.id = 'modale';
    modale.classList.add('modal');


    var modaleContainer =  document.createElement('div');
        modaleContainer.classList.add('modaleContainer');
        modaleContainer.id = 'modaleContainer';


    var title2 = document.createElement('h2');
    title2.innerHTML = movie.original_title; 

    var close = document.createElement('img');
        close.src = "assets/img/close.png";
        close.classList.add('closeModaleBtn');
        close.addEventListener('click', function(){
            this.parentNode.remove();
        })

    var date = document.createElement('p');
        date.innerHTML = "Date de Sortie: " +movie.release_date;

    var popularity = document.createElement('p');
        
        popularity.innerHTML = 'Note: ' + movie.vote_average

    var poster = 'https://image.tmdb.org/t/p/w200'
    const moviePoster = movie.innerHTML = movie.poster_path;
    let photo = poster + moviePoster  

    var movieImg = document.createElement("img")
        movieImg.src = photo

    var synopsis = document.createElement("p")
        synopsis.innerHTML = movie.overview


    
   



    modale.appendChild(modaleContainer);
    modale.appendChild(close);
    modaleContainer.appendChild(movieImg)
    modaleContainer.appendChild(title2);
    modaleContainer.appendChild(date)
    modaleContainer.appendChild(popularity)
    modaleContainer.appendChild(synopsis)
    
    main.appendChild(modale);

    /* FETCH YOUTUBE TRAILER */

    var id = movie.id
   
    fetch('https://api.themoviedb.org/3/movie/' + id +  "/videos?api_key=378bed09fc9b527f1b74e7a56ff4fe3c") .then(response => response.json())
    .then(data => {
     

    var movieTrailerUrl = data.results.find(element => element.name.toLowerCase() === 'Official Trailer'.toLowerCase()).key;


    var youtube2 = 'https://www.youtube.com/embed/' + movieTrailerUrl;


    var youtubeTrailer = document.createElement('iframe')
        youtubeTrailer.classList.add("youtubeTrailer")
        youtubeTrailer.id = 'youtubeTrailer'
        youtubeTrailer.setAttribute('src', youtube2)
        youtubeTrailer.setAttribute('allowFullscreen', 'True')
        youtubeTrailer.setAttribute("frameborder", "0")
        youtubeTrailer.style.width = "640px";
        youtubeTrailer.style.height = "480px";
    
        modaleContainer.appendChild(youtubeTrailer)
    
});

}




    let slider = tns({
        container: '.cartes',
        items: 20,
        slideBy: "page",
        speed: 800,
        loop: false,
        nav: false,
        controlsContainer: '#controls',
        responsive: {
            1600:{
                items: 5,
                gutter: 20
            },
            1024:{
                items: 3,
                gutter: 20
            },

            600:{
                items: 2,
                gutter:20
            },

            300:{
                items:1,
                gutter:20 
            },
        
        }

        

        
    
    })
    let slider2 = tns({         
        container: '.cartes2',         
        items: 20,         
        mouseDrag: true,         
        slideBy: 'page',         
        speed: 800,         
        loop: false,         
        touch: true,        
        nav: false,         
        autoHeight: true,         
        controlsContainer: '#controls2',         
        responsive: {             
            2560: {                 
                items: 9,                 
                gutter: 20,             
            },             
            1900: {                 
                items: 7,                
                gutter: 20,             
            },             
            1750: {                 
                items: 6,                 
                gutter: 20,             
            },            
             1400: {                
                items: 5,                 
                gutter: 20,             
            },             
            1150: {                 
                items: 4,                 
                gutter: 10,             
            },             
            1024: {                 
                items: 3,                 
                gutter: 10,             
            },             
            800: {                 
                items: 3,                 
                gutter: 10,             
            },             
            600: {                 
                items: 2,                 
                gutter: 20,             
            },             
            500: {                 
                items: 2,                 
                gutter: 20,             
            },             
            300: {                 
                items: 1,                 
                gutter: 20,            
             },         
            },     
        }); 
    

        let slider3 = tns({
            container: '.cartes3',
            items: 20,
            mouseDrag: true,
            slideBy: 'page',
            speed: 800,
            loop: false,
            touch: true,
            nav: false,
            autoHeight: true,
            controlsContainer: '#controls3',
            responsive: {
                2560: {
                    items: 9,
                    gutter: 0,
                },
                1900: {
                    items: 7,
                    gutter: 10,
                },
                1750: {
                    items: 6,
                    gutter: 20,
                },
                1400: {
                    items: 5,
                    gutter: 10,
                },
                1150: {
                    items: 4,
                    gutter: 10,
                },
                1024: {
                    items: 3,
                    gutter: 10,
                },
                800: {
                    items: 3,
                    gutter: 10,
                },
                600: {
                    items: 2,
                    gutter: 10,
                },
                500: {
                    items: 2,
                    gutter: 10,
                },
                375: {
                    items: 2,
                    gutter: 10,
                },
                300: {
                    items: 1,
                    gutter: 10,
                },
            },
        });

};







