const userNameField = document.querySelector('#user-name');
const userEamilField = document.querySelector('#user-email');
const formSubmitButton = document.querySelector('#form-submit-btn');
const formContainer = document.querySelector('#form');

formContainer.addEventListener('submit', function (event) {
    event.preventDefault();
})


formSubmitButton.addEventListener('click', function () {
    const formData = new FormData(formContainer);
    fetch('/',{
        method: "POST",
        headers:{"Content-Type": "application/x-www-form-urlencoded"},
        body: new URLSearchParams(formData).toString()
    }).then(function () {
        alert('Дякую що відпрвили форму!');
    }).catch(function () {
        alert('Помилка при відправленні форми!')
    })



})



