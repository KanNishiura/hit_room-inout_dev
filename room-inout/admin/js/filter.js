document.addEventListener('DOMContentLoaded', () => {
    const classFilter = document.getElementById('classFilter');
    const rows = document.querySelectorAll('#studentTable tbody tr');

    classFilter.addEventListener('change', (event) => {
        const selectedClass = event.target.value;

        rows.forEach(row => {
            if (selectedClass === 'all' || row.getAttribute('data-class') === selectedClass) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
});
