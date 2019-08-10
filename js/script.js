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


//Function to get random object from quote array and store in variable randomQuote
function getRandomQuote() {
  var randomQuote = Math.floor(Math.random() * quote.length);

  var splicedQuote = quotes.splice(randomQuote, 1)[0];
    viewedQuotes.push(splicedQuote);
      if (quote.length === 0){
        quotes = viewedQuotes;
        viewedQuotes = [];

      }
      return splicedQuote;
}



/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.