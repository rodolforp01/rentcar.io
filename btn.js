

//function for scrolling smoothly when clicking anchor elements
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


  //function for creating a menu when the app is on phone
  function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;

      for(i=0; i<dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if(openDropdown.classList.contains('show')){
          openDropdown.classList.remove('show');
        }

      }
    }
  }

