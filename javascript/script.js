const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('dblclick', function() {
    document.body.classList.toggle('dark-mode');
});