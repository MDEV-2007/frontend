function openModal() {
    document.getElementById('videoModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('videoModal').style.display = 'none';
    const video = document.querySelector('.modal-content video');
    video.pause();
    video.currentTime = 0;
}

window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target === modal) {
        closeModal();
    }
}