const tweetbtn = document.getElementById('bouton');
var citation = [
    {
        "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
        "author": "Thomas Edison"
      },
      {
        "text": "You can observe a lot just by watching.",
        "author": "Yogi Berra"
      },
      {
        "text": "A house divided against itself cannot stand.",
        "author": "Abraham Lincoln"
      },
      {
        "text": "Difficulties increase the nearer we get to the goal.",
        "author": "Johann Wolfgang von Goethe"
      },
      {
        "text": "Fate is in your hands and no one elses",
        "author": "Byron Pulsifer"
      },
      {
        "text": "For those to whom much is given, much is required.",
        "author": "the Bible"
      },
      {
        "text": "He travels the fastest who travels alone.",
        "author": "Rudyard Kipling	"
      },
      {
        "text": "If you are going through hell, keep going.	",
        "author": "Winston Churchill"
      },
      {
        "text": "If you build it, they will come.",
        "author": "Joe Jackson"
      },
      {
        "text": "You must be the change you wish to see in the world.",
        "author": "Mahatma Ghandi"
      },
      {
        "text": "To thine own self, be true.",
        "author": "	William Shakespeare"
      },
      {
        "text": "To err is human; to forgive, divine.",
        "author": "Alexander Pope"
      },
      {
        "text": "The love of money is the root of all evil.",
        "author": "the Bible"
      },
      {
        "text": "Speak softly and carry a big stick",
        "author": "Theodore Roosevelt"
      },
      {
        "text": "Living life is a choice. Making a difference in someone else's isn't",
        "author": "Kid Cudi"
      },
      {
        "text": "Take the first chance that you get, because you may never get another one",
        "author": "Lil Wayne"
      },
      {
        "text": "I’ll give you all of me until there’s nothing left.",
        "author": "Childish Gambino"
      },
      {
        "text": "You have to keep your vision clear, cause only a coward lives in fear.",
        "author": "Nas"
      },
      {
        "text": "Nothing in life is promised except death.",
        "author": "Kanye West"
      },
      {
        "text": "For every dark night, there’s a brighter day",
        "author": "Tupac Shakur"
      },
      {
        "text": "Jealousy is just love and hate at the same time.",
        "author": "Drake"
      },
      {
        "text": "I am whatever you say I am; if I wasn't, then why would you say I am.",
        "author": "Eminem"
      },
]
function GenerateurCitation(){
    var randomNumber = Math.floor(Math.random()*citation.length);
    document.getElementById('text').innerHTML = citation[randomNumber].text;
    document.getElementById('author').innerHTML = citation[randomNumber].author;
}
function tweetit(){
    tweetbtn.href =`https://twitter.com/intent/tweet?text= ${text} ~ ${author}`;
}
