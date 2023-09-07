const products = [
  {
    "id": 1,
    "title": "Medicine1",
    "price": 10.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
  },
  {
    "id": 2,
    "title": "Paracetamol",
    "price": 19.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 13.9,
        "count": 120
    }
  }
]

function displayContent(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("home").click();

async function getProducts() {
  // const resp = await fetch('https://fakestoreapi.com/products')
  // const data = await resp.json()
  // console.log(data)
  showProducts(products);
}

const app = document.getElementById("app")

function showProducts(products){
  // console.log("showProducts")
  products.forEach((p) => {
    const pr = document.createElement('div')
    pr.innerHTML = 
      `<div class="container" style="display: flex;">
        <div style="width: 50%;">
          <div>
            <img src="${p.image}" width="200" height="300">
          </div>
        </div>
        <div >
          <h3>${p.title}</h3>
          <h3>${p.price}</h3>
          <p>${p.description}</p>
          <button type="button">Add Item</button>
        </div>
      </div>`
     app.appendChild(pr)
  })
}

getProducts()


/* const data = getData() *
