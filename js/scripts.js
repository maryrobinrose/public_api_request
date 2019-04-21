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
        //Call function to display users
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
  //Loop over users
  $.each(data.results, function(i, user) {
    //Select HTML markup from index.html, use template strings ${} to insert user info
    const gallery = `<div class="card">
        <div class="card-img-container">
            <img class="card-img" src="${data.results[i].picture.large}" alt="${data.results[i].name.first} ${data.results[i].name.last}">
        </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">${data.results[i].name.first} ${data.results[i].name.last}</h3>
            <p class="card-text">${data.results[i].email}</p>
            <p class="card-text cap">${data.results[i].location.city}, ${data.results[i].location.state}</p>
        </div>
    </div>`;

    //Append to the page
    document.querySelector('.gallery').innerHTML += gallery;
  });
}


//*** Modal ***//
//Create model to pop up when clicked
function makeModal(data) {
  $('.card').onclick = function() {
  //Select index of each card
  let i = $('.card').index(this);
  //Select HTML markup from index.html, add span for close button
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

    //Append to the page
    document.querySelector('body').innerHTML += modal;

    //When the user clicks (x), close the modal
    $('.modal-close-btn').onclick = function() {
      $('.modal').remove();
    }

    //When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
}
