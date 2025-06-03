const year = document.querySelector("#year");
year.innerHTML = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = new Date(document.lastModified).toLocaleString();

const mainnav = document.querySelector(".navigation")
const hammenu = document.querySelector("#menu");

hammenu.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hammenu.classList.toggle("show");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
    // Add more temple objects here...
  {
    templeName: "Bacolod philippines Temple",
    location: "Bacolod, Philippines",
    dedicated: "2019, October, 5",
    area: 26700,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/bacolod-philippines-temple/bacolod-philippines-temple-60736.jpg"
    },
    
    {
    templeName: "Casper Wyoming Temple",
    location: "Casper, Wyoming USA",
    dedicated: "2024, November, 24",
    area: 9950,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/casper-wyoming-temple/casper-wyoming-temple-51918.jpg"
    },

    {
    templeName: "Portland Oregon Temple",
    location: "Portland, Oregon USA",
    dedicated: "1989, August, 19-21",
    area: 80500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/portland-oregon-temple/portland-oregon-temple-51641.jpg"
    },
];


createTempleCard();

const alllink = document.querySelector("#all");

alllink.addEventListener("click", () => { (createTempleCard()) });

const oldlink = document.querySelector("#old");

function filterOldTemples() {
    return temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 1900;
    });
}

oldlink.addEventListener("click", () => { createTempleCard(filterOldTemples()); });

const newlink = document.querySelector("#new");

function filterNewTemples() {
    return temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
    });
}

newlink.addEventListener("click", () => { createTempleCard(filterNewTemples()) });

const smalllink = document.querySelector("#small")

function filterSmall() {
    return temples.filter(temple => {
        return temple.area < 10000;
    }); 
} 


smalllink.addEventListener("click", () => { (createTempleCard(filterSmall())) });

const largelink = document.querySelector("#large")

function filterLarge() {
    return temples.filter(temple => {
        return temple.area > 90000;
    }); 
} 


largelink.addEventListener("click", () => { (createTempleCard(filterLarge())) });

function createTempleCard(templeList = temples) {
    document.querySelector(".tcard").innerHTML = "";
    templeList.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="Label">Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class="Label">dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="Label">Area:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} temple`)
        img.setAttribute("loading", "lazy");

        img.setAttribute("style", "max-width: 400px; max-height: 250px;");

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);

        document.querySelector(".tcard").appendChild(card)
    })
}