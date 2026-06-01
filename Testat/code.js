window.addEventListener('DOMContentLoaded', () => {
    fetch('./Json/Artikel.json')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            for (let i = 0; i < json.length; i++) {
                let idNummer = i + 1;
                let idNameTitel = "Titel" + idNummer.toString();
                let idNameText ="Text" + idNummer.toString();

                const a = document.getElementById(idNameTitel);
                a.innerText = json[i].Titel;

                const b = document.getElementById(idNameText);
                b.innerText = json[i].Text;
            }
        });
});
