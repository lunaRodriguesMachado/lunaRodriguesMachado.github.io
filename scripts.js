function dropdown() {
    document.getElementById("skills").classList.toggle("aparecer")
}

window.onclick = function(event) {
    if (!event.target.matches('.botaodrop')) {
        let dropdown = document.getElementsByClassName("dropskills");
        let index;
        for (index = 0; index < dropdown.length; index++) {
            let abrirDropdown = dropdown[index];
            if (abrirDropdown.classList.contains("aparecer")) {
                abrirDropdown.classList.remove("aparecer")
            }
        }
    }
}