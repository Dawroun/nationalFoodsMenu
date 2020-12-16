const menu = [
  {
    id: 1,
    title: "Ready Eggs",
    category: "breakfast",
    price: 4.99,
    img: "./images/eggs.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "Uzbek Plov",
    category: "lunch",
    price: 13.99,
    img: "./images/plov.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "Chuchvara",
    category: "dinner",
    price: 25.99,
    img: "./images/chuchvara.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 4,
    title: "Baklava",
    category: "dessert",
    price: 6.99,
    img: "./images/baklava.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 5,
    title: "Salad Shuba",
    category: "Salads",
    price: 11.99,
    img: "./images/shuba.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 6,
    title: "Blinchiki",
    category: "breakfast",
    price: 6.99,
    img: "./images/blini.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 7,
    title: "Shashlyk",
    category: "lunch",
    price: 22.99,
    img: "./images/shashlyk.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 8,
    title: "Lagman",
    category: "dinner",
    price: 16.99,
    img: "./images/lagman.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 9,
    title: "Napaleon",
    category: "dessert",
    price: 18.99,
    img: "./images/napaleon.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 10,
    title: "Jams (for breakfast)",
    category: "breakfast",
    price: 9.99,
    img: "./images/jams.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 11,
    title: "Norin",
    category: "dinner",
    price: 18.99,
    img: "./images/norin.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 12,
    title: "Salad Oliviye",
    category: "Salads",
    price: 13.99,
    img: "./images/oliviye.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 13,
    title: "Uzbek Manty",
    category: "lunch",
    price: 12.99,
    img: "./images/manti.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 14,
    title: "Medovik",
    category: "dessert",
    price: 16.99,
    img: "./images/medovik.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 15,
    title: "Mastava",
    category: "dinner",
    price: 39.99,
    img: "./images/mastava.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 16,
    title: "Uzbek Somsa",
    category: "lunch",
    price: 12.99,
    img: "./images/somsa.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 17,
    title: "Salad Svejiy",
    category: "Salads",
    price: 7.99,
    img: "./images/svejiy.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// load Items
window.addEventListener("DOMContentLoaded", function(){
  // console.log("Nima Gapla?")
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function(item){
    return `
    <article class="menu-item">
      <img src= ${item.img} class="photo" alt=${item.title}>
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
    </article>`
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce( function (values, item) {
    if(!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  }, 
  ['all']
  );
  const categoryBtns = categories.map(function(category) {
    return `<button class="filter-btn" type="button" data-id = ${category} >${category}</button>`
  }).join("");
  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".filter-btn");

  // Filter Items
filterBtns.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function (menuItem) {
      if(menuItem.category === category) {
        return menuItem;
      }
    });
    // console.log(menuCategory);
    if(category === "all"){
      displayMenuItems(menu);
    } else {
      displayMenuItems(menuCategory);
    }
  });
});

}