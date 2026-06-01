window.addEventListener('DOMContentLoaded', () => {
    fetch('./Json/Artikel.json')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            for (let i = 0; i < json.length; i++) {
                let idNummer = i + 1;
                let idNameTitel = "Titel" + idNummer.toString();
                const a = document.getElementById(idNameTitel);
                a.innerText = json[i].Titel;
                console.log(idNameTitel)
            }
        });
});
