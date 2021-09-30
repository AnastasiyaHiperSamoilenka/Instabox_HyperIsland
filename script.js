//Here we are fetching deliveryContent.json file and execute the json() function which also returns a promise and runs then* function. 
//Finally we get the actual Json data as a parameter.
fetch('deliveryContent.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //Here we call a function which will append the data to our page.
    appendData(data);
  })

  .catch(function (err) {
    console.log('error: ' + err);
  });

//Create array of objects 
let ArrayOfCartItems = [];

// //Link to the session storage
// let sessionString = sessionStorage.getItem('TheArray');
// if (sessionString) {
//   ArrayOfCartItems = JSON.parse(sessionString);

//   // Add sum of clicked items to the cart btn
//   let Cart_btn = document.getElementsByClassName("btnCartPrice")[0];

//   let sumOnCart = 0;
//   for (let i = 0; i < ArrayOfCartItems.length; i++) {
//     sumOnCart += ArrayOfCartItems[i].price;
//   }


//   Cart_btn.innerHTML = sumOnCart;
// }

function appendData(data) {
  let mainGridContainer = document.getElementsByClassName("grid-container")[0];

  data.forEach(element => {
    //Add div which is Parent container to each box
    let boxDiv = document.createElement("div");
    boxDiv.classList.add('box');

    //Add div which is front door
    let box__firstDiv = document.createElement("div");
    box__firstDiv.classList.add('box__first');
    box__firstDiv.innerHTML = element.DeliveryOption + "</br>" + element.price + " " + element.currency;



    //Add div which is hidden box
    let box__secondDiv = document.createElement("div");
    box__secondDiv.classList.add('box__second');

    //Add to the HTML <a> tag (button)to the hidden box with link
    let a__box__secondDiv = document.createElement("a");
    a__box__secondDiv.href = "#";
    box__secondDiv.appendChild(a__box__secondDiv);


    //Create p tag and append text to it
    let pTag = document.createElement("p");
    pTag.classList.add('btn_p');
    a__box__secondDiv.appendChild(pTag);
    pTag.innerHTML = element.InnerButtonText;


    //Add items to the Cart
    pTag.addEventListener("click", function addToCart() {

      ArrayOfCartItems.push({
        "DeliveryOption": element.DeliveryOption,
        "price": element.price,
        "currency": element.currency
      });

      // Add sum of clicked items to the cart btn
      let Cart_btn = document.getElementsByClassName("btnCartPrice")[0];

      let sumOnCart = 0;
      for (let i = 0; i < ArrayOfCartItems.length; i++) {
        sumOnCart += ArrayOfCartItems[i].price;
      }

      Cart_btn.innerHTML = sumOnCart;
    });


    //Add box__first div and box__second div to the box which is their container
    boxDiv.appendChild(box__firstDiv);
    boxDiv.appendChild(box__secondDiv);

    //Make door rotation by changing class on click
    boxDiv.addEventListener("click", function toggleDoor() {
      boxDiv.children[0].classList.toggle("doorOpen");
    });


    //Add all divs to main container
    mainGridContainer.appendChild(boxDiv);
  });
}


//Making item button working
document.getElementsByClassName('Cart_btn')[0].onclick = function () {
  //Session storage  method called to store values of Cart items from the array in the session storage
  sessionStorage.setItem('TheArray', JSON.stringify(ArrayOfCartItems));

  // redirect us to the second page whet Cart button is clicked
  window.location.href = '/page2.html';
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