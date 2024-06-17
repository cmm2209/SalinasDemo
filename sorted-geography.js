/* Source List */
let sourcesOrig = [
    { author: 'Song Hyon', simpleTitle: 'Guide to the Study', title: '<a href="http://www.google.com" class="unblue">Guide to the Study of Music</a>', dating: '1493', postquem: 1493, antequem: 1493, region: '<span class="bolded">East Asia</span>', language: '<span class="bolded">Korean</span>'},
    { author: 'Franciscus Salinas', simpleTitle: 'De Musica', title: '<a href="https://cmm2209.github.io/SalinasDemo/index.html"  class="unblue">De Musica</a>', dating: '1577', postquem: 1577, antequem: 1577, region: '<span class="bolded">Europe</span>', language: '<span class="bolded">Latin</span>'},
    { author: 'Nakane Akira', simpleTitle: 'Exhibiting the origin', title: '<a href="http://www.qwantz.com"  class="unblue">Exhibiting the origin of melodies/notes</a>', dating: '1692', postquem: 1692, antequem: 1692, region: '<span class="bolded">East Asia</span>', language: '<span class="bolded">Japanese</span>'},
    { author: 'David the Invincible', simpleTitle: 'Definitions and Division', title: '<a href="http://www.nytimes.com"  class="unblue">Definitions and Divisions of Philosophy</a>', dating: '6th century?', postquem: 450, antequem: 649, region: '<span class="bolded">Asia</span>', language: '<span class="bolded">Armenian</span>'},
    { author: 'Anonymous', simpleTitle: 'Late Stone Age Rock', title: '<a href="http://www.nytimes.com"  class="unblue">Late Stone Age Rock Painting</a>', dating: '20,000 to 28,000 BCE', postquem: -28000, antequem: -20000, region: '<span class="bolded">Africa</span>', language: '<span class="bolded">n/a</span>'},
    { author: 'Anonymous', simpleTitle: 'Julajula', title: '<a href="http://www.nytimes.com"  class="unblue">Julajula (panpipes) and concept of "puru iwalasqa"</a>', dating: '1980s-present', postquem: 1980, antequem: 2024, region: '<span class="bolded">South America</span>', language: '<span class="bolded">Quechua</span>'},
    { author: 'Anonymous', simpleTitle: 'Silver double-pipes', title: '<a href="http://www.nytimes.com"  class="unblue">Silver double-pipes from Ur</a>', dating: '2300 BCE', postquem: -2400, antequem: -2200, region: '<span class="bolded">Near East</span>', language: '<span class="bolded">n/a</span>'},
    { author: 'Anonymous', simpleTitle: 'The Wheel of St. John', title: '<a href="http://www.nytimes.com"  class="unblue">The Wheel of St. John Koukouzeles</a>', dating: '1336 CE', postquem: 1336, antequem: 1366, region: '<span class="bolded">Europe</span>', language: '<span class="bolded">Greek</span>'},
    { author: 'Lowell Mason', simpleTitle: 'Manual of the Boston Academy', title: '<a href="http://www.nytimes.com"  class="unblue">Manual of the Boston Academy of Music</a>', dating: '1834', postquem: 1834, antequem: 1834, region: '<span class="bolded">North America</span>', language: '<span class="bolded">English</span>'},
    { author: 'Muḥammad Kāmil al-Ḫulaʿī', simpleTitle: 'Book on Oriental Music', title: '<a href="http://www.nytimes.com"  class="unblue">The Book on Oriental Music</a>', dating: '1904-1906', postquem: 1904, antequem: 1906, region: '<span class="bolded">Africa</span>', language: '<span class="bolded">Arabic</span>'},
    { author: 'Anonymous', simpleTitle: 'Solfège annotations', title: '<a href="http://www.nytimes.com"  class="unblue">Solfège annotations in musical manuscripts from the Jesuit archives</a>', dating: '1720s–1760s', postquem: 1720, antequem: 1769, region: '<span class="bolded">South America</span>', language: '<span class="bolded">n/a</span>'},
    { author: 'Anonymous', simpleTitle: 'Musica Enchiriadis', title: '<a href="http://www.nytimes.com"  class="unblue">Musica Enchiriadis</a>', dating: 'ca. 850-ca. 900', postquem: 830, antequem: 919, region: '<span class="bolded">Europe</span>', language: '<span class="bolded">Latin</span>'},
    { author: 'Anonymous', simpleTitle: 'Bells of Kings', title: '<a href="http://www.nytimes.com"  class="unblue">Bells of Kings</a>', dating: '200 AD', postquem: 180, antequem: 220, region: '<span class="bolded">Africa</span>', language: '<span class="bolded">n/a</span>'},
  ];
/* Sort sources by geography */
let sources = sourcesOrig.sort(function (a, b) {
  if (a.region < b.region) {
    return -1;
  }
  if (a.region > b.region) {
    return 1;
  }
  if (a.region = b.region) {
    if (a.postquem < b.postquem) {
        return -1;
      }
      if (a.postquem > b.postquem) {
        return 1;
      }
      return 0;
  }
  return 0;
});
// ((firstItem, secondItem) => firstItem.author - secondItem.author) ;

/* Display sources on load */
function populate () {
let parsed = ""; 
for (i = 0; i < sources.length; i++) {
  parsed += "<p class='hit'>" + sources[i].region + ": " + sources[i].author + ", " + sources[i].title + 
   " (" + sources[i].dating + ")" + 
    "</p>" + "\n";};
document.getElementById('sources-here').innerHTML = parsed};
populate();
  
/* Enable reset button */
function reset () {
  document.getElementById("reset").addEventListener('click', populate);
  document.getElementById("reset").addEventListener('click', () => { document.getElementById("earliestDate").value = "-28000";         document.getElementById("latestDate").value = "2020";
   });
  };
  reset ();
  
  /* Enable chronological filtering */
  function chronofilter () {
  document.getElementById("filter").addEventListener('click', () => {
    let earliestDate;
      earliestDate = document.getElementById("earliestDate").value;          let latestDate;
      latestDate = document.getElementById("latestDate").value;
      let filteredSources = sources.filter(source => source.antequem >= earliestDate && source.postquem <= latestDate)
    
      let parsed = "";
    if (filteredSources.length >=1) {
      for (i = 0; i < filteredSources.length; i++) {
         for (i = 0; i < filteredSources.length; i++) {
    parsed += "<p class='hit'>" + filteredSources[i].region + ": " + filteredSources[i].author + ", " + filteredSources[i].title + 
     " (" + filteredSources[i].dating + ")" + 
      "</p>" + "<br/>" + "\n";};         
       document.getElementById('sources-here').innerHTML = parsed}
  } else {
      document.getElementById('sources-here').innerHTML = "No sources found"}
  })};
  chronofilter ();

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
