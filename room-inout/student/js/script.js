document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event fired');

    // 現在の日時を取得
    const now = new Date();

    // 日付をフォーマットする関数
    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // 月は0から始まるため、+1
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    // 時刻をフォーマットする関数
    function formatTime(date) {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    // 現在の日時をフォーマットして取得
    const currentDate = formatDate(now);
    const currentTime = formatTime(now);

    // 要素に日付と時刻を設定
    const dateElement = document.getElementById('current-date');
    const timeInput = document.getElementById('current-time');
    
    if (dateElement) {
        dateElement.textContent = `現在日付: ${currentDate}`;
        console.log('現在の日付が表示されました');
    } else {
        console.error('Element with ID "current-date" not found');
    }
    
    if (timeInput) {
        timeInput.value = currentTime;
        console.log('現在の時刻が入力フィールドに設定されました');
    } else {
        console.error('Input element with ID "current-time" not found');
    }
});
