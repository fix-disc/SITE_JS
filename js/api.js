// PROD
base_url = "https://gestor-it.com/libroquejas/api/v1.0/"
// DEV
//base_url = "http://localhost/API-RECLAMOS/api/v1.0/"


async function get_users(user,pass){
    url = base_url + "usuarios.php?usuario=" + user+ "&password=" + pass;
    let response = await fetch(url);
    let data = await response.json();
    return data; 
}

async function post_reclamo(reclamo){
    url = base_url
    url = base_url + "reclamos.php";
    var data1 = {reclamo: reclamo};
    options={
        method:"POST",
        body: JSON.stringify(data1)
    };
    let response = await fetch(url, options);
    let data = await response.json();
    return data; 
}

async function get_reclamos(id){
    url = base_url + "reclamos.php?id=" + id;
    let response = await fetch(url);
    let data = await response.json();
    return data; 
}

async function login_usuario(usuario, password){
    url = base_url + "usuarios.php?usuario=" + usuario + "&password=" + password;
    let response = await fetch(url);
    let data = await response.json();
    return data; 
}