const DISCOUNT_RATE = 0.10;

const products = [
    {category:"Crackers",name:"2 3/4 KURUVI",type:"1 PKT",mrp:70,price:14},
    {category:"Crackers",name:"3 1/2 LAKSHMI",type:"1 PKT",mrp:90,price:18},
    {category:"Crackers",name:"4” LAKSHMI",type:"1 PKT",mrp:175,price:35},
    {category:"Crackers",name:"4” SUPER DELUXE LAKSHMI",type:"1 PKT",mrp:240,price:48},
    {category:"Crackers",name:"4” GOLD LAKSHMI",type:"1 PKT",mrp:260,price:52},
    {category:"Crackers",name:"4” DELUXE GOLD LAKSHMI",type:"1 PKT",mrp:325,price:65},
    {category:"Crackers",name:"5” AVATHAR",type:"1 PKT",mrp:340,price:68},
    {category:"Crackers",name:"6” TIGER",type:"1 PKT",mrp:400,price:80},
    {category:"Crackers",name:"TWO SOUND",type:"1 PKT",mrp:325,price:65},
    {category:"Crackers",name:"6” LION GUN",type:"1 PKT",mrp:675,price:null},
    {category:"Crackers",name:"6” AVATHAR 10 PCS",type:"1 BOX",mrp:1350,price:270},

    {category:"Bijili",name:"RED BIJILI (100 PCS)",type:"1 BAG",mrp:240,price:48},
    {category:"Bijili",name:"RED BIJILI (50 PCS)",type:"1 BAG",mrp:130,price:26},
    {category:"Bijili",name:"STRIPPED BIJILI (100PCS)",type:"1 BAG",mrp:275,price:55},
    {category:"Bijili",name:"STRIPPED BIJILI 50 BAG",type:"1 BAG",mrp:150,price:30},

    {category:"Bombs",name:"KING OF KING (10PCS)",type:"1 BOX",mrp:725,price:145},
    {category:"Bombs",name:"CLASSIC BOMB (10PCS)",type:"1 BOX",mrp:875,price:175},
    {category:"Bombs",name:"AGNI BOMB (10PCS)",type:"1 BOX",mrp:1150,price:230},
    {category:"Bombs",name:"DIGITAL BOMB (10 PCS)",type:"1 BOX",mrp:1350,price:270},
    {category:"Bombs",name:"BULLET BOMB (10PCS)",type:"1 BOX",mrp:200,price:40},
    {category:"Bombs",name:"555 BOMB (10 PCS)",type:"1 BOX",mrp:1050,price:210},
    {category:"Bombs",name:"GANGA JAMUNA FLOWER BOMB (5PCS)",type:"1 BOX",mrp:675,price:135},
    {category:"Bombs",name:"CYLINDER BOMB 3 DIFFERENT SMOKE",type:"1 PCS",mrp:1650,price:330},

    {category:"Flower Pots",name:"FLOWER POT BIG (10PCS)",type:"1 BOX",mrp:450,price:90},
    {category:"Flower Pots",name:"FLOWER POT SPECIAL (10PCS)",type:"1 BOX",mrp:575,price:115},
    {category:"Flower Pots",name:"FLOWER POT ASHOKA (10PCS)",type:"1 BOX",mrp:775,price:155},
    {category:"Flower Pots",name:"FLOWER POT COLOUR KOTI (10PCS)",type:"1 BOX",mrp:1050,price:210},
    {category:"Flower Pots",name:"FLOWER POTS COLOUR KOTI DELUXE (5PCS)",type:"1 BOX",mrp:1125,price:225},
    {category:"Flower Pots",name:"DELUXE COLOR KOTI (10PCS)",type:"1 BOX",mrp:1900,price:380},
    {category:"Flower Pots",name:"SURYAKALA GYPSY 5 IN 1",type:"5 PCS / 1 BOX",mrp:1275,price:255},
    {category:"Flower Pots",name:"TRI COLOUR (5PCS)",type:"1 BOX",mrp:1600,price:null},

    {category:"Chakkars",name:"CHAKKAR BIG (10PCS)",type:"1 BOX",mrp:260,price:52},
    {category:"Chakkars",name:"CHAKKAR SPECIAL (10PCS)",type:"1 BOX",mrp:520,price:104},
    {category:"Chakkars",name:"CHAKKAR DELUXE (10PCS)",type:"1 BOX",mrp:975,price:195},

    {category:"Twinkling Star",name:"1 ½’ TWINKLING STAR",type:"1 BOX",mrp:225,price:45},
    {category:"Twinkling Star",name:"4’ TWINKLING STAR",type:"1 BOX",mrp:675,price:135},

    {category:"Rockets",name:"ROCKET BOMB (10PCS)",type:"1 BOX",mrp:375,price:75},

    {category:"Sparklers",name:"7 CM ELECTRIC SPARKLER (10PCS)",type:"1 BOX",mrp:85,price:17},
    {category:"Sparklers",name:"7 CM COLOUR SPARKLERS",type:"1 BOX",mrp:95,price:19},
    {category:"Sparklers",name:"7 CM GREEN SPARKLERS",type:"1 BOX",mrp:100,price:20},
    {category:"Sparklers",name:"10CM ELECTRIC SPARKLERS 10PCS",type:"1 BOX",mrp:130,price:26},
    {category:"Sparklers",name:"10CM COLOUR SPARKLERS (10PCS)",type:"1 BOX",mrp:150,price:30},
    {category:"Sparklers",name:"10 CM GREEN COLOUR SPARKLER 10PCS",type:"1 BOX",mrp:160,price:32},
    {category:"Sparklers",name:"15CM ELECTRIC SPARKLERS (10PCS)",type:"1 BOX",mrp:275,price:55},
    {category:"Sparklers",name:"15CM COLOUR SPARKLERS (10PCS)",type:"1 BOX",mrp:290,price:58},
    {category:"Sparklers",name:"15 CM GREEN COLOUR SPARKLERS (10PCS)",type:"1 BOX",mrp:315,price:63},
    {category:"Sparklers",name:"15 CM RED COLOUR SPARKLERS (10PCS)",type:"1 BOX",mrp:340,price:68},
    {category:"Sparklers",name:"30CM ELECTRIC SPARKLERS (5PCS)",type:"1 BOX",mrp:275,price:55},
    {category:"Sparklers",name:"30CM COLOUR SPARKLERS (5PCS)",type:"1 BOX",mrp:290,price:58},
    {category:"Sparklers",name:"30 CM GREEN COLOUR SPARKLERS (5PCS)",type:"1 BOX",mrp:315,price:63},
    {category:"Sparklers",name:"30 CM RED COLOUR SPARKLERS (5PCS)",type:"1 BOX",mrp:340,price:68},
    {category:"Sparklers",name:"50CM ELECTRIC SPARKLERS (5PCS)",type:"1 BOX",mrp:1100,price:220},
    {category:"Sparklers",name:"50CM COLOUR SPARKLERS (5PCS)",type:"1 BOX",mrp:1175,price:235},
	{category:"Peacock",name:"MATCHBOX JUMBO 10 IN 1 MUKTICOLOUR",type:"1 BOX",mrp:1800,price:360},
    {category:"Peacock",name:"LITTLE PEACOCK",type:"1 PCS",mrp:825,price:165},
    {category:"Peacock",name:"RAINBOW PEACOCK",type:"1 PCS",mrp:1200,price:240},
    {category:"Peacock",name:"BADA PEACOCK",type:"1 PCS",mrp:2100,price:420},

    {category:"Paper Bomb",name:"PAPER BOMB (250G)",type:"1 BOX",mrp:400,price:80},
    {category:"Paper Bomb",name:"PAPER BOMB (500G)",type:"1 BOX",mrp:800,price:160},
    {category:"Paper Bomb",name:"COLOUR PAPER BOMB",type:"1 BOX",mrp:335,price:67},

    {category:"Special",name:"MONEY IN THE BANK",type:"1 BOX",mrp:425,price:85},
    {category:"Special",name:"COLOUR SMOKE",type:"1 BOX / 3 PCS",mrp:950,price:190},

    {category:"Shots",name:"12SHOT RIDER",type:"1 BOX",mrp:825,price:165},
    {category:"Shots",name:"25 SHOTS RIDER",type:"1 BOX",mrp:1350,price:270},
    {category:"Shots",name:"12 SHOTS RED & GREEN",type:"1 BOX",mrp:1225,price:245},
    {category:"Shots",name:"30 SHOTS COLOUR",type:"1 BOX",mrp:2450,price:490},
    {category:"Shots",name:"60 SHOTS COLOUR",type:"1 BOX",mrp:4900,price:980},
    {category:"Shots",name:"120 SHOTS COLOUR",type:"1 BOX",mrp:9800,price:1960},

    {category:"Multishot",name:"30 MULTISHOT COLOUR",type:"1 BOX",mrp:2875,price:575},
    {category:"Multishot",name:"60 MULTHISHOT COLOUR",type:"1 BOX",mrp:5750,price:1150},
    {category:"Multishot",name:"120 MULTISHOT",type:"1 BOX",mrp:11500,price:2300},
    {category:"Multishot",name:"240 MULTISHOT COLOUR",type:"1 BOX",mrp:23000,price:4600},

    {category:"Fancy",name:"SKYSHOT (5PCS)",type:"1 BOX",mrp:750,price:150},
    {category:"Fancy",name:"1 ¾’’ CHOTTA FANCY 3 COLOUR (1 PCS)",type:"1 BOX",mrp:350,price:70},
    {category:"Fancy",name:"7 SHOT COLOUR (1PCS)",type:"1 BOX",mrp:200,price:40},
    {category:"Fancy",name:"7 SHOT COLOUR (5 PCS)",type:"1 BOX",mrp:1000,price:200},
    {category:"Fancy",name:"2 1/2 FANCY 4 COLOUR",type:"1 PCS",mrp:750,price:150},
    {category:"Fancy",name:"2 1/2 3PCS BOX FANCY",type:"1 BOX",mrp:1650,price:330},
    {category:"Fancy",name:"3 1/2 FANCY PIPE 6 COLOUR",type:"1 PCS / 1 BOX",mrp:1550,price:310},
    {category:"Fancy",name:"3 1/2 FANCY 2IN1 (2PCS)",type:"2 PCS",mrp:2750,price:550},
    {category:"Fancy",name:"3 1/2 NAYAGARA FALLS",type:"1 PCS",mrp:1725,price:345},
    {category:"Fancy",name:"4’’ FANCY DOUBLE BALL",type:"1 PCS",mrp:2250,price:450},

    {category:"Wheels",name:"WHISHLING WHEEL (5 PCS)",type:"1 BOX",mrp:700,price:140},
    {category:"Wheels",name:"DISCO WHEEL (5 PCS)",type:"1 BOX",mrp:600,price:120},
    {category:"Wheels",name:"WIRE CHAKKAR",type:"1 BOX",mrp:1225,price:245},
    {category:"Wheels",name:"4X4 WHEEL",type:"1 BOX",mrp:950,price:190},
	{category:"Novelty",name:"TWEET",type:"1 BOX",mrp:1050,price:210},
    {category:"Novelty",name:"POPPINGS",type:"1 BOX",mrp:1100,price:220},
    {category:"Novelty",name:"6000",type:"1 BOX",mrp:1100,price:220},
    {category:"Novelty",name:"GOLDEN PEACOCK",type:"1 BOX",mrp:1100,price:220},
    {category:"Novelty",name:"TIN 5 IN 1",type:"1 PCS",mrp:800,price:160},
    {category:"Novelty",name:"DISCO SHOWER 5 IN 1 (5PCS)",type:"1 BOX",mrp:800,price:160},
    {category:"Novelty",name:"JOLLY RANCHERS 5 IN 1",type:"5 PCS",mrp:1175,price:235},
    {category:"Novelty",name:"JOLLY RANCHERS 1 PCS",type:"1 PCS",mrp:275,price:55},
    {category:"Novelty",name:"UNDO REDO LAVA 3 IN1",type:"3 PCS",mrp:1250,price:250},
    {category:"Novelty",name:"UNDO REDO LAVA",type:"1 PCS",mrp:405,price:81},
    {category:"Novelty",name:"CARTOON",type:"1 BOX",mrp:175,price:35},
    {category:"Novelty",name:"JEE BOOM",type:"1 BOX",mrp:80,price:16},
    {category:"Novelty",name:"MAGIC POPS",type:"1 BOX",mrp:80,price:16},
    {category:"Novelty",name:"ELECTRIC STONE",type:"1 BOX",mrp:85,price:17},
    {category:"Novelty",name:"KITKAT",type:"1 BOX",mrp:200,price:40},
    {category:"Novelty",name:"GOLDEN DUCK",type:"1 PCS",mrp:1650,price:330},
    {category:"Novelty",name:"EMU EGGS (2PCS)",type:"1 BOX",mrp:1200,price:240},
    {category:"Novelty",name:"AK-47 SPECIAL",type:"1 PCS",mrp:1450,price:290},
    {category:"Novelty",name:"BUS FOUNTAIN 3 IN 1 MULTICOLOUR CRACKLING",type:"1 PCS",mrp:1575,price:315},
    {category:"Novelty",name:"METRO TRAIN 3 FUNCTION",type:"1 PCS",mrp:1575,price:315},
    {category:"Novelty",name:"SKY DRONE",type:"5 PCS",mrp:850,price:170},
    {category:"Novelty",name:"ULTRA PENCIL (CRACKLING & MULTICOLOUR)",type:"1 BOX",mrp:725,price:145},
    {category:"Novelty",name:"MAGIC WHIP",type:"1 BOX",mrp:1125,price:null},
    {category:"Novelty",name:"SIREN (3PCS)",type:"1 BOX",mrp:725,price:145},
    {category:"Novelty",name:"MINI SIREN (5PCS)",type:"1 BOX",mrp:750,price:150},
    {category:"Novelty",name:"SPINNER",type:"1 BOX",mrp:700,price:140},
    {category:"Novelty",name:"HELICOPTER",type:"1 BOX",mrp:750,price:150},
    {category:"Novelty",name:"BUTTERFLY",type:"1 BOX",mrp:650,price:130},
    {category:"Novelty",name:"LOLLIPOP",type:"1 BOX",mrp:1150,price:230},
    {category:"Novelty",name:"PHOTOFLASH (5PCS)",type:"1 BOX",mrp:600,price:120},
    {category:"Novelty",name:"SERPENT EGGS",type:"10 BOX",mrp:225,price:45},
    {category:"Novelty",name:"7’’ PENCIL",type:"1 BOX",mrp:300,price:60},
    {category:"Novelty",name:"SELFIE STICK (3PCS)",type:"1 BOX",mrp:675,price:135},

    {category:"Item Box",name:"25 ITEM BOX",type:"1 BOX",mrp:2350,price:470},
    {category:"Item Box",name:"30 ITEM BOX",type:"1 BOX",mrp:3250,price:650},
    {category:"Item Box",name:"40 ITEM BOX",type:"1 BOX",mrp:3750,price:750},
    {category:"Item Box",name:"45 ITEMS BOX",type:"1 BOX",mrp:4500,price:900},
    {category:"Item Box",name:"50 ITEM BOX",type:"1 BOX",mrp:5500,price:1100}
];

