let userBtn = document.querySelector(".user-btn") as HTMLButtonElement;
let loginAdminButton = document.querySelector(".login-btn") as HTMLButtonElement;
let forgotPwdRefAdmin = document.querySelector(".forgot-pwd-href") as HTMLAnchorElement;

let adminForm = document.querySelector("#admin-login-form") as HTMLFormElement
let admin_email = document.querySelector('#email') as HTMLInputElement;
let admin_password = document.querySelector('#password') as HTMLInputElement;

let storedUsers: newUser[] = []

window.onload = () => {
    let data: any = localStorage.getItem("pimsUser")
    data = JSON.parse(data);


    if (!data) {
        createAdmin();
        return false
    } else {
        data.forEach((user: any) => {
            storedUsers.push(user)
        });
        createAdmin();
    }
    localStorage.setItem("pimsUser", JSON.stringify(storedUsers))
}

userBtn.addEventListener("click", (e) => {
    e.preventDefault();

    window.location.href = "login.html"
});

// loginAdminButton.addEventListener("click",(e)=>{
//     e.preventDefault();

//     window.location.href="admin-dashboard.html"
// });

forgotPwdRefAdmin.addEventListener("click", (e) => {
    e.preventDefault();

    window.location.href = "forgot-password-admin.html";
});

adminForm.addEventListener('submit', (e) => {
    e.preventDefault();


    let isValid = admin_email.value.trim() != "" &&
        admin_password.value.trim() != ""

    if (!isValid) {
        return alert("Please fill in all the fields");
    } else {
        let isEmailValid = false;
        let isPasswordValid = false;
        let isAdmin = false;

        console.log("user", storedUsers);
        storedUsers.forEach((user) => {

            if (user.status === "admin") {
                isAdmin = true;
                if (email.value.trim() === user.email) {
                    isEmailValid = true;

                    if (password.value.trim() === user.password) {
                        isPasswordValid = true;
                    }
                }
            }
        });
        if (isAdmin) {
            if (isEmailValid) {
                if (isPasswordValid) {
                    window.location.href = "admin-dashboard.html";
                    alert("Login success");
                } else {
                    alert("Invalid password");
                }
            } else {
                alert("Invalid email");
            }

        } else {
            return alert("not admin email")
        }
    }
});

function createAdmin() {
    let newAdmin: newUser = {
        id: 12,
        fullName: "KenedyMaina",
        email:"kennynet66@gmail.com",
        password: "Boomplay@1",
        status: "admin"
    }

    storedUsers.push(newAdmin);
    localStorage.setItem("pimsUser", JSON.stringify(storedUsers))
}