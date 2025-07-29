function close_1(obj){
    obj = document.getElementById(obj).style;
    obj.display = "none";
}

function open_1(obj, old){
    obj = document.getElementById(obj);
    obj.style.display = old;
}

function switch_1(){
    obj = document.getElementById('css');
    sheet = document.getElementById('css').href.split('css/')[1];
    modo = document.getElementById('modo');
    if(sheet == "style.css"){
        obj.href = document.getElementById('css').href.split('css/')[0] + "css/style_claro.css";
        modo.innerHTML = "<i class='fa fa-adjust'></i>&nbsp;&nbsp;Modo Oscuro";
    }else{
        obj.href = document.getElementById('css').href.split('css/')[0] + "css/style.css";
        modo.innerHTML = "<i class='fa fa-adjust'></i>&nbsp;&nbsp;Modo Claro";
        
    }
    img_modo();
}

function toggle_1(obj){
    obj = document.getElementById(obj);
    if(obj.className == "fa fa-toggle-on of"){
        obj.className = "fa fa-toggle-on on"
    }else{
        obj.className = "fa fa-toggle-on of"
    }
}

function show_menu(menu){
    menu = document.getElementById(menu);
    if(menu.style.display != "block"){ menu.style.display = "block" }else{ menu.style.display = "none" }
    menu.focus();
}

function show_phone(modal, can_user_ide){
    modal = document.getElementById(modal);
    user_span = document.getElementById('user_span');
    user_span.innerHTML = can_user_ide;
    modal.style.display = "block";
    modal.focus();
}

function hide_all(){
    menu1 = document.getElementById('menu1');
    menu2 = document.getElementById('menu2');
    modal1 = document.getElementById('modal1');
    modal2 = document.getElementById('modal2');
    menu1.style.display = "none";
    menu2.style.display = "none";
    modal1.style.display = "none";
    modal2.style.display = "none";
}

function img_modo(){
    obj = document.getElementById('css');
    sheet = document.getElementById('css').href.split('css/')[1];
    if(sheet == "style.css"){
        document.getElementById("bot_icon").src = "../img/bot.png";
    }else{
        document.getElementById("bot_icon").src = "../img/bot_black.png";
    }
}

function display_zona(obj){
	obj = document.getElementById(obj);
	if (obj.style.maxHeight=="0px" || obj.style.maxHeight==""){
        obj.style.maxHeight = "2000px";
        obj.style.display = "block";
	}else{
		obj.style.maxHeight = "0px";
	}
}

function load_div(obj, elem){
    fetch(elem).then(response=> response.text()).then(text=> document.getElementById(obj).innerHTML = text);
}

function crea_tabla(res,titulo,camp_len){
    console.log("RES lista_conversaciones:" + JSON.stringify(res));
    if(res.length == 0){
        tabla = '<table class="tabla_datos"><tr><td> SIN DATOS </td></tr></table>';
        if(titulo != ""){
            tabla = titulo + tabla;
        }
    }else{
        tabla = '<table class="tabla_datos"><tr>';
        if(titulo != ""){
            tabla = titulo + tabla;
        }
        campos = Object.keys(res[0]);
        anchos = []
        for(v=0;v<campos.length;v++){
            anchos.push(camp_len[v])
        }
        campos.map( (ele,index) => {camp_len[index]!="" ? tabla += '<th class="th1" width="' + camp_len[index] + '">' + ele + '</th>': tabla += '<th class="th1">' + ele + '</th>' });
        tabla += "</tr><tr>";
        res.map( (dato) => {
            campos.map( (campo) => {
                if(campo == "canal_id"){
                    dato0 = dato[campo];
                    dato1 = canal_icon(dato0, dato['can_user_ide']);
                    tabla += '<td class="td1">' + dato1 + '</td>'
                }else{
                    if(dato[campo] == null){dato1 = ""} else {dato1=dato[campo]}
                    tabla += '<td class="td1">' + dato1 + '</td>'
                }
                
            });
            tabla += "</tr>";
        } )
        tabla += '</tr></table><br><br>';
    }
    return tabla;
}

function canal_icon(value, can_user_ide){
    if (value == "1"){icon = '<i class="fa fa-whatsapp pointer" style="font-size: 16px; color:#02c909" onmouseup="show_phone(\'modal2\', \'' + can_user_ide + '\')" ></i>'}
    if (value == "2"){icon = '<i class="fa fa-instagram pointer " style="font-size: 16px; color:#b728bc"></i>'}
    if (value == "3"){icon = '<i class="fa fa-facebook-official pointer" style="font-size: 16px; color:#2a28bc"></i>'}
    if (value == "4"){icon = '<i class="fa fa-twitter-square pointer" style="font-size: 16px; color:#28a3bc"></i>'}
    if (value == "5"){icon = '<i class="fa fa-telegram pointer" style="font-size: 16px; color:#28a3bc""></i>'}
    if (value == "6"){icon = '<i class="fa fa-weixin pointer" style="font-size: 16px; color:#bc5e28"></i>'}
    return icon;
}

function abre_pag(pag){
    hide_all();
    document.getElementById("contenedor").innerHTML = '<object id="htmldiv" type="text/html" data="' + pag + '" style="width:100%; height:100%; display:block;"></object>';
}

function hide_all(){
    menu1 = parent.document.getElementById('menu1');
    menu2 = parent.document.getElementById('menu2');
    modal1 = parent.document.getElementById('modal1');
    modal2 = parent.document.getElementById('modal2');
    menu1.style.display = "none";
    menu2.style.display = "none";
    modal1.style.display = "none";
    modal2.style.display = "none";
}