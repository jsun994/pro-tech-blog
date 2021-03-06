async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const post_text = document.querySelector('textarea[name="post-text"]').value;
    
    if (title && post_text) {
        const response = await fetch(`/api/posts`, {
            method: 'post',
            body: JSON.stringify({
                title,
                post_text
            }),
            headers: {  'Content-Type': 'application/json' }
        });
  
        if (response.ok) {
            //console.log(response);
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}
  
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);  