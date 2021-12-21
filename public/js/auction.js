const sumBtn = document.getElementById('submit');
const productId = parseInt(document.querySelector(".product-id").getAttribute("id"));
const bidCount = parseInt(document.querySelector(".bid-count").getAttribute("data-bid-count"));
const currentBid = parseInt(document.querySelector(".current-bid").getAttribute("data-current-bid"));
console.log(typeof productId);
console.log(typeof currentBid);
console.log(typeof bidCount);

sumBtn.addEventListener("click", bidAmount);

async function bidAmount (event) {
    event.preventDefault();
    const response = await fetch(`/auction/${productId}`, {
        method: "PUT", 
        body: JSON.stringify({
            bid_count: bidCount + 1,
            current_bid: currentBid + 1,
        }),
        headers: {
            "Content-type": "application/json"
        }
    });
    const updatedBid = response.json()
    console.log(updatedBid);
};