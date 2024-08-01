document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');

    hamburger.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
});


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
