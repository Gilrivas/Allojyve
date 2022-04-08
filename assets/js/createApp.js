function createApp(main){


   // HEADER //
    createElement('header', 'header', 'header', main);
    createElement('nav', 'nav', 'nav', header)
    createElement('div', 'boxImg', 'logo', nav);
    createElement('ul', 'menu', 'menu', nav)
    createElement('img', 'img' , 'img', logo)
    img.src = 'assets/img/logo.png';
    //HEADER LINKS//
    createElement('a', 'accueil', 'accueil', menu)
    createElement('a', 'populaires', 'populaires', menu)
    createElement('a', 'lastMovie', 'lastMovie', menu)
    createElement('a', 'aVenir', 'aVenir', menu)

    accueil.textContent = "Accueil"
    accueil.href =  "index.html"

    populaires.textContent = "Populaires"
    populaires.href = "#"

    lastMovie.textContent = "Derniers Sortis"
    lastMovie.href = "#"

    aVenir.textContent = "À venir"
    aVenir.href = "#"

    //FIN DE HEADER LINKS//
    
    //HEADER YOUTUBE VIDEO//

    createElement('div', 'boxMain', 'boxMain', header);
    createElement('div', 'boxTittle', 'boxTittle', boxMain);
    createElement('div', 'boxMorbius', 'boxMorbius', boxMain)
    createElement('div', 'boxTeaser', 'boxTeaser', boxMain)
    createElement('div', 'boxVideo', 'boxVideo', boxTeaser)
    createElement('iframe', 'youtube', 'youtube', boxVideo)
    createElement('div', 'boxText', 'boxText', boxTeaser)
    createElement('h1', 'tittle' , 'tittle', boxTittle)
    createElement('h2', 'morbius' , 'morbius', boxMorbius)
    createElement('h2', 'morbiusTitle', 'morbiusTitle', boxText)
    createElement('p', 'morbiusText', 'morbiusText', boxText)

    youtube.setAttribute("src", "https://www.youtube.com/embed/oZ6iiRrz1SY",)
    youtube.setAttribute('allowFullscreen', 'True')
    youtube.setAttribute("frameborder", "0")
    youtube.style.width = "640px";
    youtube.style.height = "480px";

    tittle.textContent = 'Bande-Annonce à ne pas manquer'
    morbius.textContent = 'MORBIUS'
    morbiusTitle.textContent = 'Film : Action, Aventure, Fantastique'
  	morbiusText.textContent = 'Gravement atteint d’une rare maladie sanguine, et déterminé à sauver toutes les victimes de cette pathologie, le Dr Morbius tente un pari désespéré. Alors que son expérience semble être un succès, le remède déclenche un effet sinistre. '










    //FIN DE HEADER YOUTUBE VIDEO//
    
//FIN DE HEADER//

    //SECTION FILM POPULAIRES//
    
    createElement('section', 'section', 'popular', main);
    createElement('div', 'titleSection', 'titleSection', popular);
    createElement('div', 'leftBoton', 'leftBoton', popular);
    createElement('div', 'cartes', 'cartes', popular);

    
    createElement('div', 'rightBoton', 'rightBoton', popular);

    createElement('img', 'leftArrow', 'before', leftBoton);
    before.src = "assets/img/leftArrow.png"

    createElement('img', 'rightArrow', 'next', rightBoton);
    next.src = "assets/img/rightArrow.png"

    createElement('h2', 'h2Section', 'h2Section', titleSection);

    h2Section.textContent = "Films + populaires"




    


    
    


    

    

   
    


  
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=378bed09fc9b527f1b74e7a56ff4fe3c&language=en-US&page=1') .then(response => response.json())
    .then(data => {
      var popularList = data.results;
      
      createCard(popularList, document.getElementById('popular'));
    });

  
  }