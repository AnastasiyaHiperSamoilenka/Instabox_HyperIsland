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

// FUTURE ARRAY OF CLICKED ITEMS
let ArrayOfCartItems = [];

//Link to the session storage
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

    // HTML ELEMENTS 


    //BOX
    let boxDiv = document.createElement("div");
    boxDiv.classList.add('box');

    //FRONT DOOR
    let box__firstDiv = document.createElement("div");
    box__firstDiv.classList.add('box__first');
    box__firstDiv.innerHTML = element.DeliveryOption + "</br>" + element.price + " " + element.currency;


    //CONTENT OF THE BOX
    let box__secondDiv = document.createElement("div");
    box__secondDiv.classList.add('box__second');

    //Add box__first div and box__second div to the box which is their container
    boxDiv.appendChild(box__firstDiv);
    boxDiv.appendChild(box__secondDiv);


    //ADD BUTTON
    let secondDiv__button_add = document.createElement("button");
    secondDiv__button_add.classList.add('btn_add');
    secondDiv__button_add.classList.add('fa');
    secondDiv__button_add.classList.add('fa-plus');
    box__secondDiv.appendChild(secondDiv__button_add);

    // COUNTING FIELD
    let countField = document.createElement("div");
    countField.classList.add('counter_field');
    box__secondDiv.appendChild(countField);
    countField.innerHTML = 0;


    //REMOVE BUTTON
    let secondDiv__button_remove = document.createElement("button");
    secondDiv__button_remove.classList.add('btn_remove');
    secondDiv__button_remove.classList.add('fa');
    secondDiv__button_remove.classList.add('fa-minus');

    box__secondDiv.appendChild(secondDiv__button_remove);

    //ADD ITEMS TO THE CART
    secondDiv__button_add.addEventListener("click", function addToCart() {

      ArrayOfCartItems.push({
        "id": element.id,
        "DeliveryOption": element.DeliveryOption,
        "price": element.price,
        "currency": element.currency
      });

      let Cart_btn = document.getElementsByClassName("btnCartPrice")[0];
      let sumOnCart = 0;


      //COUNT ITEM'S Price
      for (let i = 0; i < ArrayOfCartItems.length; i++) {
        sumOnCart += ArrayOfCartItems[i].price;
      }

      Cart_btn.innerHTML = sumOnCart;
      countField.innerHTML++;

    });


    // REMOVE ITEMS FROM THE CART
    secondDiv__button_remove.addEventListener("click", function removeFromCart() {
      let Cart_btn = document.getElementsByClassName("btnCartPrice")[0];
      let index = ArrayOfCartItems.findIndex(y => y.id === element.id);

      if (index !== -1) {
        ArrayOfCartItems.splice(index, 1);
        Cart_btn.innerHTML -= element.price;
        countField.innerHTML--; //Remove counter field's value
      }

    });

    //Add all divs to main container
    mainGridContainer.appendChild(boxDiv);
  });
}


//CHECKOUT BUTTON
document.getElementsByClassName('Cart_btn')[0].onclick = function () {
  //Session storage  method called to store values of Cart items from the array in the session storage
  sessionStorage.setItem('TheArray', JSON.stringify(ArrayOfCartItems));

  // redirect us to the second page whet Cart button is clicked
  window.location.href = '/page2.html';
};


// HAMBURGER ANIMATION
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