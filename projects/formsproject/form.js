document.getElementById('myForm').addEventListener('submit',function(event){
    event.preventDefault();
    const first = document.getElementById('first').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    if (!first || !email){
        alert("You need a first name and an email!!!");
        return
    }
    
    const formData = {
        first: first,
        email: email,
        password: document.getElementById('password').value,
    };

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.response);
            document.getElementById('message').innerHTML = response.message;
            document.getElementById('myForm').innerHTML = "";
        } else if (xhr.readdyState === 4) {
            alert ('Error submitting form.');
        }
    };

    xhr.send(JSON.stringify(formData));
    console.log(formData);
});
