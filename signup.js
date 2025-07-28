document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  const msgs = signupForm.querySelectorAll(".msg");

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = signupForm.querySelector('input[name="signupUsername"]').value.trim();
    const email = signupForm.querySelector('input[name="signupEmail"]').value.trim();
    const password = signupForm.querySelector('input[name="signupPassword"]').value.trim();

    msgs[0].innerHTML = "";
    msgs[1].innerHTML = "";
    msgs[2].innerHTML = "";

    let valid = true;

    if (username.length < 3) {
      msgs[0].innerHTML = "Full name must be at least 3 characters.";
      valid = false;
    }

    if (!isValidEmail(email)) {
      msgs[1].innerHTML = "Please enter a valid email.";
      valid = false;
    }

    if (password.length < 6) {
      msgs[2].innerHTML = "Password must be at least 6 characters.";
      valid = false;
    }

    if (valid) {
      try {
        const res = await fetch("http://localhost:5000/api/routes/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: username, email, password }),
        });

        const data = await res.json();

        if (res.ok) {
          alert("Signup successful! Please log in.");
          signupForm.reset();
          document.getElementById("loginBtn").click();
        } else {
          alert(data.message || "Signup failed");
        }
      } catch (err) {
        alert("Something went wrong. Please try again.");
      }
    }
  });
});
