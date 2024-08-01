// ハンバーガー
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');

    hamburger.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
});

// コンポーネント化
document.addEventListener('DOMContentLoaded', function() {
    function loadHTML(file, elementId) {
        fetch(file)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            })
            .catch(error => console.error('Error loading file:', error));
    }

    loadHTML('components/header.html', 'header');
    loadHTML('components/sidebar.html', 'sidebar');
    loadHTML('components/footer.html', 'footer');
});

// サイドバーの動き
// document.addEventListener('DOMContentLoaded', function() {
//     // サイドバーのユニットトグル要素をすべて取得
//     const unitToggles = document.querySelectorAll('.unit-toggle');

//     unitToggles.forEach(toggle => {
//         toggle.addEventListener('click', function(event) {
//             event.preventDefault(); // デフォルトのリンク動作を無効にする
//             const content = this.nextElementSibling;

//             if (content && content.classList.contains('unit-content')) {
//                 content.classList.toggle('show');
//             }
//         });
//     });
// });
