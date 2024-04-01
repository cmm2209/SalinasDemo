let sources = [
    { author: 'Song Hyon', title: 'Guide to the Study of Music', earliest: 1493, latest: 1493, url: 'http://www.google.com' },
    { author: 'Franciscus Salinas', title: 'De Musica', earliest: 1577, latest: 1577, url: 'https://cmm2209.github.io/SalinasDemo/index.html' },
  { author: 'Nakane Akira', title: 'Exhibiting the origin of melodies/notes', earliest: 1692, latest: 1692, url: 'http://www.qwantz.com' },
   { author: 'David the Invincible', title: 'Definitions and Divisions of Philosophy', earliest: 450, latest: 649, url: 'http://www.nytimes.com' },
];

document.getElementById("dateSelect").addEventListener('change', () => {
let postQuem;
postQuem = document.getElementById("dateAfter").value;
let anteQuem;
anteQuem = document.getElementById("dateBefore").value;
let filteredSources = [];
for (let i= 0; i<sources.length; i++) {
    if (sources[i].earliest > postQuem && sources[i].latest < anteQuem ) {
        filteredSources = [...filteredSources, sources[i]];
    }
};
let parsed = "";
for (i = 0; i < filteredSources.length; i++) {
            var myobj = filteredSources[i];
            for (var property in myobj) {
                parsed += property + ": " + myobj[property] + "\n";
            }          
 document.getElementById('sources-here').innerHTML = parsed};  });