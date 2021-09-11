//Work with Json

//Here we are fetching our deliveryOption.json file and execute the json() function which also returns a promise and runs then* function. Finaly we get actual Json data as a parameter.
fetch('deliveryContent.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //Here we create the code which will append the data to our page.
    appendData(data);
  })
  .catch(function (err) {
    console.log('error: ' + err);
  });


//Create divs with content

function appendData(data) {
  let mainContainer = document.getElementsByClassName("grid-container")[0];
  console.log(mainContainer);
  data.forEach(element => {
    //Add diw which is Parent container to each box
    let backdoorDiv = document.createElement("div");
    backdoorDiv.classList.add('backDoor');

    //Add div which is front door
    let gridItemDiv = document.createElement("div");
    gridItemDiv.classList.add('grid-item');
    gridItemDiv.innerHTML = element.DeliveryOption;


    //Add div which is hidden box
    let hiddenText__and_positionDiv = document.createElement("div");
    hiddenText__and_positionDiv.classList.add('hiddenText__and_position');

    //Add to the HTML <a> tag to the hidden box with link
    let a__HiddenText__and_positionDiv = document.createElement("a");
    a__HiddenText__and_positionDiv.href = "#";
    hiddenText__and_positionDiv.appendChild(a__HiddenText__and_positionDiv);


    //Add grid-item div and hiddenText div to the backdoor which is their container
    backdoorDiv.appendChild(gridItemDiv);
    backdoorDiv.appendChild(hiddenText__and_positionDiv);

    backdoorDiv.addEventListener("click", function toggleDoor() {
      backdoorDiv.children[0].classList.toggle("doorOpen");
    });

    //Add all divs to main container
    mainContainer.appendChild(backdoorDiv);

  });
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}