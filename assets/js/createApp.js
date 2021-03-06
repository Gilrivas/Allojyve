function createApp(main) {
	// HEADER //

	
	createElement('nav', 'nav', 'nav', main);

	createElement('div', 'none', 'mobileNavArea', main)
	createElement('header', 'header', 'header', main);
	

	
	createElement('div', 'boxImg', 'logo', nav);
	createElement('a', 'linkIndex', 'linkIndex', logo);
	createElement('ul', 'menu', 'menu', nav);
	createElement('img', 'img', 'img', linkIndex);
	img.src = 'assets/img/logo.png';

	createElement('img', 'bars', 'burger', nav)
	burger.src = 'assets/img/burger.png'

	createElement("img", "none", "closeNav", nav)
	closeNav.src = 'assets/img/close.png'
	linkIndex.setAttribute('href', 'index.html');
	


	createElement('a', 'populaires', 'populaires2', mobileNavArea);
	createElement('a', 'lastMovie', 'lastMovie2', mobileNavArea);
	createElement('a', 'aVenir', 'aVenir2', mobileNavArea);

	populaires2.textContent = 'Populaires';
	populaires2.href = '#popular';

	lastMovie2.textContent = 'Derniers Sortis';
	lastMovie2.href = '#nowPlaying';

	aVenir2.textContent = 'À venir';
	aVenir2.href = '#upcoming';
	
	


	//HEADER LINKS//

	createElement('a', 'populaires', 'populaires', menu);
	createElement('a', 'lastMovie', 'lastMovie', menu);
	createElement('a', 'aVenir', 'aVenir', menu);

	populaires.textContent = 'Populaires';
	populaires.href = '#popular';

	lastMovie.textContent = 'Derniers Sortis';
	lastMovie.href = '#nowPlaying';

	aVenir.textContent = 'À venir';
	aVenir.href = '#upcoming';

	//FIN DE HEADER LINKS//

	//HEADER YOUTUBE VIDEO//

	createElement('div', 'boxMain', 'boxMain', header);
	createElement('div', 'headerTitle', 'headerTitle', boxMain);
	createElement('div', 'boxMorbius', 'boxMorbius', boxMain);
	createElement('div', 'boxTeaser', 'boxTeaser', boxMain);
	createElement('div', 'boxVideo', 'boxVideo', boxTeaser);
	createElement('iframe', 'youtube', 'youtube', boxVideo);
	createElement('div', 'boxText', 'boxText', boxTeaser);
	createElement('h1', 'tittle', 'tittle', headerTitle);
	createElement('h2', 'morbius', 'morbius', boxMorbius);
	createElement('img', 'petitCarre', 'petitCarre', headerTitle);
	petitCarre.src = 'assets/img/carres.png';
	createElement('h2', 'morbiusTitle', 'morbiusTitle', boxText);
	createElement('p', 'morbiusText', 'morbiusText', boxText);

	youtube.setAttribute('src', 'https://www.youtube.com/embed/oZ6iiRrz1SY');
	youtube.setAttribute('allowFullscreen', 'True');
	youtube.setAttribute('frameborder', '0');

	tittle.textContent = 'Bande-Annonce à ne pas manquer';
	morbius.textContent = 'MORBIUS';
	morbiusTitle.textContent = 'Film : Action, Aventure, Fantastique';
	morbiusText.textContent =
		'Gravement atteint d’une rare maladie sanguine, et déterminé à sauver toutes les victimes de cette pathologie, le Dr Morbius tente un pari désespéré. Alors que son expérience semble être un succès, le remède déclenche un effet sinistre. ';

	//FIN DE HEADER YOUTUBE VIDEO//

	//FIN DE HEADER//

	//SECTION FILM POPULAIRES//

	createElement('section', 'section', 'popular', main);
	createElement('div', 'titleSection', 'titleSection', popular);
	//création img icon dans section films populaire
	createElement('img', 'boxImgS', 'boxImgS', titleSection);
	boxImgS.src = './assets/img/cinema.svg';
	boxImgS.alt = "icon d'une  pellicule de film";

	createElement('div', 'controls', 'controls', popular);
	createElement('div', 'mySlider', 'mySlider', popular);

	createElement('div', 'leftBoton', 'leftBoton', controls);
	createElement('h2', 'h2Section', 'h2Section', titleSection);
	h2Section.textContent = 'Films + populaires';

	createElement('div', 'cartes', 'cartes', mySlider);

	createElement('div', 'rightBoton', 'rightBoton', controls);

	createElement('button', 'leftArrow', 'before', leftBoton);
	before.textContent = '<';

	createElement('button', 'rightArrow', 'next', rightBoton);
	next.textContent = '>';

	/* TITIA  */

	/*Section nowPlaying films derniers sortis*/
	createElement('section', 'section', 'nowPlaying', main);
	createElement('div', 'titleSection2', 'titleSection2', nowPlaying);

	/*Création img et icon dans section films derniers sortis*/
	createElement('img', 'boxImgS2', 'boxImgS2', titleSection2);
	boxImgS2.src = './assets/img/cinema.svg';
	boxImgS2.alt = "icon d'une  pellicule de film";

	createElement('div', 'controls2', 'controls2', nowPlaying);
	createElement('div', 'mySlider2', 'mySlider2', nowPlaying);

	createElement('div', 'leftBoton2', 'leftBoton2', controls2);
	createElement('h2', 'h2Section2', 'h2Section2', titleSection2);
	h2Section2.textContent = 'Films derniers sortis';

	createElement('div', 'cartes2', 'cartes2', mySlider2);

	createElement('div', 'rightBoton2', 'rightBoton2', controls2);

	createElement('button', 'leftArrow2', 'before2', leftBoton2);
	before2.textContent = '<';

	createElement('button', 'rightArrow2', 'next2', rightBoton2);
	next2.textContent = '>';

	
	/*                  FIN TITIA SECTION 2                    */

	//
	/*************************************SECTION FILM A VENIR - CHRIS*************************************/

	createElement('section', 'section', 'upcoming', main);
	createElement('div', 'titleSection3', 'titleSection3', upcoming);
	//création img icon dans section films à venir
	createElement('img', 'boxImgS3', 'boxImgS3', titleSection3);
	boxImgS3.src = './assets/img/cinema.svg';
	boxImgS3.alt = "icon d'une  pellicule de film";

	createElement('h2', 'h2Section3', 'h2Section3', titleSection3);
	h2Section3.textContent = 'Films à venir';

	createElement('div', 'controls3', 'controls3', upcoming);
	createElement('div', 'mySlider3', 'mySlider3', upcoming);

	createElement('div', 'leftBoton3', 'leftBoton3', controls3);

	createElement('div', 'cartes3', 'cartes3', mySlider3);

	createElement('div', 'rightBoton3', 'rightBoton3', controls3);
	createElement('button', 'leftArrow3', 'before3', leftBoton3);
	before3.textContent = '<';
	createElement('button', 'rightArrow3', 'next3', rightBoton3);
	next3.textContent = '>';

	/*-**************************SECTION 4 BANDE ANNONCE - CHRIS******************************************-*/
	//creation section bandeFilm
	createElement('section', 'bandeFilm', 'bandeFilm', main);
	//creation boite id boxBandeFilm
	createElement('div', 'boxBandeFilm', 'boxBandeFilm', bandeFilm);
	//
	//creation boite div boxBande1
	createElement('div', 'boxBande1', 'boxBande1', boxBandeFilm);
	//création h2 dans boxBande1
	createElement('h2', 'bande1', 'bande1', boxBande1);
	bande1.textContent = 'LES ANIMAUX FANTASTIQUES :';
	//
	//creation boite div boxBande2
	createElement('div', 'boxBande2', 'boxBande2', boxBandeFilm);
	//création h2 dans boxBande2
	createElement('h2', 'bande2', 'bande2', boxBande2);
	bande2.textContent = 'Les secrets de Dumbledore';
	//
	//création div dans boxBande
	createElement('div', 'boxCarreJaune', 'boxCarreJaune', boxBandeFilm);
	createElement('img', 'petitCarre3', 'petitCarre3', boxCarreJaune);
	petitCarre3.src = 'assets/img/carres.png';
	//
	/*-************************* BANDE ANNONCE AVANT FOOTER - CHRIS****************************************-*/
	//création div box pour la bande annonde
	createElement('div', 'boxBandeH3', 'boxBandeH3', bandeFilm);
	//création h3 dans section bandeFilm
	createElement('h3', 'bandeH3', 'bandeH3', boxBandeH3);
	bandeH3.textContent = 'Sortie le 13 Avril 2022 au cinéma';

	//création img bande annonce
	createElement('div', 'boxYoutube', 'boxYoutube', boxBandeH3);

	createElement('iframe', 'youtube2', 'youtube2', boxYoutube);
	youtube2.setAttribute('src', 'https://www.youtube.com/embed/VkiwSNPxDg4');
	youtube2.setAttribute('allowFullscreen', 'True');
	youtube2.setAttribute('frameborder', '0');

	/*Création de la div Footer*/
	createElement('footer', 'footer', 'Footer', main);

	/*Création de la div BoxFooter*/
	createElement('div', 'boxFooter', 'boxFooter', Footer);

	/*Création de la div BoxContainer*/
	createElement('div', 'boxContainer', 'boxContainer', boxFooter);

	/*Création de la div BoxLiensreseauxsociaux*/
	createElement(
		'div',
		'boxLiensreseauxsociaux',
		'boxLiensreseauxsociaux',
		boxContainer
	);

	/*Création de la div BoxTitle*/
	createElement('div', 'boxTitle', 'boxTitle', boxLiensreseauxsociaux);
	createElement('h2', 'titleFollow', 'titleFollow', boxTitle);
	titleFollow.textContent = 'SUIVEZ-NOUS';

	/*Création de la div BoxIcone*/
	createElement('div', 'boxIcone', 'boxIcone', boxLiensreseauxsociaux);

	/*Facebook*/
	createElement('div', 'iconeFacebook', 'iconeFacebook', boxIcone);

	createElement('a', 'lienFacebook', 'lienFacebook', iconeFacebook);
	createElement('img', 'facebook', 'facebook', lienFacebook);
	facebook.src = 'assets/img/Facebook.svg';

	/*Twitter*/
	createElement('div', 'iconeTwitter', 'iconeTwitter', boxIcone);

	createElement('a', 'lienTwitter', 'lienTwitter', iconeTwitter);
	createElement('img', 'twitter', 'twitter', lienTwitter);
	twitter.src = 'assets/img/Twitter.svg';

	/*Instagram*/
	createElement('div', 'iconeInstagram', 'iconeInstagram', boxIcone);

	createElement('a', 'lienInstagram', 'lienInstagram', iconeInstagram);
	createElement('img', 'instagram', 'instagram', lienInstagram);
	instagram.src = 'assets/img/Instagram.svg';

	/*Création de la div BoxEntreprise*/
	createElement('div', 'boxEntreprise', 'boxEntreprise', boxContainer);
	createElement('div', 'boxLogo', 'boxLogo', boxEntreprise);

	createElement('img', 'logoFooter', 'logoFooter', boxLogo);
	logoFooter.src = 'assets/img/LogoF.png';

	createElement(
		'div',
		'boxParagrapheentreprise',
		'boxParagrapheentreprise',
		boxEntreprise
	);
	createElement('p', 'entreprise', 'entreprise', boxParagrapheentreprise);
	entreprise.textContent =
		'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,';

	/*Création de la div BoxAdresse*/
	createElement('div', 'boxAdresse', 'boxAdresse', boxContainer);

	createElement('div', 'boxTittle', 'boxTittle', boxAdresse);

	createElement('h2', 'titleAdress', 'titleAdress', boxTittle);
	titleAdress.textContent = 'ADRESSE';

	/*Création de la div BoxParagrapheadresse*/
	createElement(
		'div',
		'boxParagrapheadresse',
		'boxParagrapheadresse',
		boxAdresse
	);
	createElement(
		'p',
		'paragrapheAdresse',
		'paragrapheAdresse',
		boxParagrapheadresse
	);
	paragrapheAdresse.textContent = '1 rue de la rue ';

	createElement(
		'p',
		'paragrapheAdresse2',
		'paragrapheAdresse2',
		boxParagrapheadresse
	);
	paragrapheAdresse2.textContent = '39000 Lons-Le-Saunier';

	/*Création de la div BoxInformations*/
	createElement('div', 'boxInformation', 'boxInformation', boxFooter);
	createElement('div', 'boxLigne1', 'boxLigne1', boxInformation);

	/*Création box ligne 1*/
	createElement('div', 'infosOne', 'infosOne', boxLigne1);
	createElement('a', 'lienInfosone', 'lienInfosone', infosOne);
	lienInfosone.textContent =
		'Contact | Qui sommes-nous | Publicité | Politique de cookies | Donnés Personelles  |  Les services';

	createElement('span', 'lettreA', 'lettreA', lienInfosone);
	lettreA.textContent = 'A';

	createElement('a', 'infosTwo', 'infosTwo', lettreA);
	infosTwo.textContent = 'lloJyvé |';

	createElement('p', 'copyRight', 'copyRight', infosOne);
	createElement('span', 'infosThree', 'infosThree', copyRight);
	infosThree.textContent = '©';

	createElement('span', 'lettreA2', 'lettreA2', infosThree);
	lettreA2.textContent = 'A';

	createElement('span', 'infosFour', 'infosFour', lettreA2);
	infosFour.textContent = 'lloJyvé';

	/*Création box ligne 2*/
	createElement('div', 'boxLigne2', 'boxLigne2', boxInformation);
	createElement('p', 'infosFive', 'infosFive', boxLigne2);

	infosFive.textContent =
		'Retrouvez tous les horaires et infos de votre cinéma sur le numéro';
	createElement('span', 'lettreA3', 'lettreA3', infosFive);
	lettreA3.textContent = 'A';

	createElement('span', 'infosSix', 'infosSix', lettreA3);
	infosSix.textContent = 'lloJyvé :';

	createElement('p', 'infosSeven', 'infosSeven', boxLigne2);
	createElement('a', 'numéro', 'numéro', infosSeven);
	numéro.textContent = '06 06 06 06 06';

	createElement('p', 'infosHeight', 'infosHeight', boxLigne2);
	infosHeight.textContent = '(Gratuit)';

	createElement('div', 'boxLigne3', 'boxLigne3', boxInformation);
	createElement('p', 'infosNine', 'infosNine', boxLigne3);
	infosNine.textContent = 'Un réalisation ';

	createElement('a', 'infosTen', 'infosTen', infosNine);
	infosTen.textContent = 'FuturDEV';

	fetch(
		'https://api.themoviedb.org/3/movie/popular?api_key=378bed09fc9b527f1b74e7a56ff4fe3c&language=fr-FR&page=1'
	)
		.then((response) => response.json())
		.then((data) => {
			popularList = data.results;

			// popularList.forEach(element => {
			//  	if (element.id === 675353) {
			//  		element.id+=10
			// 	}
			// 	if (element.id === 508947) {
			//  		element.id+=3
			//  	}
			//  });
				
			checkNewRelease(popularList, 'popular').then(res => {
				createAlert(res);
			});
			createCard(popularList, document.getElementById('cartes'), 1);
		});

	fetch(
		'https://api.themoviedb.org/3/movie/now_playing?api_key=378bed09fc9b527f1b74e7a56ff4fe3c&language=fr-FR&page=1'
	)
		.then((response) => response.json())
		.then((data) => {
			filmsSortis = data.results;

			createCard(filmsSortis, document.getElementById('cartes2'), 2);
		});

	fetch(
		'https://api.themoviedb.org/3/movie/upcoming?api_key=378bed09fc9b527f1b74e7a56ff4fe3c&language=fr-FR&page=1'
	)
		.then((response) => response.json())
		.then((data) => {
			aVenirList = data.results;

			createCard(aVenirList, document.getElementById('cartes3'), 3);
		});
}
