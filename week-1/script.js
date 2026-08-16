/* =========================
   SHOW / HIDE PASSWORD
========================= */

function togglePassword(inputId, button) {

    const input = document.getElementById(inputId);

    if (input.type === "password") {

        input.type = "text";

        button.textContent = "Hide";

    } else {

        input.type = "password";

        button.textContent = "Show";
    }
}


/* =========================
   EMAIL VALIDATION
========================= */

function isValidEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
}


/* =========================
   SIGN UP VALIDATION
========================= */

const signupForm =
    document.getElementById("signupForm");


if (signupForm) {

    signupForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            let valid = true;

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("signupEmail").value.trim();

            const password =
                document.getElementById("signupPassword").value;

            const confirmPassword =
                document.getElementById("confirmPassword").value;


            /* Clear Errors */

            document.getElementById(
                "nameError"
            ).textContent = "";

            document.getElementById(
                "signupEmailError"
            ).textContent = "";

            document.getElementById(
                "signupPasswordError"
            ).textContent = "";

            document.getElementById(
                "confirmPasswordError"
            ).textContent = "";


            /* Name */

            if (name === "") {

                document.getElementById(
                    "nameError"
                ).textContent =
                    "Please enter your name.";

                valid = false;
            }


            /* Email */

            if (email === "") {

                document.getElementById(
                    "signupEmailError"
                ).textContent =
                    "Please enter your email.";

                valid = false;

            } else if (!isValidEmail(email)) {

                document.getElementById(
                    "signupEmailError"
                ).textContent =
                    "Please enter a valid email.";

                valid = false;
            }


            /* Password */

            if (password.length < 6) {

                document.getElementById(
                    "signupPasswordError"
                ).textContent =
                    "Password must be at least 6 characters.";

                valid = false;
            }


            /* Confirm Password */

            if (confirmPassword === "") {

                document.getElementById(
                    "confirmPasswordError"
                ).textContent =
                    "Please confirm your password.";

                valid = false;

            } else if (password !== confirmPassword) {

                document.getElementById(
                    "confirmPasswordError"
                ).textContent =
                    "Passwords do not match.";

                valid = false;
            }


            /* Successful Signup */

            if (valid) {

                alert("Account created successfully!");

                window.location.href = "index.html";
            }

        }
    );
}


/* =========================
   LOGIN VALIDATION
========================= */

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            let valid = true;

            const email =
                document.getElementById("loginEmail").value.trim();

            const password =
                document.getElementById("loginPassword").value;


            /* Clear Errors */

            document.getElementById(
                "loginEmailError"
            ).textContent = "";

            document.getElementById(
                "loginPasswordError"
            ).textContent = "";


            /* Email */

            if (email === "") {

                document.getElementById(
                    "loginEmailError"
                ).textContent =
                    "Please enter your email.";

                valid = false;

            } else if (!isValidEmail(email)) {

                document.getElementById(
                    "loginEmailError"
                ).textContent =
                    "Please enter a valid email.";

                valid = false;
            }


            /* Password */

            if (password === "") {

                document.getElementById(
                    "loginPasswordError"
                ).textContent =
                    "Please enter your password.";

                valid = false;
            }


            /* Successful Login */

            if (valid) {

                alert("Login successful!");

                // Example routing
                window.location.href = "index.html";
            }

        }
    );
}