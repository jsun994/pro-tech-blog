async function logout() {
    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
        //console.log(response);
        document.location.replace('/');
    } else {
        alert(response.statusText + ', invalid');
    }
}

document.querySelector('#logout').addEventListener('click', logout);