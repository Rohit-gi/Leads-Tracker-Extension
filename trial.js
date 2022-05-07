// let p1time = 100;
// let p2time = 104;

// function bestracetime() {
//   if (p1time < p2time) {
//     return p1time;
//   } else if (p2time < p1time) {
//     return p2time;
//   } else {
//     return p1time;
//   }
// }

// // let bestTime = bestracetime()
// // console.log(bestTime)

// function totaltime(){
//  return p1time+p2time
// }
// let finalTime = totaltime()
// console.log(finalTime)

// let randomNumber = Math.floor(Math.random() * 6)
// console.log(randomNumber)

// let flooredNumber = Math.floor(3.45632)
// console.log(flooredNumber)

// function rollDice(){
//   let randomNumber1 = Math.floor(Math.random() * 6 + 1);
//   return randomNumber1
// }

// let completedcourse = true
// let certificate = true

// if (completedcourse === true && certificate === true){
//   generateCertificate()
//   }

// function generateCertificate(){
//   console.log("Generating certificate---")
// }

// let challengeSolved = true
// let hintsLeft = false

// if (challengeSolved = false || hintsLeft == false){
//   showSolution()
// }
// function showSolution(){
//     console.log("Showing the solution---")
// }

// let likesdocumentaries = true
// let likesStartups = false

// if (likesdocumentaries === true || likesStartups === true){
//   recommendMovie()
// }
// function recommendMovie(){
//   console.log("Hey, check out this new film we think you will like")
// }

// let course = {
//   title: "Learn CSS grid for free",
//   lessons: 16,
//   creator: "Rohit",
//   length: 63
//   level: 2
//   isFree: true,
//   tags: ["html", "css"]
// }

// let castle = {
//   title: "Live like a king in my castle",
//   price: 109,
//   isSuperHost: true,
//   images: ["img/castle1.png", "img/castle2.png"]
// }

// console.log()

// let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// largeCountries.pop()
// largeCountries.push("Pakistan")
// largeCountries.shift()
// largeCountries.unshift("China")
// console.log(largeCountries)

// let dayOfMonth = 13
// let weekday = "Friday"

// if (dayOfMonth === 13 && weekday === "Friday"){
//   console.log("😎");
// }

// let hands = ["Rock", "Paper", "Scissor"]

// function getHand(){
//     let randomIndex = Math.floor(Math.random() * 3)
//         return hands[randomIndex]
// }

// console.log(getHand())

// let fruit = ["😎", "😎", "💖", "😎", "💖"];
// let appleShelf = document.getElementById("apple-shelf");
// let orangeShelf = document.getElementById("orange-shelf");

// function sortFruit() {
//   for (i = 0; i < fruit.length; i++) {
//     if (fruit[i] === "😎") {
//       appleShelf.textContent += "😎";
//     } else if (fruit[i] === "💖") {
//       orangeShelf.textContent += "💖";
//     }
//   }
// }
// sortFruit();

// let inputBtn = document.getElementById("input-btn")
// inputBtn.addEventListener("click", function(){
//     console.log("Button clicked from addEventListener")
//  })

// let box = document.getElementById("box")
// box.addEventListener("click", function(){
//     console.log("I want to open the box")
// })

// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")

// inputBtn.addEventListener("click", function(){
//     myLeads.push(inputEl.value)
//     console.log("myLeads")
//  })

let myLeads = ["www.lead1.com", "www.lead2.com", "www.lead3.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

let ulEl = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
	myLeads = leadsFromLocalStorage;
	render(myLeads);
}

function render(leads) {
	let listItems = "";
	for (let i = 0; i < leads.length; i++) {
		listItems += `
        <li>
        <a target='_blank' href='${leads[i]}'>
        ${leads[i]}
        </a> 
        </li>
        `;
		// const li = document.createElement("li") //create element
		// li.textContent = myLeads[i] //set text content
		// ulEl.append(li) //append to ul
	}
	ulEl.innerHTML = listItems;

	// const container = document.getElementById("container")
	// container.innerHTML = "<button onclick='buy()'>Buy!</button>"

	// function buy(){
	//     container.innerHTML += "<p>Thank you for buying!</p>"
	// }
}

const tabs = [{ url: "https://www.linkedin.com/in/rohit" }];

tabBtn.addEventListener("click", function () {
	//console.log(tabs[0].url);
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		myLeads.push(tabs[0].url);
		localStorage.setItem("myLeads", JSON.stringify(myLeads));
		render(myLeads);
	});
}); 



deleteBtn.addEventListener("dblclick", function () {
	console.log("double-clicked!");
	localStorage.clear();
	myLeads = [];
	render(myLeads);
});

inputBtn.addEventListener("click", function () {
	myLeads.push(inputEl.value);
	inputEl.value = "";
	render(myLeads);
});
