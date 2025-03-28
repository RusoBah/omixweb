const btnMonth = document.getElementById("btn__month");
const btnYear = document.getElementById("btn__year");
const oldPrice = document.querySelectorAll(".old__price");
const newPrice = document.querySelectorAll(".new__price");

btnYear.onclick = function(event){
  newPrice.forEach(price => price.style.display = "block");

  oldPrice.forEach(price => {
    price.style.textDecoration = "line-through";
    price.style.fontSize = "16px";
    price.style.color = "#666";
  });
}

btnMonth.onclick = function(event){
  newPrice.forEach(price => price.style.display = "none");

  oldPrice.forEach(price => {
    price.style.textDecoration = "none";
    price.style.fontSize = "18px";
    price.style.color = "var(--font-color)";
  });
}

