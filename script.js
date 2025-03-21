// Beispielprodukte (Können durch echte Daten ersetzt werden)
const products = [
    { id: 1, title: "Produkt 1", price: 29.99, image: "https://via.placeholder.com/150" },
    { id: 2, title: "Produkt 2", price: 49.99, image: "https://via.placeholder.com/150" },
    { id: 3, title: "Produkt 3", price: 19.99, image: "https://via.placeholder.com/150" },
    { id: 4, title: "Produkt 4", price: 99.99, image: "https://via.placeholder.com/150" },
];

const productContainer = document.getElementById("products");
const orderDetails = document.getElementById("order-details");

// Produkte im Shop anzeigen
products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <div class="product-title">${product.title}</div>
        <div class="product-price">${(product.price * 1.1).toFixed(2)} €</div>
        <button class="order-btn" onclick="addToOrder('${product.title}', ${(product.price * 1.1).toFixed(2)})">Zum Warenkorb hinzufügen</button>
    `;
    productContainer.appendChild(productElement);
});

// Produkte zur Bestellung hinzufügen
function addToOrder(title, price) {
    orderDetails.value += `${title} - ${price} €\n`;
}

// Bestellung abschicken (z.B. als lokale Speicherung oder später für API-Anbindung)
function submitOrder() {
    const name = document.getElementById("username").value;
    const phone = document.getElementById("userphone").value;

    if (!name || !phone) {
        alert("Bitte fülle alle Felder aus!");
        return;
    }

    const order = {
        name,
        phone,
        details: orderDetails.value,
    };

    // Hier könnte die Bestellung weiterverarbeitet werden (z.B. an einen Server senden)
    console.log("Bestellung abgeschickt:", order);
    alert("Vielen Dank für deine Bestellung! Wir melden uns bald.");
    orderDetails.value = "";
    document.getElementById("username").value = "";
    document.getElementById("userphone").value = "";
}
