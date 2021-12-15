const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log out.');
  }
};

document.querySelector('#logout').addEventListener('click', logout);

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
