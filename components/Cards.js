// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios.get('https://lambda-times-api.herokuapp.com/articles')
	.then(res => {
		//not sure if this is the best way but this is how I found it works.
		//this loops over each object in the articles object which will give an array of objects
		for (let i = 0; i < Object.keys(res.data.articles).length; i++) {
			res.data.articles[Object.keys(res.data.articles)[i]].forEach(article => {
				//for each article object inside the array, creates and appends a card element
				document.querySelector('div.cards-container').appendChild(cardCreator(article))
			})
		}
	});

function cardCreator(obj) {
	const card = document.createElement('div');
	card.classList.add('card');
	
	const headline = document.createElement('div');
	headline.classList.add('headline');
	headline.textContent = obj.headline;
	
	const author = document.createElement('div');
	author.classList.add('author');
	
	const imgContainer = document.createElement('div');
	imgContainer.classList.add('img-container');
	
	const img = document.createElement('img');
	img.src = obj.authorPhoto;
	
	const span = document.createElement('span');
	span.textContent = 'By ' + obj.authorName;
	
	card.appendChild(headline);
	card.appendChild(author);
	author.appendChild(imgContainer);
	imgContainer.appendChild(img);
	author.appendChild(span);
	
	return card;
}



























