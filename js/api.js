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

async function post_observaciones(id, obs){
    url = base_url
    url = base_url + "observaciones.php";
    var data1 = {id: id, obs: obs};
    options={
        method:"POST",
        body: JSON.stringify(data1)
    };
    let response = await fetch(url, options);
    let data = await response.json();
    return data; 
}

async function del_observaciones(id){
    url = base_url
    url = base_url + "observaciones.php";
    var data1 = {id: id};
    options={
        method:"DELETE",
        body: JSON.stringify(data1)
    };
    let response = await fetch(url, options);
    let data = await response.json();
    return data; 
}

async function get_reclamos(id){
    if(id!=""){
        url = base_url + "reclamos.php?id=" + id;
    }else{
        url = base_url + "reclamos.php";
    }
    let response = await fetch(url);
    let data = await response.json();
    return data; 
}

async function mod_reclamos(id, estado){
    url = base_url + "reclamos.php";
    var data1 = {id: id, estado: estado};
     options={
        method:"POST",
        body: JSON.stringify(data1)
    };
    let response = await fetch(url, options);
    console.log("response: " + JSON.stringify(response));
    let data = await response.json();
    return data; 
}

async function get_departamentos(){
    url = base_url + "departamentos.php";
    let response = await fetch(url);
    let data = await response.json();
    return data; 
}

async function get_reclamos_filtro(filtro){
    url = base_url + "reclamos.php?filtro=" + filtro;
    console.log("URL: " + url);
    let response = await fetch(url);
    let data = await response.json();
    return data; 
}

async function get_reclamos_agno(agno){
    url = base_url + "reclamos.php?agno=" + agno;
    alert(url)
    let response = await fetch(url);
    let data = await response.json();
    return data; 
}

async function get_tipo_reclamo(){
    url = base_url + "tipo_reclamos.php";
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