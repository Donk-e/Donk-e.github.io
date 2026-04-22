// Image change listener
document.querySelectorAll('[data-image]').forEach(element => {
    element.addEventListener('click', function() {
        const image = this.dataset.image;
        document.body.style.backgroundImage = image;
    });
});