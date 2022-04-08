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
        card.setAttribute("data-id", index)
  
    var title = document.createElement('h2');
        title.innerHTML = element.title;

    var poster = 'https://image.tmdb.org/t/p/w300'
        const moviePoster = element.innerHTML = element.poster_path;
        let photo = poster + moviePoster
        

    var movieImg = document.createElement("img")
    movieImg.src = photo
    
   
    

    card.appendChild(movieImg)
    card.appendChild(title);
    cartes.appendChild(card);

    
    }

    // (function(){
    //     const sliders = [...document.querySelectorAll(".card__body--show")];
    //     const arrowNext = document.querySelector("#next")
    //     const arrowBefore = document.querySelector("#before")
    //     let value;

    //     arrowNext.addEventListener('click', ()=>changePosition(+5))
    //     arrowBefore.addEventListener('click', ()=>changePosition(-5))

    //   function changePosition(change){
    //       const currentElement = Number(document.querySelector(".card__body--show").dataset.id);

    //       value = currentElement;
    //       value+= change;

    //       if(value === 0 || value == sliders.length+1){
    //           value = value === 0 ? sliders.length: 1;
    //       }

          
    //       sliders[value-1].classList.toggle('card__body--show');
    //       console.log(sliders)
    //   }
       
    // })()

   
}





