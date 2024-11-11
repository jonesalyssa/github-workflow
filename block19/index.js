let totalPrice = 0;
let profilesDisplayed = 0;

function initializeAveragePrice() {
  const averagePriceDiv = document.createElement("div");
  averagePriceDiv.id = "average-price";
  averagePriceDiv.textContent = "The Average Starting Price is $40";
  document.body.appendChild(averagePriceDiv);
}

function updateAveragePrice() {
  const averagePrice = (totalPrice / profilesDisplayed).toFixed(2);
  document.getElementById(
    "average-price"
  ).textContent = `The Average Starting Price is $${averagePrice}`;
}

//========================================= GET ABOVE WORKING BEFORE SUBMITTING

const results = [
  { name: "Alice", price: 30, Occupation: "Writer" },
  { name: "Bob", price: 50, Occupation: "Teacher" },
];

const freelancers = [
  { name: "Carol", price: 70, Occupation: "Programmer" },
  { name: "Jim", price: 80, Occupation: "Graphic Designer" },
  { name: "Jack", price: 45, Occupation: "Social Media Manager" },
  { name: "John", price: 35, Occupation: "Ghost Writer" },
  { name: "Alex", price: 85, Occupation: "Event Planner" },
  { name: "Tyler", price: 60, Occupation: "Accountant" },
  { name: "Taylor", price: 20, Occupation: "Podcast Editor" },
  { name: "Amy", price: 90, Occupation: "Videographer" },
  { name: "Stephen", price: 40, Occupation: "Marketing Agent" },
];

function renderFreelancer(profile) {
  const freelancerDiv = document.createElement("div");
  freelancerDiv.classList.add("freelancer");
  freelancerDiv.innerHTML = `
    <h2>${profile.name}</h2>
    <p>Occupation: ${profile.Occupation}</p>
    <p>Price: $${profile.price}</p>
  `;
  document.body.appendChild(freelancerDiv);
  totalPrice += profile.price;
  profilesDisplayed++;
  updateAveragePrice();
}

function renderRemainingFreelancersWithDelay() {
  let index = 0;
  const interval = setInterval(() => {
    if (index < freelancers.length) {
      renderFreelancer(freelancers[index]);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 2000);
}

renderRemainingFreelancersWithDelay();

const body = document.querySelector("body");

// =================================================

const init = () => {
  const section = document.createElement("section");

  for (let i = 0; i < results.length; i++) {
    const element = results[i];
    const div = document.createElement("div");
    div.style.display = "grid";

    const h2 = document.createElement("h2");
    h2.innerText = element.name;

    const occupation = document.createElement("p");
    occupation.innerText = `Occupation: ${element.Occupation}`;

    const price = document.createElement("p");
    price.innerText = `Price: $${element.price}`;

    //----------- DO NOT TOUCH THE ABOVE, IT TOOK YOU LONG ENOUGH TO FIGURE IT OUT

    const img = document.createElement("img");
    img.src = element.image;
    img.style.width = "0";
    const a = document.createElement("a");
    a.innerText = "";

    //----------- can't figure out how to delete above without deleting the whole section

    div.append(h2);
    div.appendChild(occupation);
    div.appendChild(price);

    div.append(img);
    div.append(a);

    section.append(div);

    totalPrice += element.price;
    profilesDisplayed++;
  }
  body.append(section);
};

initializeAveragePrice();

init();
