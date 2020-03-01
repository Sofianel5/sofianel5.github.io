document.onmouseover = function () {
document.getElementById('trigger').onclick = function() {
    if (document.getElementById('trigger').classList.contains('is-active')) {
      console.log('called to close')
      document.getElementById('trigger').classList.remove('is-active');
      document.getElementById('trigger').style.right = '2vw';
      document.getElementById('sidenav').style.width = "0";
      document.getElementById("main-page").style.marginRight = "0";
    } else {
      console.log('called to open')
      document.getElementById('trigger').classList.add('is-active');
      document.getElementById('trigger').style.right = '2vw';
      document.getElementById('sidenav').style.width = "30vw"
      document.getElementById("main-page").style.marginRight = "30vw";
    }
  }
if (window.location.pathname == "/33440753/triangle") {
    $( 'html' ).load( 'https://sofianel5.github.io/triangle.html' ); 
    $.getScript( 'https://sofianel5.github.io/aos.js', function( data, textStatus, jqxhr ) {
        console.log( data ); // Data returned
        console.log( textStatus ); // Success
        console.log( jqxhr.status ); // 200
	}); 
    $.getScript( 'https://sofianel5.github.io/scripts.js', function( data, textStatus, jqxhr ) {
		console.log( data ); // Data returned
		console.log( textStatus ); // Success
		console.log( jqxhr.status ); // 200
	});
   }
	if ("i" in window) {
	   i += 1
		AOS.refresh()
	} else {
	   i = 0
	AOS.init()
	}
document.onload = function () {
    AOS.init()
    window.addEventListener('load', AOS.refresh);
  document.querySelector('[target=_blank]').remove();
}
}
