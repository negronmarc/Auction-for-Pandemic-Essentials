const sumBtn = document.getElementById('submit');
const productId = parseInt(document.querySelector(".product-id").getAttribute("id"));
const bidCount = parseInt(document.querySelector(".bid-count").getAttribute("data-bid-count"));
const currentBid = parseInt(document.querySelector(".current-bid").getAttribute("data-current-bid"));
console.log(typeof productId);
console.log(typeof currentBid);
console.log(typeof bidCount);

sumBtn.addEventListener("click", bidAmount);

const auctionDate = document.querySelector('.auction-date').getAttribute("data-auction-date")

function msToTime(milliseconds) {
    var day, hour, minute, seconds;
    seconds = Math.floor(milliseconds / 1000);
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;
    return {
        day: day,
        hour: hour,
        minute: minute,
        seconds: seconds
    };
}
setInterval(function(){
    const timeLeft= Math.abs(new Date(auctionDate)-Date.now())
    const duration=msToTime(timeLeft)
    document.querySelector('.auction-date').innerText=`${duration.day}:${duration.hour}:${duration.minute}:${duration.seconds}`
})

async function bidAmount (event) {
    event.preventDefault();
    const response = await fetch(`/auction/${productId}`, {
        method: "PUT", 
        body: JSON.stringify({
            bid_count: bidCount + 1,
            current_bid: currentBid + 4,
        }),
        headers: {
            "Content-type": "application/json"
        }
    });
    const updatedBid = response.json()
    console.log(updatedBid);
    window.location.reload();
};