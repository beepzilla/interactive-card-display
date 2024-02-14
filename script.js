const cardContainers = document.querySelectorAll('.card');
cardContainers.forEach(function (cardContainer) {
    cardContainer.addEventListener('click', function () {
        this.classList.toggle('flipped');
    });
});
