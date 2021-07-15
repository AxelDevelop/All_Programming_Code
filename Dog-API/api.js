    const btn = document.querySelector("#btn");
    const getDog = () => {
        var adquirirDog = document.querySelector("#search").value;
        const dogUrl = adquirirDog.replace(/-/g, '/');
        fetch("https://dog.ceo/api/breed/" + dogUrl + "/images/random")
        .then(res => res.json())
        .then(resultado  =>  {
                const imagen = document.querySelector("#imagen"),
                respuesta = resultado.message;
                imagen.setAttribute("src", respuesta);
        })
        }

    btn.addEventListener('click', getDog);