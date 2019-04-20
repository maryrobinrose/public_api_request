/******************************************
Treehouse Techdegree:
FSJS project 5 - Public API Requests
******************************************/

//*** AJAX ***//
//Does this need to be in a function?
//Use AJAX to call the Random User Generator API
$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});

//Call function?^


//*** Search ***//
//Select HTML markup from HTML
const search = `<form action="#" method="get">
    <input type="search" id="search-input" class="search-input" placeholder="Search...">
    <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
    </form>`;
//Append to the page
document.querySelector('.search-container').innerHTML = search;

//*** Users ***//
//Get and display 12 random users
/*<div class="card">
    <div class="card-img-container">
        <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
    </div>
    <div class="card-info-container">
        <h3 id="name" class="card-name cap">first last</h3>
        <p class="card-text">email</p>
        <p class="card-text cap">city, state</p>
    </div>
</div>*/

//Create modal window
/*<div class="modal-container">
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
            <h3 id="name" class="modal-name cap">name</h3>
            <p class="modal-text">email</p>
            <p class="modal-text cap">city</p>
            <hr>
            <p class="modal-text">(555) 555-5555</p>
            <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
            <p class="modal-text">Birthday: 10/21/2015</p>
        </div>
    </div>*/
    //Make sure there’s a way to close the modal window




/*var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
        document.getElementById('ajax').innerHTML = xhr.responseText;
        } else if (xhr.status === 404) {
          //file not found
        } else if (xhr.status = 500) {
        //server had a problem
        }
      }
    };
    xhr.open('GET', 'sidebar.html');
    function sendAJAX() {
      xhr.send();
      document.getElementById('load').style.display = 'none';
    }

    <button id='load' onclick='sendAJAX()'>Bring It!</button>
          </div>
          <div id="ajax">

          </div>
        </div>*/
