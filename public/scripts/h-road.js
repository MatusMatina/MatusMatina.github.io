/* road.js */
function red (road) {
    window.location.assign('html/countries/h/' + road);
}
function direction(id) {
    const target = document.getElementById(id);
    if (!target) return;

    target.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}
function dev () {
    alert('Táto funkcia je zatiaľ vo vývoji. Ďakujeme za pochopenie.')
}