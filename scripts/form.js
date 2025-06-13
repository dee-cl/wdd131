const year = document.querySelector("#year");
year.innerHTML = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = new Date(document.lastModified).toLocaleString();

const reviewNum = document.querySelector("#review");
if (reviewNum) {
  reviewNum.innerHTML = getReviewCount() || 0;
}
function getReviewCount() {
    return JSON.parse(localStorage.getItem("reviewCount"));
}

function setReviewCount(count) {
    localStorage.setItem("reviewCount", JSON.stringify(count));
}

let reviewCount = getReviewCount() || 0;


const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const button = document.querySelector("#submitbut");

const productSelect = document.querySelector("#product");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

button.addEventListener("click", () => { 
  reviewCount += 1;
  setReviewCount(reviewCount);
  reviewNum.innerHTML = reviewCount;
})