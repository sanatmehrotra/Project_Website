document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");

    function fadeInElements() {
        elements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            const isVisible = (rect.top >= 0 && rect.top <= window.innerHeight);

            if (isVisible) {
                element.style.animation = "fadeIn 1s forwards";
            }
        });
    }
    fadeInElements();
    document.addEventListener("scroll", fadeInElements);
});
var tips = [
    "Use a reusable bottle/cup for beverages on-the-go",
    "Use reusable grocery bags, and not just for groceries",
    "Purchase wisely and recycle",
    "Compost it!",
    "Avoid single-use food and drink containers and utensils",
    "Buy secondhand items and donate used goods",
    "Shop local farmers markets and buy in bulk to reduce packaging",
    "Curb your use of paper: mail, receipts, magazines",
    "BULK GOODS ARE THE ULTIMATE ECO FRIENDLY PRODUCTSBULK GOODS ARE THE ULTIMATE ECO FRIENDLY PRODUCTS",
    "NO PLASTIC BOTTLES",
    "INVEST IN A SET OF CLOTH PRODUCE BAGS",
    "AVOID PRODUCE THAT'S WRAPPED IN PLASTIC",
    "SUPPORT YOUR LOCAL FARMER",
    "AVOID SINGLE-USE PLASTICS",
    "DITCH THE TEA BAGS",
    "GREEN UP YOUR CLOSET",
    "PLAN YOUR MEALS",
    "GIVE VEGGIES A CHANCE",
    "COMPOST YOUR FOOD SCRAPS",
    "REPLACE PLASTIC WRAP WITH BEES WRAP",
    "GIVE UGLY VEGGIES AND DENTED CANS A CHANCE",
    "REUSE OLD CLOTHES",
    "REPLACE YOUR SOAP BOTTLES WITH BARS",
    "MAKE YOUR OWN CLEANING PRODUCTS",
    "CHECK THE AIR FILTER IN YOUR CAR",
    "RECYCLE SPARE TIRES",
    "USE DIGITAL INSTEAD OF PRINT",
    "Practise FIFO (First In, First Out)",
    "Switch to paperless billing",
    "Swap your toothbrush",
    "Buy secondhand clothing",
    "Buy funny-looking produce",
    "Make a questionables bin",
    "Support sustainable takeout",
    "Change up your coffee game",
    "Join buy-and-sell groups",
    "Make the best diaper choice for your family",
    "Avoid buying oversize packages",
    "Ditch squeeze packs",
    "Extend the life of your clothing",
    "Bulk up",
    "Carry a takeout kit",
    "Replace dryer sheets with reusable dryer balls",
    "Use reusable bags—for produce too",
    "Put a \"no junk mail\" sticker on your mailbox",
    "Ditch disposables in the kitchen",
    "Shop your village",
    "Use up the entire produce",
    "Take stock",
    "Clean out your inbox",
    "The freezer is your friend",
    "Make a family gimme list",
    "Start composting in the kitchen and yard",
    "Food scraps and yard debris can be composted into fertilizer, helping the soil too!",
    "Go paperless in the kitchen too",
    "Forget paper towels and start using reusable wash cloths and napkins.",
    "Pay your bills online!",
    "Going paperless with your bank and other bills helps saves trees!",
    "Taking a few minutes to “unsubscribe” to this excess mail can help reduce paper usage.",
    "Buy in bulk",
    "Donate your old goods.",
    "Old clothing, furniture, books, and really anything can be donated!",
    "Repurpose old things like using old tee shirts as cleaning rags"
]

const min = 0;
const max = tips.length;
var tipElem = document.getElementById('tips');

setInterval(() => {
  var rand = Math.floor(Math.random() * (max - min)) + min;
  tipElem.classList.remove("fade");
  setTimeout(() => {
    tipElem.innerHTML = tips[rand];
    tipElem.classList.add("fade");
  }, 2000); // Adjust this time to match the CSS transition duration
}, 8000);

function calculateEmissions() {
    var electricity = document.getElementById('electricity').value;
    var gas = document.getElementById('gas').value;
    var biomass = document.getElementById('biomass').value;
    var coal = document.getElementById('coal').value;
    var heatingOil = document.getElementById('heatingOil').value;
    var lpg = document.getElementById('lpg').value;

   
    var emissionsPerKwh = {
        'electricity': 0.527,
        'gas': 0.204,
        'biomass': 0.025,
        'coal': 0.317,
        'heatingOil': 0.274,
        'lpg': 0.241
    };

    var totalEmissions = (electricity * emissionsPerKwh.electricity) +
                         (gas * emissionsPerKwh.gas) +
                         (biomass * emissionsPerKwh.biomass) +
                         (coal * emissionsPerKwh.coal) +
                         (heatingOil * emissionsPerKwh.heatingOil) +
                         (lpg * emissionsPerKwh.lpg);


    document.getElementById('result').innerHTML = "Total carbon emissions: " + totalEmissions.toFixed(2) + " kg CO2";

    document.getElementById('electricity').value = '';
    document.getElementById('gas').value = '';
    document.getElementById('biomass').value = '';
    document.getElementById('coal').value = '';
    document.getElementById('heatingOil').value = '';
    document.getElementById('lpg').value = '';
}