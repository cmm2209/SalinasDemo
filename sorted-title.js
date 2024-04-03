/* Source List */
let sourcesOrig = [
    { author: 'Song Hyon', title: '<a href="http://www.google.com" class="unblue">Guide to the Study of Music</a>', simpleTitle: 'Guide to the Study of Music', dating: '1493', postquem: 1493, antequem: 1493, },
    { author: 'Franciscus Salinas', title: '<a href="https://cmm2209.github.io/SalinasDemo/index.html"  class="unblue">De Musica</a>', simpleTitle: 'De Musica', dating: '1577', postquem: 1577, antequem: 1577, },
    { author: 'Nakane Akira', title: '<a href="http://www.qwantz.com"  class="unblue">Exhibiting the origin of melodies/notes</a>', simpleTitle: 'Exhibiting the origin of melodies/notes', dating: '1692', postquem: 1692, antequem: 1692, },
    { author: 'David the Invincible', title: '<a href="http://www.nytimes.com"  class="unblue">Definitions and Divisions of Philosophy</a>', simpleTitle: 'Definitions and Divisions of Philosophy', dating: '6th century?', postquem: 450, antequem: 649, },
    { author: 'Anonymous', title: '<a href="http://www.nytimes.com"  class="unblue">Late Stone Age Rock Painting</a>', simpleTitle: 'Late Stone Age Rock Painting', dating: '20,000 to 28,000 BCE', postquem: -28000, antequem: -20000, },
    { author: 'Anonymous', title: '<a href="http://www.nytimes.com"  class="unblue">Julajula (panpipes) and concept of "puru iwalasqa"</a>', simpleTitle: 'Julajula (panpipes) and concept of "puru iwalasqa"', dating: '1980s-present', postquem: 1980, antequem: 2024, },
    { author: 'Anonymous', title: '<a href="http://www.nytimes.com"  class="unblue">Silver double-pipes from Ur</a>', simpleTitle: 'Silver double-pipes from Ur', dating: '2300 BCE', postquem: -2400, antequem: -2200, },
    { author: 'Anonymous', title: '<a href="http://www.nytimes.com"  class="unblue">The Wheel of St. John Koukouzeles</a>', simpleTitle: 'The Wheel of St. John Koukouzeles', dating: '1336 CE', postquem: 1336, antequem: 1366, },
    { author: 'Lowell Mason', title: '<a href="http://www.nytimes.com"  class="unblue">Manual of the Boston Academy of Music</a>', simpleTitle: 'Manual of the Boston Academy of Music', dating: '1834', postquem: 1834, antequem: 1834, },
    { author: 'Muḥammad Kāmil al-Ḫulaʿī', title: '<a href="http://www.nytimes.com"  class="unblue">The Book on Oriental Music</a>', simpleTitle: 'The Book on Oriental Music', dating: '1904-1906', postquem: 1904, antequem: 1906, },
    { author: 'Anonymous', title: '<a href="http://www.nytimes.com"  class="unblue">Solfège annotations in musical manuscripts from the Jesuit archives</a>', simpleTitle: 'Solfège annotations in musical manuscripts from the Jesuit archives', dating: '1720s–1760s', postquem: 1720, antequem: 1769, },
    { author: 'Anonymous', title: '<a href="http://www.nytimes.com"  class="unblue">Musica Enchiriadis</a>', simpleTitle: 'Musica Enchiriadis', dating: 'ca. 850-ca. 900', postquem: 830, antequem: 919, },
    { author: 'Anonymous', title: '<a href="http://www.nytimes.com"  class="unblue">Bells of Kings</a>', simpleTitle: 'Bells of Kings', dating: '200 AD', postquem: 180, antequem: 220, },
];
/* Sort sources by title */
let sources = sourcesOrig.sort(function (a, b) {
  if (a.simpleTitle < b.simpleTitle) {
    return -1;
  }
  if (a.simpleTitle > b.simpleTitle) {
    return 1;
  }
  return 0;
});
//((firstItem, secondItem) => firstItem.simpleTitle - secondItem.simpleTitle) ;

/* Display sources on load */
function populate () {
let parsed = ""; 
for (i = 0; i < sources.length; i++) {
  parsed += "<p class='hit'>" + sources[i].author + ", " + sources[i].title + 
   " (" + sources[i].dating + ")" + 
    "</p>" + "\n";};
document.getElementById('sources-here').innerHTML = parsed};
populate();

/*
  Slidemenu
*/
(function() {
	var $body = document.body
	, $headerbutton = $body.getElementsByClassName('headerbutton')[0];

	if ( typeof $headerbutton !== 'undefined' ) {
		$headerbutton.addEventListener('click', function() {
			$body.className = ( $body.className == 'menu-active' )? '' : 'menu-active';
		});
	}

}).call(this);