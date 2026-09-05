/* road.js */
function red (road) {
    window.location.assign('html/countries/hr/' + road);
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
function cestarina (np) {
    if(np=='Bregana') {
        alert('Platí sa jednoazové mýto v nasledovných hodnotách platných ku 14.8.2026: Kat.1A=0,60€; Kat.1=1,00€; Kat.2=1,20€; Kat.3=1,70€; Kat.4=3,30€. Pre rozšírené možnosti pozrite webové sídlo https://hac.hr.')
    } else if (np!=null) {
        alert('Táto funkcia je zatiaľ vo vývoji. Ďakujeme za pochopenie.')
    } else {
        alert('Neexistujúca mýtna brána.')
    }
    
}