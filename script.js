let attempts = 3;

function login() {
  let user = document.getElementById("name").value;
  let pass = document.getElementById("passW").value;

  let account = {
    logUser: "Carl",
    logPass: "12345",
  };

  if (attempts > 0) {
    if (user === account.logUser && pass === account.logPass) {
      alert("Welcome, " + user + "!");
      window.location.assign("home.html");
    } else {
      attempts--;
      alert(
        "Incorrect username or password. Try again! Attempts left: " + attempts
      );
      if (attempts === 0) {
        alert("No attempts left. Please contact support.");
      }
    }
  }
}
