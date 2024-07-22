// document.getElementById('login-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;

//     if (username === 'admin' && password === 'password') {
//         alert('ログイン成功');
//     } else {
//         var errorMessage = document.getElementById('error-message');
//         errorMessage.style.display = 'block';
//     }
// });


document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // フォームのデフォルトの送信を防止
        window.location.href = 'index.html'; // index.htmlにリダイレクト
    });
});
