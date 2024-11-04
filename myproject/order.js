const urlParams = new URLSearchParams(window.location.search);
const item = urlParams.get('item');
const price = parseFloat(urlParams.get('price'));

document.getElementById('productTitle').innerText = item;
updateTotal();

function updateTotal() {
    const quantity = document.getElementById('quantity').value;
    document.getElementById('totalPrice').innerText = "Total Price: " + (price * quantity).toFixed(2);
}

function placeOrder() {
    alert("Order placed successfully!");
    window.history.back();
}
