document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok && !data.error) {
            localStorage.setItem('token', data.loginResult.token);
            window.location.href = data.loginResult.redirecUrl + ".html";
        } else {
            alert(data.message || 'Login failed');
        }
    } catch (error) {
        console.error('Error during login:', error);
        alert('An error occurred during login');
    }
});

document.getElementById('registerForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const email = document.getElementById('registerEmail').value;
    const nama = document.getElementById('registerName').value;
    const password = document.getElementById('registerPassword').value;

    try {
        const response = await fetch('http://localhost:8080/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, nama, password }),
        });

        const data = await response.json();

        if (response.ok && !data.error) {
            alert('Registration successful! Please contact admin to enroll your position.');
        } else {
            alert(data.message || 'Registration failed');
        }
        location.reload();
    } catch (error) {
        console.error('Error during registration:', error);
        alert('An error occurred during registration');
    }
});