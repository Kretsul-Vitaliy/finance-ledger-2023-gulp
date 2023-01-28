export function regexForm() {
    const user = document.getElementById("user");
    // const form = document.getElementById("form");
    const boxName = document.querySelector(".input__box-name");
    const userEmail = document.getElementById("user-email");
    // let regUser = /^[a-zA-Zа-яА-Яє-їЄ-Ї0-9_\.]+$/g;
    // let regUserEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let regUser = /[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g;
    let regUserEmail = /[-!#$%^&*()_+|~=`{}\[\]:";'<>?,\/]/g;
    // let uPattern = /^[a-zA-Z0-9_-]{4,16}$/;

    const elem = document.createElement("small");
    elem.id = "notify";
    elem.style.display = "none";
    boxName.appendChild(elem);

    user.addEventListener("invalid", function (event) {
        event.preventDefault();

        if (!event.target.validity.valid) {
            elem.textContent = "This is a required field";

            elem.className = "icon-worning error";

            elem.style.display = "flex";

            user.className = "invalid";
        }
    });

    user.addEventListener("input", function (event) {
        if ("flex" === elem.style.display) {
            user.className = "";

            elem.style.display = "none";
        }
    });

    user.oninput = function () {
        if (this.value.match(regUser)) {
            this.value = this.value.replace(regUser, "");
            this.classList.add("is-invalid");
        } else {
            this.classList.remove("is-invalid");
            this.classList.add("is-valid");
        }
    };

    userEmail.addEventListener("invalid", function (event) {
        event.preventDefault();

        if (!event.target.validity.valid) {
            elem.textContent = "This is a required field";

            elem.className = "icon-worning error";

            elem.style.display = "flex";

            userEmail.className = "invalid";
        }
    });

    userEmail.addEventListener("input", function (event) {
        if ("flex" === elem.style.display) {
            userEmail.className = "";

            elem.style.display = "none";
        }
    });

    userEmail.oninput = function () {
        if (this.value.match(regUserEmail)) {
            this.value = this.value.replace(regUserEmail, "");
            this.classList.add("is-invalid");
        } else {
            this.classList.remove("is-invalid");
            this.classList.add("is-valid");
        }
    };

    // userEmail.addEventListener("input", function (event) {
    //     if (userEmail.validity.valid) {
    //         console.log("valid");
    //     } else {
    //         console.log("novalid");
    //     }
    // });

    // user.oninvalid = function (event) {
    //     event.target.setCustomValidity("Username should only contain lowercase letters. e.g. john");
    // };
}
