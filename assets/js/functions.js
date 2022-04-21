	function createElement(el, classname, id, container) {
		var element = document.createElement(el);
		element.classList.add(classname);
		element.id = id;

		container.appendChild(element);
	}

	function createCard(array, container, index) {
		for (let index = 0; index < array.length; index++) {
			const element = array[index];
			var card = document.createElement('div');
			card.classList.add('card');
			card.id = element.id;

			var body = document.createElement('div');
			body.classList.add('card-body');

			var poster = 'https://image.tmdb.org/t/p/w200';
			const moviePoster = (element.innerHTML = element.poster_path);
			let photo = poster + moviePoster;

			var movieImg = document.createElement('img');
			movieImg.src = photo;

			var title = document.createElement('h2');
			title.innerHTML = element.title;

			card.appendChild(movieImg);
			body.appendChild(title);
			card.appendChild(body);
			container.appendChild(card);

			card.onclick = function () {
				setTimeout(() => {
					getMovieInfos(this.id).then((res) => {
						createModale(res);
					});
				}, 200);

			};
		}
		var containerSlider = ".cartes";
		var controlsContainer = "#controls";

		if (index === 2) {
			containerSlider = ".cartes2";
			controlsContainer = "#controls2";
		}

		if (index === 3) {
			containerSlider = ".cartes3";
			controlsContainer = "#controls3";
		}

		let slider = tns({
			container: containerSlider,
			items: 20,
			slideBy: 'page',
			speed: 800,
			loop: false,
			nav: false,
			controlsContainer: controlsContainer,
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
					gutter: 20,
				},
				1024: {
					items: 4,
					gutter: 20,
				},
				800: {
					items: 3,
					gutter: 20,
				},
				750: {
					items: 3,
					gutter: 10,
				},
				601: {
					items: 3,
					gutter: 20,
				},
				501: {
					items: 3,
					gutter: 20,
				},
				395: {
					items: 2,
					gutter:20,
				},
				300: {
					items: 1,
					gutter: 50,
				},
			},
		});
		
	}

	function getMovieInfos(id) {
		return new Promise((resolve, reject) => {
			var xhr = new XMLHttpRequest();
			xhr.open(
				'GET',
				'https://api.themoviedb.org/3/movie/' +
					id +
					'?api_key=378bed09fc9b527f1b74e7a56ff4fe3c&language=fr-FR'
			);
			xhr.onload = () => {
				var res = JSON.parse(xhr.response);
				resolve(res);
			};
			xhr.send();
		});
	}
	
	function createAlert(movies) {

		createElement('div', 'alert', 'alert', document.getElementById('main'));
		var close = document.createElement('img');
		close.src = "assets/img/close.png"
		close.classList.add('close3');
		close.addEventListener('click', function () {
			this.parentNode.remove();
		})
		document.getElementById('alert').appendChild(close);
		
		var title3 = document.createElement('h2');
		title3.innerHTML = "New Releases";
		
		document.getElementById('alert').appendChild(title3);
		
		var ul = document.createElement('ul');
		ul.id = "alertUl";
		document.getElementById('alert').appendChild(ul);
		
		console.log(movies);
		movies.forEach(movie => {
			var li = document.createElement('li');
			li.innerHTML = movie;
			
			document.getElementById('alertUl').appendChild(li);
		});
		
	}

	Array.prototype.diff = function (a) {
		return this.filter(function (i) {
			return a.indexOf(i) < 0;
		});
	};
	  
	function checkNewRelease(list, listName) {
	
		return new Promise((resolve, reject) => {
			var arrayId = [];
			list.forEach(element => {
				arrayId.push(element.id);
			});
			
			if (!localStorage.getItem(listName)) {
				localStorage.setItem(listName, JSON.stringify(arrayId));
				return;
			}
			
			var lastArrayId = JSON.parse(localStorage.getItem(listName));
			localStorage.setItem(listName, JSON.stringify(arrayId));
			console.log(lastArrayId)
			
			var newReleaseId = arrayId.diff(lastArrayId);
			console.log(newReleaseId)
			var newReleaseName = [];
			newReleaseId.forEach(function (id, i) {
				getMovieInfos(id).then(res => {
					newReleaseName.push(res.title);
					if (i + 1 === newReleaseId.length) {
						resolve(newReleaseName)
					}
				})
			});
		
		})
		
	}

	  

	function createModale(movie) {
		var modale = document.createElement('div');
		modale.id = 'modale';
		modale.classList.add('modal');

		var modaleContainer = document.createElement('div');
		modaleContainer.classList.add('modaleContainer');
		modaleContainer.id = 'modaleContainer';

		var title2 = document.createElement('h2');
		title2.innerHTML = movie.original_title;

		var close = document.createElement('img');
		close.src = 'assets/img/close.png';
		close.classList.add('closeModaleBtn');
		close.addEventListener('click', function () {
			this.parentNode.remove();
		});

		var date = document.createElement('p');
		date.innerHTML = 'Date de Sortie: ' + movie.release_date;

		var popularity = document.createElement('p');

		popularity.innerHTML = 'Note: ' + movie.vote_average;

		var poster = 'https://image.tmdb.org/t/p/w200';
		const moviePoster = (movie.innerHTML = movie.poster_path);
		let photo = poster + moviePoster;

		var movieImg = document.createElement('img');
		movieImg.src = photo;

		var synopsis = document.createElement('p');
		synopsis.innerHTML = movie.overview;

		var imgModale = document.createElement('div');
		imgModale.id = 'imgModale';
		imgModale.classList = 'imgModale';

		var modaleText = document.createElement('div');
		modaleText.id = 'modaleText';
		modaleText.classList = 'modaleText';

		var modaleSyp = document.createElement('div');
		modaleSyp.id = 'synopsisBox';
		modaleSyp.classList = 'synopsisBox';

		var modalYoutube = document.createElement('div');
		modalYoutube.id = 'modalVideo';
		modalYoutube.classList = 'modalVideo';

		var modaleContainer2 = document.createElement('div');
		modaleContainer2.id = 'modaleContainer2';
		modaleContainer2.classList = 'modaleContainer2';

		var synopsisH2 = document.createElement('h2');
		synopsisH2.textContent = 'Synopsis';

		var bandeAnnonce = document.createElement('h2');
		bandeAnnonce.textContent = 'Bande Annonce';
		var boxTitleImg = document.createElement('div')
		boxTitleImg.classList = 'boxTitleImg'
		boxTitleImg.id = 'boxTitleImg'



		modale.appendChild(modaleContainer);
		modalYoutube.appendChild(bandeAnnonce);
		modaleContainer2.appendChild(boxTitleImg);
		modaleContainer.appendChild(modaleContainer2);
		modale.appendChild(close);
		modaleContainer2.appendChild(modaleText);
		modaleContainer2.appendChild(imgModale);
		boxTitleImg.appendChild(modaleText)
		boxTitleImg.appendChild(imgModale)
		imgModale.appendChild(movieImg);
		modaleText.appendChild(title2);
		modaleText.appendChild(date);
		modaleText.appendChild(popularity);
		modaleContainer2.appendChild(modaleSyp);
		modaleSyp.appendChild(synopsisH2);
		modaleSyp.appendChild(synopsis);

		main.appendChild(modale);

		/* FETCH YOUTUBE TRAILER */

		var id = movie.id;

		fetch(
			'https://api.themoviedb.org/3/movie/' +
				id +
				'/videos?api_key=378bed09fc9b527f1b74e7a56ff4fe3c'
		)
			.then((response) => response.json())
			.then((data) => {
				var movieTrailerUrl = data.results.find(
					(element) =>
						element.name.toLowerCase() === 'Official Trailer'.toLowerCase()
				).key;

				var youtube2 = 'https://www.youtube.com/embed/' + movieTrailerUrl;

				var youtubeTrailer = document.createElement('iframe');
				youtubeTrailer.classList.add('youtubeTrailer');
				youtubeTrailer.id = 'youtubeTrailer';
				youtubeTrailer.setAttribute('src', youtube2);
				youtubeTrailer.setAttribute('allowFullscreen', 'True');
				youtubeTrailer.setAttribute('frameborder', '0');
			

				modalYoutube.appendChild(youtubeTrailer);
				modaleContainer2.appendChild(modalYoutube);
			});
	}


