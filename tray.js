const trayItemsContainer = document.querySelector("#tray-items-container");
const summaryItemsContainer = document.querySelector(
  "#summary-items-container"
);
const meals = {
  Amala: [1, 500, "Assets/black amala 2.svg"],
  Ewedu: [1, 500, "Assets/EWEDU 2.svg"],
  Gbegiri: [1, 500, "Assets/gbegiri 2.svg"],
};
const mealList = Object.keys(meals);

localStorage.setItem("originalPrices", JSON.stringify(meals));

window.addEventListener("load", (event) => {
  loadTrayContent();
});

function increaseCount(meal, countIndex, priceIndex) {
  countIndex += 1;
  meals[meal][0] = countIndex;

  priceIndex =
    countIndex * JSON.parse(localStorage.getItem("originalPrices"))[meal][1];

  meals[meal][1] = priceIndex;

  loadTrayContent();
}

function reduceCount(meal, countIndex, priceIndex) {
  countIndex -= 1;
  meals[meal][0] = countIndex;

  if (countIndex < 1) {
    countIndex = 1;
    meals[meal][0] = countIndex;
  }
  priceIndex =
    countIndex * JSON.parse(localStorage.getItem("originalPrices"))[meal][1];

  meals[meal][1] = priceIndex;

  loadTrayContent();
}

function loadTrayContent() {
  trayItemsContainer.innerHTML = "";

  for (let i = 0; i < mealList.length; i++) {
    let trayItem = document.createElement("div");
    trayItem.classList.add("tray__item__container");

    trayItem.innerHTML = ` <div class= tray__item__image id="tray-item-image">

                        <img src="${meals[mealList[i]][2]}">

                       <div class="tray__item__name" id="tray-item-name">
                          <p>${mealList[i]}</p>
                       </div>

                         <div class="button">
                                <button><img src="Assets/delete.svg" alt="delete"> Remove</button>
                           </div>

                            </div>

                    <div class="tray__item__details">

                        
                        <div class="tray__item__price" id="tray-item-price">
                            <p>₦${meals[mealList[i]][1]}</p>
                        
                        </div>

                        <div class="tray__item__count">
                           <button id="item-count-reduce" onclick="reduceCount('${
                             mealList[i]
                           }',${meals[mealList[i]][0]}, ${
      meals[mealList[i]][1]
    })">-</button>
  
                            <p>${meals[mealList[i]][0]}</p> 
                            <button onclick="increaseCount('${mealList[i]}', ${
      meals[mealList[i]][0]
    }, ${meals[mealList[i]][1]})">+</button>
                            
                        </div>



                    </div>
                </div>


        

            </div>
`;
    trayItemsContainer.append(trayItem);
  }

  loadSummary();
}

function loadSummary() {
  summaryItemsContainer.innerHTML = "";
  for (let i = 0; i < mealList.length; i++) {
    let summaryItem = document.createElement("div");
    summaryItem.innerHTML = `
        <div class="tray__summary__item" id="tray-summary-item">
                    <div><p>${mealList[i]} x${meals[mealList[i]][0]}</p></div>
                    <div>₦${meals[mealList[i]][1]}</div>
                </div>
  `;

    summaryItemsContainer.append(summaryItem);
  }

  let sum = 0;
  for (let i = 0; i < mealList.length; i++) {
    sum += meals[mealList[i]][1];
  }

  let subTotal = document.createElement("div");
  subTotal.classList.add("sub__total");
  subTotal.innerHTML = `
    <hr class="line">
    <div class="tray__sub__total" id="tray-sub-total">

   
        <div>
            <p>Subtotal</p>
        </div>

        <div>
            <p>₦${sum}</p>
        </div>
                  
                </div>
        <button>Proceed to Checkout</button>
    `;

  summaryItemsContainer.append(subTotal);
}
