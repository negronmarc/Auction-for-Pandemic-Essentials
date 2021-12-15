async function logoutButtonHandler() {
    const response = await fetch("", {
      method: "POST",
      headers: { "Content-Type": "" },
    });
  
    if (response.ok) {
      document.location.replace("/login");
    } else {
      alert(response.statusText);
    }
  }
  
  document
    .querySelector("#logout")
    .addEventListener("click", logoutButtonHandler);