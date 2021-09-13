//Link to the second page
let sessionString = sessionStorage.getItem('TheArray');
let page2Array = JSON.parse(sessionString);
console.log(sessionString);

//take info about array from page2Array and create span elements on 2nd page
let containerNP = document.getElementsByClassName("container_item_price")[0]; // Container on the second page with names pf items and their prices


page2Array.forEach(element => {
  let nameAndPrice = document.createElement("span");
  nameAndPrice.classList.add('item_price');
  nameAndPrice.innerHTML = element.DeliveryOption + " : " + element.price + "</br>";
  
containerNP.appendChild(nameAndPrice);
});

