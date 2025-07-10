document.getElementById('formeRegister').addEventListener('submit', function(e){
    e.preventDefault()

    // Réinitialiser tous les messages d'erreur
    document.querySelectorAll('.error-message').forEach(span => span.textContent = '');
    // On n'efface pas le message de succès ici

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirm').value;
    const send = document.getElementById('send').checked;

    let hasError = false;

    if (!username) {
        document.getElementById('error-username').textContent = 'Le nom d\'utilisateur est obligatoire';
        hasError = true;
    }
    if (!email) {
        document.getElementById('error-email').textContent = 'L\'email est obligatoire';
        hasError = true;
    }
    if (!password) {
        document.getElementById('error-password').textContent = 'Le mot de passe est obligatoire';
        hasError = true;
    }
    if (!confirm) {
        document.getElementById('error-confirm').textContent = 'La confirmation est obligatoire';
        hasError = true;
    }
    if (!send) {
        document.getElementById('error-send').textContent = 'Vous devez accepter les conditions';
        hasError = true;
    }
    if (password && confirm && password !== confirm) {
        document.getElementById('error-confirm').textContent = 'Les mots de passe sont différents';
        hasError = true;
    }
    if (password && password.length < 5) {
        document.getElementById('error-password').textContent = 'Le mot de passe doit contenir au moins cinq caractères';
        hasError = true;
    }

    if (hasError) {
        document.getElementById('userDisplay').textContent = '';
        return;
    }

    const user ={
        username,
        email,
        password,
    }
    localStorage.setItem('user', JSON.stringify(user))
    document.getElementById('formeRegister').reset()
    document.getElementById('userDisplay').textContent = 'Compte créé avec succès !';
    document.getElementById('userDisplay').style.color = 'green';
})