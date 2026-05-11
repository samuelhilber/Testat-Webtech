window.addEventListener('DOMContentLoaded', () =>{
        fetch('./Json/Artikel.json')
            .then( (response) => {return response.json() } )
            .then ( (json) => {
                const a = document.getElementById("Titel1");
                a.innerText=json[0].Titel;
                const b = document.getElementById("Titel2");
                b.innerText=json[1].Titel;
                const c = document.getElementById("Titel3");
                c.innerText=json[2].Titel;
                const d = document.getElementById("Titel4");
                d.innerText=json[3].Titel;
                const e = document.getElementById("Titel5");
                e.innerText=json[4].Titel;
            })
    });


    window.addEventListener('DOMContentLoaded', () =>{
        fetch('./Json/Artikel.json')
            .then( (response) => {return response.json() } )
            .then ( (json) => {
                const a = document.getElementById("Text1");
                a.innerText=json[0].Text;
                const b = document.getElementById("Text2");
                b.innerText=json[1].Text;
                const c = document.getElementById("Text3");
                c.innerText=json[2].Text;
                const d = document.getElementById("Text4");
                d.innerText=json[3].Text;
                const e = document.getElementById("Text5");
                e.innerText=json[4].Text;
            })
    });