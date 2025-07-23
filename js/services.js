env = "PROD"
if (env == "PROD"){
    base_url = "https://gestor-it.com/libroquejas/api/v1.0/"
}
if (env == "DEV"){
    base_url = "https://localhost/easybot/services/public/index.php/"
}


async function get_user(user, pass){
    url = base_url + "usuarios.php?usuario=" + user + "&password=" + pass;
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

async function get_canales(){
    url = base_url + "canales";
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

async function post_canales(campo, valor, id) {
    url = base_url + "canal/" + campo + "/" + valor + "/" + id;
    let response = await fetch(url);
    let data = await response.json();
    return data; 
}

async function get_conversaciones(campo, valor, id) {
    url = base_url + "conversaciones";
    let response = await fetch(url);
    let data = await response.json();
    return data; 
}