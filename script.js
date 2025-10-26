const form = document.querySelector(".emailAndSubmit");
const emailBox = document.getElementById("email");
const returnButton = document.querySelector(".returnButton");
const successContent = document.querySelector(".successContent");
const content = document.querySelector(".content");
const emailFiller = document.querySelector(".emailFiller");


function handleSubmit(e) {
    e.preventDefault();
    console.log(e);

    //Retrieve the data
    const data = Object.fromEntries(new FormData(e.target));
    
    //Loop over the data to determine whether it's acceptable
    for (const [input, value] of Object.entries(data)) {
        const emailError = document.getElementById("errorText");
        const emailRegex = /^[a-zA-Z0-9._%+-~!#$&'/=^{}|]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,}$/;
        if (!value.match(emailRegex)) {
            emailError.innerText = "Valid email required";
            emailBox.style.color = "var(--red)";
            emailBox.style.backgroundColor = "var(--red-opacity)";
            emailBox.style.borderColor = "1px solid var(--red)";
        }
        else {
            emailError.innerText = "";
            emailBox.style.color = "var(--grey)";
            emailBox.style.backgroundColor = "var(--white)";
            emailBox.style.borderColor = "1px solid var(--grey)";
            successContent.style.display = "flex";
            content.style.display = "none";
            emailFiller.innerText = value;
        }
        console.log(e);
    }
}

returnButton.onclick = function () {
        successContent.style.display = "none";
        content.style.display = "flex";
        emailBox.value = "";
    };

form.addEventListener("submit", handleSubmit);