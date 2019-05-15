// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(article) {
    // assign this.domElement to the passed in domElement
    this.article = article;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.article.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'Click to Expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    
    this.expandButton.addEventListener('click', () => this.expandArticle(event));

  }

  expandArticle(event) {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.article.classList.toggle('article-open');
    this.expandButton.textContent = (this.expandButton.textContent === 'Click to Expand') ? 'Click to Close' : 'Click to Expand';
    event.stopPropagation();
  }


}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article');
articles.forEach(article => new Article(article));


//Stretch Attempt
//Each article has a heading, date, paras, span for expand

class ArticleWithoutHTMl {
    constructor({headline, date, paraOne, paraTwo, paraThree}){
        this.parentForDiv = document.querySelector('.articles');
        this.parent = document.createElement('div');
        this.parent.classList.add('article');
        this.parentForDiv.appendChild(this.parent);
        this.headerEl = document.createElement('h2');
        this.headerEl.textContent = headline;
        this.dateEl = document.createElement('p')
        this.dateEl.classList.add('date');
        this.dateEl.textContent = date;
        this.paraOne = document.createElement('p');
        this.paraOne.textContent = paraOne;
        this.paraTwo = document.createElement('p');
        this.paraTwo.textContent = paraTwo;
        this.paraThree = document.createElement('p');
        this.paraThree.textContent = paraThree;
        this.expandButton = document.createElement('span')
        this.expandButton.classList.add('expandButton');
        this.expandButton.textContent = 'Click to Expand';
        this.parent.prepend(this.expandButton);
        this.parent.prepend(this.paraThree);
        this.parent.prepend(this.paraTwo);
        this.parent.prepend(this.paraOne);
        this.parent.prepend(this.dateEl);
        this.parent.prepend(this.headerEl);
        
        this.expandButton.addEventListener('click', () => this.expandNewArticle(event));

  }

  expandNewArticle(event) {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.parent.classList.toggle('article-open');
    this.expandButton.textContent = (this.expandButton.textContent === 'Click to Expand') ? 'Click to Close' : 'Click to Expand';
    event.stopPropagation();
  }

    
}

let test = new ArticleWithoutHTMl ({
    headline: 'I do not exist in the HTML file',
    date: 'May 30th, 2020',
    paraOne: 'TEST TEST TEST TEST TEST TEST',
    paraTwo:'TEST TEST TEST TEST TEST TEST',
    paraThree: 'TEST TEST TEST TEST TEST TEST'
})