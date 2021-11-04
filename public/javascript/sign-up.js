const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");

async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
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
            //alert(response.statusText + ', invalid infos');
        }
    }
}

function toggleModal() {
    modal.classList.toggle("show-modal");
}

closeButton.addEventListener("click", toggleModal);

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);