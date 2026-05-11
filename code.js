window.addEventListener('load', () =>{
        fetch('./Testat/Json/Artikel.json')
            .then( (response) => {return response.json() } )
            .then ( (json) => {
                const d = document.getElementById("ueaberschriftNews");
                d.innerText=json.Titel;
            })
    });
