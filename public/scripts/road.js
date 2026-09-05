/* road.js */
function red (road) {
    window.location.assign('html/countries/sk/' + road);
}
function direction(id) {
    const target = document.getElementById(id);
    if (!target) return;

    target.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}