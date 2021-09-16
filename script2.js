//Link to the second page
let sessionString = sessionStorage.getItem('TheArray');
let page2Array = JSON.parse(sessionString);

//Get info about array from page2Array and create span elements on 2nd page
let span__name_price = document.getElementsByClassName("container_item_price")[0]; // Container on the second page with names pf items and their prices

page2Array.forEach(element => {
  
  let nameAndPrice = document.createElement("span");
  nameAndPrice.classList.add('item_price');
  nameAndPrice.innerHTML = element.DeliveryOption + " : " + element.price + " " + element.currency +  "</br>";
  
  span__name_price.appendChild(nameAndPrice);


});

// CREATE SPACE AND LINE BEFORE TOTAL
span__name_price.appendChild(document.createElement("br"));
span__name_price.appendChild(document.createElement('hr'));


// SUMM OF PRICES
let totalPrice;
totalPrice = document.createElement('span');
totalPrice.classList.add('item_total');

let total = 0;

for (let i = 0; i < page2Array.length; i++) {
  total += page2Array[i].price;
}

totalPrice.innerHTML= "Total " + total + " " + page2Array[0].currency;
span__name_price.appendChild(totalPrice);


// CART COUNTING ITEMS

document.getElementsByClassName("countingCart")[0].innerHTML= page2Array.length;


