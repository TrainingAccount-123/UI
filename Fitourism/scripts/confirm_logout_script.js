document.addEventListener("DOMContentLoaded",function () {

    const buttonYes = document.getElementById("confirmationButtonYes")
    const buttonNo = document.getElementById("confirmationButtonNo")

    buttonYes.addEventListener("click", function () {
        window.location.replace("login.html")
    })

    buttonNo.addEventListener("click", function () {
        window.location.replace("about_us_page.html")
    })

})