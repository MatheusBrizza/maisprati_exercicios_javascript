document.getElementById('accept-terms-checkbox').addEventListener('change', function() {
    const acceptButton = document.getElementById('accept-button');
    if (this.checked) {
        acceptButton.disabled = false;
        acceptButton.classList.add('enabled');
    } else {
        acceptButton.disabled = true;
        acceptButton.classList.remove('enabled');
    }
});

document.getElementById('accept-button').addEventListener('click', function() {
    if (!this.disabled) {
        window.location.href = 'index.html';
    }
});