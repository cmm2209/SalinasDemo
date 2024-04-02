import sourcesOrig from "./sources.js";
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