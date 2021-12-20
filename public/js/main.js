//fetch route to update product information

async function getLoginPage() {
 await fetch('/login')
}

const loginText = document.getElementById('mustLogin')
loginText.addEventListener("click", getLoginPage)


