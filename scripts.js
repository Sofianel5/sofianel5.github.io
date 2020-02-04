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
    AOS.init()
    window.addEventListener('load', AOS.refresh);
document.onmouseover = function () {
  document.querySelector('[target=_blank]').remove();
}
  