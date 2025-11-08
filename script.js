function passwordToggle() {
    const pwField = document.getElementById('pw');
    const toggleButton = document.getElementById('showPassword');
    if (pwField.type === "password") {
        pwField.type = "text";
        toggleButton.innerHTML = "<img class='eye' width='16px' src='https://img.icons8.com/?size=100&id=85329&format=png&color=000000'>";
    } else {
        pwField.type = "password";
        toggleButton.innerHTML = "<img class='eye' width='16px' src='https://img.icons8.com/?size=100&id=85329&format=png&color=000000'>";
    }
}
document.getElementById('showPassword').addEventListener('click', passwordToggle);
document.getElementById('showPassword').addEventListener('click', () => {
    document.getElementById('showPassword').classList.toggle('active');
});