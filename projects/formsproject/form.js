document.getElementById('myForm').addEventListener('submit',function(event){
    event.preventDefault();
    const first = document.getElementById('first').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const age = parseInt(document.getElementById('age').value.trim(), 10);

    if (!first || !email || !password) {
        alert("You need a first name, an email and a password!!! Fix this error.");
        return
    }

    if (isNaN(age) || age < 18 || age > 100) {
        alert("Age must be a number between 18 and 100.");
        return;
    }
    
    
    const formData = {
        first: first,
        email: email,
        password: password,
        age: age,
    };

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.response);
            document.getElementById('message').innerHTML = response.message;
            document.getElementById('myForm').innerHTML = "";
        } else if (xhr.readyState === 4) {
            alert ('Error submitting form.');
        }
    };

    xhr.send(JSON.stringify(formData));
    console.log(formData);
});
