window.addEventListener('DOMContentLoaded', () => {
    fetch('./Json/Artikel.json')
        .then((response) => {
            return response.json();
        })
        .then((json) => {

            const container = document.getElementById("newsContainer");

            for (let i = 0; i < json.length; i++) {

                const artikel = json[i]
                
                const newsBox = document.createElement("div");
                newsBox.classList.add("news-box");
                
                const bild = document.createElement("img");
                bild.classList.add("newsartikelbild");
                bild.src = artikel.Bild;
                
                const titel = document.createElement("div");
                titel.classList.add("emphasis-news");
                titel.innerText = artikel.Titel;

                const text = document.createElement("p");
                text.classList.add("newsartikel")
                text.innerText = artikel.Text;

                newsBox.appendChild(bild);
                newsBox.appendChild(titel);
                newsBox.appendChild(text);

                container.appendChild(newsBox);
            }
        });
});
