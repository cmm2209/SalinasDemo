/* Source List */
let sourcesOrig = [
    { author: 'Song Hyon', title: '<a href="http://www.google.com" class="unblue">Guide to the Study of Music</a>', dating: '1493', postquem: 1493, antequem: 1493, },
    { author: 'Franciscus Salinas', title: '<a href="https://cmm2209.github.io/SalinasDemo/index.html"  class="unblue">De Musica</a>', dating: '1577', postquem: 1577, antequem: 1577, },
    { author: 'Nakane Akira', title: '<a href="http://www.qwantz.com"  class="unblue">Exhibiting the origin of melodies/notes</a>', dating: '1692', postquem: 1692, antequem: 1692, },
    { author: 'David the Invincible', title: '<a href="http://www.nytimes.com"  class="unblue">Definitions and Divisions of Philosophy</a>', dating: '6th century?', postquem: 450, antequem: 649, },
];
/* Sort sources chronologically */
let sources = sourcesOrig.sort((firstItem, secondItem) => firstItem.postquem - secondItem.postquem) ;

/* Display sources on load */
function populate () {
let parsed = ""; 
for (i = 0; i < sources.length; i++) {
  parsed += "<p class='hit'>" + sources[i].author + ", " + sources[i].title + 
   " (" + sources[i].dating + ")" + 
    "</p>" + "\n";};
document.getElementById('sources-here').innerHTML = parsed};
populate();

/* Enable reset button */
function reset () {
    document.getElementById("reset").addEventListener('click', populate);
    document.getElementById("reset").addEventListener('click', () => { document.getElementById("earliestDate").value = "-30000";         document.getElementById("latestDate").value = "2020";
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
      parsed += "<p class='hit'>" + filteredSources[i].author + ", " + filteredSources[i].title + 
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
