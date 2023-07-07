// Vertical tab
function openMap(evt, mean) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tabButton");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(mean).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Add click events
  window.onload = function () {
    // Vertical tab
    const buttons = document.getElementsByClassName("tabButton");
    for (i = 0; i < buttons.length; i++) {
      const nameVal = buttons[i].getAttribute("name");
      buttons[i].onclick = function (event) {
        openMap(event, nameVal);
      };
    }
    document.getElementById("defaultOpen").click();
  };

const dropdown = document.getElementsByClassName('full-list');

for (i=0; 1<dropdown.length; i++){
  dropdown[i].addEventListener('click', function(){
    this.classList.toggle('active')
  })
}