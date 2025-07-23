// button
const buttonEl = document.getElementById("claim-button");
const inputEls = document.querySelectorAll("input");

// add event listener "keydown" to each input
// I want the error message to disappear when user type
inputEls.forEach((input) => {
    input.addEventListener("keydown", (eventObj) => {
        const inputBox = eventObj.target.parentElement;
        const inputContainer = inputBox.parentElement;

        if (inputContainer.querySelector(".error-message")) {
            inputBox.querySelector("img").remove();
            inputContainer.querySelector(".error-message").remove();
            eventObj.target.classList.remove("red-border");
        }
    })
})

//-------start--------//
buttonEl.addEventListener("click", () => {
    // check if empty or email is not formatted correctly -> create error message
    checkInput();
})

//check input
function checkInput() {
    // loop to each input
    inputEls.forEach((input)=> {
        //check it if it already contained error message.
        const inputBox = input.parentElement;
        if (inputBox.querySelector("img") === null) { // if doesn't has error, check it
            //if empty
            if (input.value === "") {
                createError(input);
            } else if (input.placeholder === "Email Address") {
                const email = checkEmail(input);
                // if it doesn't match regExp display error message
                if (email === false) {
                    createError(input);
                }
            }
        }
    })
}

// check whether it matches the regExp
function checkEmail(input) {
    const emailExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailExp.test(input.value);
}

//craete error message and add it in html
function createError(input) {
    const inputBox = input.parentElement;
    const inputContainer = inputBox.parentElement;

    // create error message
    // <p class="error-message">[Field Name] cannot be empty</p>
    const errorMsg = createErrorMsg();
    if (input.placeholder === "Email Address" && input.value !== "") {
        errorMsg.textContent = "Looks like this is not an email";
    } else {
        errorMsg.textContent = `${input.placeholder} cannot be empty`;
    }
    // append as last child of input-container
    inputContainer.appendChild(errorMsg);

    // create error image
    // <img class="error-img" src="./images/icon-error.svg" alt="icon-error">
    const errorImg = createErrorImg();
    //append to inputBox
    inputBox.appendChild(errorImg);

    // input border to red
    input.classList.add("red-border");
}

function createErrorMsg() {
    const errorMsg = document.createElement("p");
    errorMsg.classList.add("error-message");
    return errorMsg;
}

function createErrorImg() {
    const errorImg = document.createElement("img");
    errorImg.classList.add("error-img");
    errorImg.src = "./images/icon-error.svg";
    errorImg.alt = "icon-error";
    return errorImg;
}