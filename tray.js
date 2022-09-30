const trayContent = document.querySelector("#tray-content");
let itemCount = [1, 1, 1];
let itemPrice = [500, 500, 500];

localStorage.setItem("originalPrices", JSON.stringify(itemPrice));

window.addEventListener("load", (event) => {
  loadTrayContent();
});

function increaseCount(countIndex, priceIndex) {
  itemCount[countIndex] += 1;

  itemPrice[priceIndex] =
    itemCount[countIndex] *
    JSON.parse(localStorage.getItem("originalPrices"))[priceIndex];

  loadTrayContent();
}

function reduceCount(countIndex, priceIndex) {
  itemCount[countIndex] -= 1;

  if (itemCount[countIndex] < 1) {
    itemCount[countIndex] = 1;
  }
  itemPrice[priceIndex] =
    itemCount[countIndex] *
    JSON.parse(localStorage.getItem("originalPrices"))[priceIndex];

  loadTrayContent();
}

function loadTrayContent() {
  trayContent.innerHTML = `

  <div class="tray__items__container" id="tray-items-container">
                <div class="tray__item__container" id="tray-item-container">
                    <div class= tray__item__image id="tray-item-image">

                        <img src="Assets/black amala 2.svg" alt="amala">

                        <div class="tray__item__name" id="tray-item-name">
                            <p>Amala</p>
                        </div>

                        <div class="button">
                                <button><img src="Assets/delete.svg" alt="delete"> Remove</button>
                            </div>

                        
                    </div>

                    <div class="tray__item__details">

                        
                        <div class="tray__item__price" id="tray-item-price">
                            <p>₦${itemPrice[0]}</p>
                        
                        </div>

                        <div class="tray__item__count">
                           <button id="item-count-reduce" onclick="reduceCount(0,0)">-</button>
  
                            <p>${itemCount[0]}</p> 
                            <button onclick="increaseCount(0,0)">+</button>
                            
                        </div>



                    </div>
                </div>


                <div class="tray__item__container" id="tray-item-container">
                    <div class=tray__item__image id="tray-item-image">
                
                        <img src="Assets/EWEDU 2.svg" alt="amala">
                
                        <div class="tray__item__name" id="tray-item-name">
                            <p>Ewedu</p>
                        </div>
                
                        <div class="button">
                            <button><img src="Assets/delete.svg" alt="delete"> Remove</button>
                        </div>
                
                
                    </div>
                
                    <div class="tray__item__details">
                
                
                        <div class="tray__item__price" id="tray-item-price">
                            <p>₦${itemPrice[1]}</p>
                
                        </div>
                
                        <div class="tray__item__count">
                            <button onclick="decreaseCount(1,1)">-</button>
                
                             <p>${itemCount[1]}</p> 
                            <button onclick="increaseCount(1,1)">+</button>
                
                        </div>
                
                
                
                    </div>
                </div>


                <div class="tray__item__container" id="tray-item-container">
                    <div class=tray__item__image id="tray-item-image">
                
                        <img src="Assets/gbegiri 2.svg" alt="amala">
                
                        <div class="tray__item__name" id="tray-item-name">
                            <p>Gbegiri</p>
                        </div>
                
                        <div class="button">
                            <button><img src="Assets/delete.svg" alt="delete"> Remove</button>
                        </div>
                
                
                    </div>
                
                    <div class="tray__item__details">
                
                
                        <div class="tray__item__price" id="tray-item-price">
                            <p>₦${itemPrice[2]}</p>
                
                        </div>
                
                        <div class="tray__item__count">
                            <button onclick="decreaseCount(2,2)">-</button>
                
                             <p>${itemCount[2]}</p> 
                            <button onclick="increaseCount(2,2)">+</button>
                
                        </div>
                
                
                
                    </div>
                </div>

            </div>

            <div class="note__container" id="note-container">
                <p>Add a note (optional)</p>
                <form action="" class="tray__form" id="tray-form">
                   <input type="text" id="add-notes">
            </div>

            <div class="tray__summary__container" id="tray-summary-container">

            </div>
    
    
    `;
}
