document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const signupBtn = document.getElementById("signupBtn");
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const msgs = document.querySelectorAll(".msg");

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Toggle Forms
  loginBtn.addEventListener("click", () => {
    loginBtn.classList.add("active");
    signupBtn.classList.remove("active");
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
    msgs.forEach((msg) => (msg.innerHTML = ""));
  });

  signupBtn.addEventListener("click", () => {
    signupBtn.classList.add("active");
    loginBtn.classList.remove("active");
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
    msgs.forEach((msg) => (msg.innerHTML = ""));
  });

// 📝 Signup Logic
   signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = signupForm.querySelector(".username").value.trim();
    const email = signupForm.querySelector(".email").value.trim();
    const password = signupForm.querySelector(".password").value.trim();

    msgs[2].innerHTML = "";
    msgs[3].innerHTML = "";
    msgs[4].innerHTML = "";

    let valid = true;

    if (username.length < 3) {
      msgs[2].innerHTML = "Full name must be at least 3 characters.";
      valid = false;
    }

    if (!isValidEmail(email)) {
      msgs[3].innerHTML = "Please enter a valid email.";
      valid = false;
    }

    if (password.length < 6) {
      msgs[4].innerHTML = "Password must be at least 6 characters.";
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

          // ✅ Switch to Login form after signup
          signupForm.reset();
          loginBtn.click();
        } else {
          alert(data.message || "Signup failed");
        }
      } catch (err) {
        alert("Something went wrong. Please try again.");
      }
    }
  });
});

  // 🔐 Login Logic
  // 🔐 Login Logic
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = loginForm.querySelector('input[name="email"]').value.trim();
  const password = loginForm.querySelector('input[name="password"]').value.trim();

  msgs[0].innerHTML = "";
  msgs[1].innerHTML = "";

  let valid = true;

  if (!isValidEmail(email)) {
    msgs[0].innerHTML = "Please enter a valid email.";
    valid = false;
  }

  if (password.length < 6) {
    msgs[1].innerHTML = "Password must be at least 6 characters.";
    valid = false;
  }

  if (valid) {
    try {
      const res = await fetch("http://localhost:5000/api/routes/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        alert("Login Successful!");
        loginForm.reset();

        // ✅ Redirect after successful login
        window.location.href = "index.html";
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
  }
});
