/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

// created the array of quotes that holds the quote, source, citation, and year. 

var quotes = [
{ quote: 'The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.',
  source: '-Mark Caine',
  citation: 'https://www.keepinspiring.me/famous-quotes/',
},
{
  quote: 'Great minds discuss ideas; average minds discuss events; small minds discuss people.',
  source: '-Eleanor Roosevelt',
  citation: 'https://www.keepinspiring.me/famous-quotes/',
},
{
  quote: 'We must all face the choice between what is right and what is easy.',
  source: '– J.K. Rowling',
  citation: ' Harry Potter and the Goblet of Fire',
  year: '2002',
},
{
  quote: 'There is some good in this world, and it’s worth fighting for.',
  source: '– J.R.R. Tolkien',
  citation: 'The Two Towers',
  year: '2009',
},
{
  quote: 'Many of life’s failures are people who did not realize how close they were to success when they gave up.',
  source: '-Thomas A. Edison',
  citation: 'https://www.keepinspiring.me/famous-quotes/',
}

];
// console.log('my-quotes:', quotes);

//Function to get random object from quote array and store in variable randomQuote

function getRandomQuote() {
var viewedQuotes = []
  var randomQuote = Math.floor(Math.random() * quotes.length);
  var splicedQuote = quotes.splice(randomQuote, 1)[0];
    viewedQuotes.push(splicedQuote);
      if (quotes.length === 0){
        quotes = viewedQuotes;
        viewedQuotes = [];
      }
      return splicedQuote;

}



// created the printQuote function to call getRandomQuote and assign to var
function printQuote () {
//   //printQuote runs, then starts the getRandomQuote function
   var quotes = getRandomQuote();
    var message = '<p class="quote">' + quotes.quote + '</p>';
    message = message + '<p class="source">' + quotes.source;
    
    if(quotes.citation){
      message = message +  '<span class="citation">' + quotes.citation + '</span>';
    }
    if(quotes.year){
      message = message + '<span class ="year">' + quotes.year + '</span>';
    }
    message = message + '</p>';
    print(message)
}

// set innerHTML of the quote-box div to HTML string
function print(quote) {
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = quote;
}



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

