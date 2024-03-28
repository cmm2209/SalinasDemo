const cb = document.getElementById("showTrans");
const stylesheet = document.styleSheets[1];
let elementRules;

document.addEventListener('click', () => {
  if (cb.checked) {
  for(let i = 0; i < stylesheet.cssRules.length; i++) {
    if(stylesheet.cssRules[i].selectorText === '.child-flex1a') {
      elementRules = stylesheet.cssRules[i];
    }
  }
  elementRules.style.setProperty('display', 'block')
    ;
  }                          
 else {  for(let i = 0; i < stylesheet.cssRules.length; i++) {
    if(stylesheet.cssRules[i].selectorText === '.child-flex1a') {
      elementRules = stylesheet.cssRules[i];
    }
  }
  elementRules.style.setProperty('display', 'none')
 }
 } );

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