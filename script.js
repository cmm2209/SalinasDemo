const cb = document.getElementById("showTrans");
let sheet = document.createElement('style');

document.getElementById("showTrans").addEventListener('click', () => {
  if (cb.checked) {
    sheet.innerHTML = ".child-flex1a {flex-basis: 40%; display: block;}";
    document.body.appendChild(sheet);
  }                          
 else {  
  sheet.innerHTML = ".child-flex1a {flex-basis: 40%; display: none;}";
    document.body.appendChild(sheet);
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
