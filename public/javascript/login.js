const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");

async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
  
        if (response.ok) {
            //console.log(response);
            document.location.replace('/dashboard');
        } else {
            modal.classList.toggle("show-modal");
            //alert(response.statusText + ', invalid email or password');
        }
    }
}

function toggleModal() {
    modal.classList.toggle("show-modal");
}

closeButton.addEventListener("click", toggleModal);
	
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);