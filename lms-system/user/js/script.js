document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    // ヘッダーとフッターのロード
    function loadHTML(file, elementId, callback) {
        fetch(file)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
                if (callback) callback();
            })
            .catch(error => console.error('Error loading file:', error));
    }

    // ヘッダーとフッターを読み込み
    loadHTML('components/header.html', 'header', function() {
        console.log('Header loaded');
    });

    loadHTML('components/footer.html', 'footer', function() {
        console.log('Footer loaded');
    });

    // ハンバーガーメニューのイベントリスナー
    function addHamburgerListener() {
        const hamburger = document.getElementById('hamburger');
        const sidebar = document.getElementById('sidebar');

        if (hamburger && sidebar) {
            hamburger.addEventListener('click', function() {
                sidebar.classList.toggle('open');
            });
        }
    }

    // サイドバーのユニットトグルのイベントリスナーを追加
    function addSidebarToggleListeners() {
        const unitToggles = document.querySelectorAll('.unit-toggle');

        unitToggles.forEach(toggle => {
            toggle.addEventListener('click', function(event) {
                event.preventDefault();
                const content = this.nextElementSibling;
                const icon = this.querySelector('.toggle-icon');

                if (content && content.classList.contains('unit-content')) {
                    content.classList.toggle('show');
                    if (content.classList.contains('show')) {
                        icon.classList.add('open');
                    } else {
                        icon.classList.remove('open');
                    }
                }
            });
        });
    }

    // サイドバーのロードとハンバーガーメニューのリスナー追加
    loadHTML('components/sidebar.html', 'sidebar', function() {
        console.log('Sidebar loaded');
        addHamburgerListener();
        addSidebarToggleListeners();
    });

    // 動画再生の制御
    let playingTime = 0;    // 動画の時間
    let isPlaying = false;  // 再生中フラグ
    let video = videojs('video', {
      language: 'ja',
      autoplay: false,
      controls: true,
      controlBar: {
        fullscreenToggle: false,
        pictureInPictureToggle: false,
      },
    });
    video.controlBar.progressControl.disable();
    video.on('playing', function (e) {
      playingTime = video.duration();
      if (!isPlaying) {
        // 一時停止→再開時にも表示され困る。開始時のみ表示する。
        alert('start : ' + playingTime);
        isPlaying = true;
      }
    });
    video.on('ended', function (e) {
      alert('end');
      video.controlBar.progressControl.enable();
      nextButton.disabled = false;
      isPlaying = false;
    });

    // [次の動画]ボタンの制御
    let nextButton = document.getElementById('next');
    nextButton.onclick = function(e) {
      video.src({src: 'sample02.mp4', type: 'video/mp4'});
      video.controlBar.progressControl.disable();
      nextButton.disabled = true;
    };
});
