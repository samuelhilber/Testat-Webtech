window.addEventListener('DOMContentLoaded', () => {
    fetch('./Json/Artikel.json')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            const cotainer = document.getElementById("landingContainer")

            for (let i = 0; i <= 2; i++) {

                const artikel = json[i]

                const landingBox = document.createElement("div");
                landingBox.classList.add("box-landing");

                const bild = document.createElement("img");
                bild.classList.add("newsartikelbild-landing");
                bild.src = artikel.Bild;

                const titel = document.createElement("div");
                titel.classList.add("ueaberschriftNews")
                titel.innerText = artikel.Titel;       

                const button = document.createElement("a")
                button.classList.add("btn");
                button.href = "news.html"; 
                button.innerText="Zu den News";
                
                landingBox.appendChild(bild);
                landingBox.appendChild(titel);
                landingBox.appendChild(button);
                
                cotainer.appendChild(landingBox);

            }
        });
});
