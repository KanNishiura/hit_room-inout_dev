document.addEventListener('DOMContentLoaded', () => {
    // クエリパラメータからIDを取得
    const urlParams = new URLSearchParams(window.location.search);
    const recordId = urlParams.get('id');

    // 仮のデータ: 実際のデータに合わせて修正する必要があります
    const recordData = {
        1: { date: '2024-08-03', checkIn: '08:30', checkOut: '15:45' },
        2: { date: '2024-07-27', checkIn: '09:13', checkOut: '16:40' },
        3: { date: '2024-07-20', checkIn: '09:22', checkOut: '16:35' },
        4: { date: '2024-07-13', checkIn: '09:15', checkOut: '16:40' },
        5: { date: '2024-07-06', checkIn: '09:20', checkOut: '16:40' }
    };

    // フォームの入力フィールドにデータを設定
    if (recordId && recordData[recordId]) {
        const data = recordData[recordId];
        document.getElementById('date').value = data.date;
        document.getElementById('check-in').value = data.checkIn;
        document.getElementById('check-out').value = data.checkOut;
    }

    // フォームの送信イベントを処理
    document.getElementById('edit-record-form').addEventListener('submit', (event) => {
        event.preventDefault();

        // フォームデータを取得
        const updatedRecord = {
            date: document.getElementById('date').value,
            checkIn: document.getElementById('check-in').value,
            checkOut: document.getElementById('check-out').value
        };

        // ここで、バックエンドにデータを送信する処理を実装することができます
        console.log('保存されました:', updatedRecord);
        
        // 入退室記録ページにリダイレクト
        window.location.href = 'record.html';
    });
});
