

// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('form');
//     form.addEventListener('submit', formSend);

//     async function formSend(e) {
//         e.preventDefault();

//         let error = formValidate(form)
//     }

//     function formValidate(form) {
//         let error = 0
//         let formReq = document.querySelectorAll('._req')

//         for (let index = 0; index < array.length; index++) {
//             const element = array[index];

//         }
//     }
// });


// console.log('Hello world');
$('#send').on('click', function (e) {
    e.preventDefault();
    nameForm = $('#nameForm').val();
    message = $('#message').val();
    window.location = "mailto:deadpool321214@gmail.com?nameForm=" + nameForm + "&message=" + message;
});

console.log(window.location);