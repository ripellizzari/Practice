const API_URL = "https://rickandmortyapi.com/api";

const xhr = new XMLHttpRequest();

function onRequestHandler() {
  if (this.readyState == 4 && this.status == 200) {
    // 0 = UNSET, no se ha llamado al metodo open
    // 1 = OPENED, se ha llamado al metodo open
    // 2 = HEADERS_RECIVE, se está llamando al metodo send()
    // 3 = LOADING, estsa cargando, es decir, esta recibiendo la respuesta.
    // 4 = DONE, se ha completado la operacion.
    const data = JSON.parse(this.response);
    const HTMLResponse = document.querySelector("#app");

    console.log(data);
    const tpl = data.results.map(
      (user) => `<li>${user.name} ${user.status} </li>`
    );
    HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
  }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${API_URL}/character`);
xhr.send();
