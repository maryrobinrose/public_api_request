/******************************************
Treehouse Techdegree:
FSJS project 5 - Public API Requests
******************************************/

//*** AJAX ***//
//Use AJAX to call the Random User Generator API
function ajax() {
    $.ajax({
      //Grabs 12 users
      url: 'https://randomuser.me/api/?results=12',
      dataType: 'json',
      //Callback function
      success: function(data) {
        console.log(data);
        fetchData(data);
      }
    });
}
ajax();


//*** Search ***//
//Select HTML markup from index.html
const search = `<form action="#" method="get">
    <input type="search" id="search-input" class="search-input" placeholder="Search...">
    <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
  </form>`;

//Append to the page
document.querySelector('.search-container').innerHTML = search;

//*** Users ***//
//Get and display users
function fetchData(data) {
  //Loop over Users
  $.each(data,function(index, value) {
    console.log(index, value);
    //Select HTML markup from index.html
    const gallery = `<div class="card">
        <div class="card-img-container">
            <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">first last</h3>
            <p class="card-text">email</p>
            <p class="card-text cap">city, state</p>
        </div>
    </div>`;

    //Append to the page
    document.querySelector('.gallery').innerHTML = gallery;
  }); //end each
}

  /*fetch('https://randomuser.me/api/')
    .then(checkStatus)
    //Takes response object and converts it to JSON (Promise)
    .then(response => response.json())
    //Catches a return error
    .catch(error => console.log('Looks like there was a problem', error))
}

//Helper Function
function checkStatus(response) {
  //If the response comes back working
  if (response.ok) {
    return response.resolve()
  } else {
    //If the response fails
    return response.reject(new Error(response.statusText));
  }*/





//Create modal window
const modal = `<div class="modal-container">
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
    </div>`;
    //Make sure there’s a way to close the modal window
