// script.js
function openTab(evt, tabName) {
    const tabPanes = document.querySelectorAll('.tab-pane');
    tabPanes.forEach(pane => {
        pane.classList.remove('active');
    });

    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => {
        link.classList.remove('active');
    });

    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}

function openImageModal(imgElement) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const downloadBtn = document.getElementById('downloadBtn');

    modal.style.display = 'flex';
    modalImg.src = imgElement.src;

    // Установить href для кнопки "Скачать"
    downloadBtn.href = imgElement.src;
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

window.onclick = function (event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
