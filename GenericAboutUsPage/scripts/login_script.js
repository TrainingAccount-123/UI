document.addEventListener("DOMContentLoaded", function () {
    const unameEl = document.getElementById("usernameInput");
    const pwdEl = document.getElementById("passwordInput");
    const errorEl = document.getElementById("errorMsgContainer");
    const button = document.getElementById("submitBtn");
    const bodyEl = document.getElementById("container");
    const enterEl = document.getElementById("enterPrompt")

    function checkLoginDetails(username,password) {
        if (username === "Skanda" && password === "Password") {
            return true;
        } else {
            return false;
        }
    }

    button.addEventListener("click", function () {
        try{
            let username = unameEl.value.trim();
            let password = pwdEl.value.trim();
            let check;
            if (username === "" || password === ""){
                check = false;
            } else {
                check = checkLoginDetails(username,password);
            }
            if (check) {
                window.location.replace("about_us_page.html");
            } else {
                errorEl.style.display = "block";
                errorEl.style.marginBottom = "3.7425vh";
                bodyEl.style.height = "78.5928vh";
                enterEl.style.marginBottom = "3.74252vh";
            }
            enterEl.innerHTML = `${window.innerHeight}  -  ${window.innerWidth}`

        } catch (error) {
            errorEl.style.display = "block";
            errorEl.style.marginBottom = "3.7425vh";
            bodyEl.style.height = "78.5928vh";
            enterEl.style.marginBottom = "3.74252vh";
        }
    })
})