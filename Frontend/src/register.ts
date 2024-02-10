let haveAccountRef = document.querySelector(".have-account-href") as HTMLAnchorElement;
let registerBtn = document.querySelector(".register-btn") as HTMLButtonElement;
let user_register_form = document.querySelector('#user-register-form') as HTMLFormElement
let first_name = document.querySelector("#first-name-id") as HTMLInputElement
let last_name = document.querySelector("#last-name-id") as HTMLInputElement
let reg_email = document.querySelector("#email") as HTMLInputElement
let reg_pwd = document.querySelector('#password') as HTMLInputElement

// Interface for a new user
interface newUser {
    full_name: string;
    user_email: string;
    user_password: string;
}
let users: newUser[] = []



function showPopUp() {
    popupDivReg.style.display = "block";

    setTimeout(() => {
        popupDivReg.style.display = "none";
    }, 3000);
}

haveAccountRef.addEventListener("click", (e) => {
    e.preventDefault();

    window.location.href = "login.html"
})

user_register_form.addEventListener('submit', async (e) => {
    e.preventDefault()

    let isvalid = first_name.value.trim() != "" &&
        last_name.value.trim() != "" &&
        email.value.trim() != "" &&
        password.value.trim() != ""

    if (!isvalid) {
        return alert("Please fill in all the fields");
    } else {
        let full_name = first_name.value.trim() + last_name.value.trim()
        let user_email = email.value.trim()
        let user_password = password.value.trim()

        try {
            const res = await fetch('http://localhost:5000/auth/signup', {
                headers: { 
                    accept: 'application/json',
                    'Content-Type': 'application/json' 
                },
                method: "POST",
                body: JSON.stringify({ 
                    full_name: full_name,
                    email: user_email,
                    password: user_password
                }),
            })
            const data = await res.json()
            if(data.code === "EREQUEST") {
                console.log("Email exists");
            } else {
                window.location.href = "login.html"
            }
            

        } catch (error) {
            console.log(error);
        }
    }
})