const quantities = new Array(products.length).fill(0);

const tableBody = document.getElementById("productTableBody");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

const subtotalElement = document.getElementById("subtotal");
const discountElement = document.getElementById("discount");
const totalQuantityElement = document.getElementById("totalQuantity");
const grandTotalElement = document.getElementById("grandTotal");

function money(value) {
    return "₹" + Number(value).toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function loadCategories() {
    const categories = [...new Set(products.map(product => product.category))];

    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

function renderProducts() {
    const searchText = searchInput.value.trim().toLowerCase();
    const selectedCategory = categoryFilter.value;

    tableBody.innerHTML = "";

    let lastCategory = "";

    products.forEach((product, index) => {

        const searchMatch =
            product.name.toLowerCase().includes(searchText);

        const categoryMatch =
            selectedCategory === "all" ||
            product.category === selectedCategory;

        if (!searchMatch || !categoryMatch) return;

        if (product.category !== lastCategory) {

            const categoryRow = document.createElement("tr");

            categoryRow.className = "category-row";

            categoryRow.innerHTML =
                `<td colspan="7">${product.category}</td>`;

            tableBody.appendChild(categoryRow);

            lastCategory = product.category;
        }

        const row = document.createElement("tr");

        row.dataset.index = index;

        let quantityHTML;
        let amountHTML;

        if (product.price === null) {

            quantityHTML = `
                <div class="quantity-control">
                    <button type="button" disabled>−</button>
                    <input type="number" value="0" disabled>
                    <button type="button" disabled>+</button>
                </div>
            `;

            amountHTML = `<span class="amount-box">N/A</span>`;

        } else {

            quantityHTML = `
                <div class="quantity-control">

                    <button
                        type="button"
                        class="qty-btn minus-btn"
                        data-index="${index}">
                        −
                    </button>

                    <input
                        type="number"
                        min="0"
                        class="qty-input"
                        value="${quantities[index]}"
                        data-index="${index}">

                    <button
                        type="button"
                        class="qty-btn plus-btn"
                        data-index="${index}">
                        +
                    </button>

                </div>
            `;

            amountHTML = `
                <span
                    class="amount-box"
                    id="amount-${index}">
                    ${money(product.price * quantities[index])}
                </span>
            `;
        }

        row.innerHTML = `
            <td>${index + 1}</td>

            <td>
                <strong>${product.name}</strong>
            </td>

            <td>${product.type}</td>

            <td>${money(product.mrp)}</td>

            <td>
                ${
                    product.price === null
                    ? '<span class="not-available">N/A</span>'
                    : money(product.price)
                }
            </td>

            <td>
                ${quantityHTML}
            </td>

            <td>
                ${amountHTML}
            </td>
        `;

        tableBody.appendChild(row);
    });

    updateSummary();
}

function setQuantity(index, value) {

    let quantity = parseInt(value, 10);

    if (Number.isNaN(quantity) || quantity < 0) {
        quantity = 0;
    }

    quantities[index] = quantity;

    const amountElement =
        document.getElementById(`amount-${index}`);

    if (
        amountElement &&
        products[index].price !== null
    ) {
        amountElement.textContent =
            money(products[index].price * quantity);
    }

    const input =
        document.querySelector(
            `.qty-input[data-index="${index}"]`
        );

    if (input) {
        input.value = quantity;
    }

    updateSummary();
}

function updateSummary() {

    let subtotal = 0;
    let totalQuantity = 0;

    products.forEach((product, index) => {

        totalQuantity += quantities[index];

        if (product.price !== null) {
            subtotal +=
                product.price * quantities[index];
        }
    });

    const discount =
        subtotal * DISCOUNT_RATE;

    const total =
        subtotal - discount;

    subtotalElement.textContent =
        money(subtotal);

    discountElement.textContent =
        money(discount);

    totalQuantityElement.textContent =
        totalQuantity;

    grandTotalElement.textContent =
        money(total);
}

tableBody.addEventListener("click", function(event) {

    const button =
        event.target.closest(".qty-btn");

    if (!button || button.disabled) return;

    const index =
        Number(button.dataset.index);

    if (button.classList.contains("minus-btn")) {
        setQuantity(
            index,
            quantities[index] - 1
        );
    }

    if (button.classList.contains("plus-btn")) {
        setQuantity(
            index,
            quantities[index] + 1
        );
    }
});

tableBody.addEventListener("input", function(event) {

    if (
        !event.target.classList.contains("qty-input") ||
        event.target.disabled
    ) {
        return;
    }

    setQuantity(
        Number(event.target.dataset.index),
        event.target.value
    );
});

searchInput.addEventListener(
    "input",
    renderProducts
);

categoryFilter.addEventListener(
    "change",
    renderProducts
);

loadCategories();

renderProducts();

updateSummary();