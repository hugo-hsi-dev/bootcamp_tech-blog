async function signupFormHandler(event) {
  event.preventDefault();
  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && password) {
    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log("signup response: ", response);
    // if (response.ok) {
    //   document.location.replace("/");
    // } else {
    //   alert("Failed to sign up.");
    // }
  }
}

document.querySelector("#signup-form").addEventListener("submit", signupFormHandler);
