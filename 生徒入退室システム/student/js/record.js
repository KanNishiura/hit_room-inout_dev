document.addEventListener('DOMContentLoaded', () => {
    // カードがクリックされたときの処理
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', (event) => {
            // カードのデータIDを取得
            const recordId = event.currentTarget.dataset.id;
            
            // 修正画面にリダイレクト
            window.location.href = `edit-record.html?id=${recordId}`;
        });
    });
});

