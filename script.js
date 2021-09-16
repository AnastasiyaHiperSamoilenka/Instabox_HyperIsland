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

let backetArray = [];

function appendData(data) {
  let mainContainer = document.getElementsByClassName("grid-container")[0];

  data.forEach(element => {
    //Add diw which is Parent container to each box
    let boxDiv = document.createElement("div");
    boxDiv.classList.add('box');

    //Add div which is front door
    let gridItemDiv = document.createElement("div");
    gridItemDiv.classList.add('grid-item');
    gridItemDiv.innerHTML = element.DeliveryOption + "</br>" + element.price;



    //Add div which is hidden box
    let hiddenText__and_positionDiv = document.createElement("div");
    hiddenText__and_positionDiv.classList.add('hiddenText__and_position');

    //Add to the HTML <a> tag (button)to the hidden box with link
    let a__HiddenText__and_positionDiv = document.createElement("a");
    a__HiddenText__and_positionDiv.href = "#";
    hiddenText__and_positionDiv.appendChild(a__HiddenText__and_positionDiv);


    //Create p tag and append text to it
    let pTag = document.createElement("p");
    pTag.classList.add('btn_p');
    a__HiddenText__and_positionDiv.appendChild(pTag);
    pTag.innerHTML = element.InnerButtonText;

    
    //Add items to the backet
    pTag.addEventListener("click", function addToBacket() {
      backetArray.push({
        "DeliveryOption": element.DeliveryOption,
        "price": element.price,
        "currency": element.currency
      });
      console.log(backetArray);

      // let nameAndPrice = document.createElement("span");
      // nameAndPrice.classList.add('item_price');
      // nameAndPrice.innerHTML= backetArray;
      // let span__name_price = document.getElementsByClassName("container_item_price")[0]; // Container on the second page with names pf items and their prices
      // span__name_price.appendChild(nameAndPrice);




    });


    //Add grid-item div and hiddenText div to the box which is their container
    boxDiv.appendChild(gridItemDiv);
    boxDiv.appendChild(hiddenText__and_positionDiv);

    //Make door rotation by changing class on click
    boxDiv.addEventListener("click", function toggleDoor() {
      boxDiv.children[0].classList.toggle("doorOpen");
    });


    //Add all divs to main container
    mainContainer.appendChild(boxDiv);


  });
}


//Making item button working
document.getElementsByClassName('btn-backet')[0].onclick = function() {
    sessionStorage.setItem('TheArray', JSON.stringify(backetArray));
   
  window.location.href='/page2.html';
};





// NAVIGATION ANIMATION HAMBURGER
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