
var author = ''
var quote = ''
var Quotes = [
    {
        author: 'Ralph Waldo Emerson',
        quote: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.'
    },
    {
        author: 'Elbert Hubbard',
        quote: 'Do not take life too seriously. You will not get out alive.'
    },
    {
        author: 'Frank Sinatra',
        quote: 'The best revenge is massive success.'
    },
    {
        author: 'Oscar Wilde',
        quote: 'To live is the rarest thing in the world. Most people exist, that is all.'
    },
    {
        author: 'Oscar Wilde',
        quote: 'Always forgive your enemies; nothing annoys them so much.'
    },
    {
        author: 'Friedrich Nietzsche',
        quote: 'Without music, life would be a mistake.'
    },
]
function newQuote() {
    var random = Number.parseInt(Math.random() * Quotes.length +1);
    document.getElementById('quoteOutput').innerHTML = Quotes[random].quote;
    document.getElementById('authorOutput').innerHTML = Quotes[random].author;
}