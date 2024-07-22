document.addEventListener('DOMContentLoaded', () => {
    // 現在のポイントは仮の値です。実際にはAPIやバックエンドから取得するべきです。
    const currentPoints = 700;

    // 現在のポイントを表示
    document.getElementById('current-points').textContent = currentPoints;

    console.log('ポイント履歴ページがロードされました');
});
