
// Funcions inicialitzades
var contador = 0

// Funcio que compara entre el valor que li coloquis com cadena (que es pasara per variable) amb la cadena de valors que hi ha dispatchEvent, si comproba que es correcte enviara true, sino enviara un false
function isUrl(cadena: string) {   
    var valors = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    return valors.test(cadena);
}

function guardar() {
    // Agafa del formulari les dades que es necesiten per crear la noticia, 
    // he colocat el HTMLINputElement per aconseguir que no el detecti com null i no doni error
    var var1 = (<HTMLInputElement>document.getElementById("dataNoticia")).value;
    var var2 = (<HTMLInputElement>document.getElementById("titolNoticia")).value;
    var var3 = (<HTMLInputElement>document.getElementById("enllaçNoticia")).value;
    var var4 = (<HTMLInputElement>document.getElementById("descripcioNoticia")).value;
    var controladorErrors = 0;
    var controladorErrors1 = 0;
    var controladorErrors2 = 0;
    var controladorErrors3 = 0;

    // Valors que pasen un string a un int per que pugin ser comparats per la funcio isNaN que comprova si es un numero o no
    var var2Res = parseInt(var2);
    var var3Res = parseInt(var3);
    var var4Res = parseInt(var4);

    // Comprovacions de errors
    // Comprovacio si el valor de la data esta vuit
    if(var1 == ""){
        (<HTMLInputElement>document.getElementById('errorData')).innerHTML = 'Error, la data no pot estar vuida.';
    } else {
        (<HTMLInputElement>document.getElementById('errorData')).innerHTML = 'Correcte';
        controladorErrors++;
    }

    // Comprovacio si el valor del titol esta vuit
    if(var2 == ""){
        (<HTMLInputElement>document.getElementById('errorTitol')).innerHTML = 'Error, el titol no pot estar vuit.';
    } else {
        (<HTMLInputElement>document.getElementById('errorTitol')).innerHTML = 'Correcte';
        controladorErrors2++;
    }

    // Comprovacio si el titol es un numero
    if(isNaN(var2Res) == false){
        (<HTMLInputElement>document.getElementById('errorTitol')).innerHTML = 'Error, el titol no pot ser un numero';
    } else {
        (<HTMLInputElement>document.getElementById('errorTitol')).innerHTML = 'Correcte';
        controladorErrors2++;
    }

    // Comprovacio que comprova que les anteriors comparacions estiguin correctes i si son correctes enviara un correcte i sumara el contador per guardar sino colocara un error
    if(controladorErrors2 == 2){
        (<HTMLInputElement>document.getElementById('errorTitol')).innerHTML = 'Correcte';
        controladorErrors++;
    } else {
        (<HTMLInputElement>document.getElementById('errorTitol')).innerHTML = 'Error, en la part del titol.';
    }

    // Comprovacio que comprova si el enllaç de la noticia esta vuit
    if(var3 != ""){
        controladorErrors1++;
    }

    // Comprovacio que comprova que el enllaç no sigui un numero
    if(isNaN(var3Res) == true){
        controladorErrors1++;
    }

    // Comprovacio que comprova si es un enllaç el enllaç que pasa el usuari
    if(isUrl(var3) == true){
        controladorErrors1++;
    }

    // Comprovacio que comprova que les anteriors comprovacions siguin correctes i si es correcte suma 1 en el valor per guardar
    if(controladorErrors1 == 3){
        (<HTMLInputElement>document.getElementById('errorEnllaç')).innerHTML = 'Correcte. ';
        controladorErrors++;
    } else {
        (<HTMLInputElement>document.getElementById('errorEnllaç')).innerHTML = 'Error, Error en la part del enllaç.';
    }

    // Comprovacio si la descripcio de la noticia esta vuida o no
    if(var4 == ""){
        (<HTMLInputElement>document.getElementById('errorDescripcio')).innerHTML = 'Error, la descripcio no pot estar vuida.';
    } else {
        controladorErrors3++;
    }

    // Comprovacio si la descripcio de la noticia es un numero
    if(isNaN(var4Res) == false){
        (<HTMLInputElement>document.getElementById('errorDescripcio')).innerHTML = 'Error, la descripcio no pot ser un numero.';
    } else {
        controladorErrors3++;
    }

    // Controlador de error que comprova que tots els anteriors errors estiguin correctes i si es correcte sumara un en el valor per guardar
    if(controladorErrors3 == 2){
        (<HTMLInputElement>document.getElementById('errorDescripcio')).innerHTML = 'Correcte.';
        controladorErrors++;
    } else {
        (<HTMLInputElement>document.getElementById('errorDescripcio')).innerHTML = 'Error en la part de la descripcio. ';
    }

    // Si el valor del comprovador de errors es igual al numero de comprovadors ja que es correcte, guarda la noticia
    if(controladorErrors == 4){
        (<HTMLInputElement>document.getElementById("errorControlErrors")).innerHTML = "Correcte";
        // Crea el element noticia com un div dins del div del html el cual noticia sera el pare dels append
        var noticia = document.createElement("p");
        var informacio = document.createElement("details")

        // Aqui es pot veure com he colocat a noticia com a pare dels append
        var pare = noticia.parentNode;

        // Aqui es pot veure com he creat la informacio necesaria per juntar la noticia
        var dataNoticia = document.createTextNode(var1);
        var titolNoticia = document.createTextNode(var2);
        var espaiDescripcio = document.createTextNode("Informacio: ");
        var descripcioNoticia = document.createTextNode(var4);
        var espaiNoticia = document.createTextNode(" - ");

        // Colocacio dels fills
        noticia.appendChild(dataNoticia);
        noticia.appendChild(espaiNoticia)
        noticia.appendChild(titolNoticia);
        informacio.appendChild(espaiDescripcio);
        informacio.appendChild(descripcioNoticia);
        noticia.appendChild(informacio);

        // Mostrar les noticies en un div
        var recollida:any = document.getElementById("noticiesColocades");
        recollida.appendChild(noticia);
    } else {
        // Mostra el missatge de que no funciona correctament ja que hi ha un comprovador que ha avisat de que el valor que ha sigut colocat no es correcte
        (<HTMLInputElement>document.getElementById("errorControlErrors")).innerHTML = "Error, hi ha un camp que no esta be.";
    }
}

function guardarMenu(){
    // Valors de la funcio
    var var5 = (<HTMLInputElement>document.getElementById("titolMenu")).value;
    var var6 = (<HTMLInputElement>document.getElementById("subelementsMenu")).value;
    var var12 = (<HTMLInputElement>document.getElementById("subelementsMenu2")).value;
    var var7 = (<HTMLInputElement>document.getElementById("estilsNoticia")).value;
    var var8 = (<HTMLInputElement>document.getElementById("estilsNoticiaSubelement")).value;
    var estilSubElement = (<HTMLInputElement>document.getElementById("estilsNoticiaSubelement2")).value;

    // Creacio del li i dels atributs que aniran a dins
    var divMenu = document.createElement("div");
    var boto = document.createElement("button");
    boto.id = contador + "";
    var contingutBoto = document.createElement("div");
    var contingutDiv = document.createElement("a");
    var contingutDiv2 = document.createElement("a");

    // Aqui es pot veure com he colocat a menu que es el nav com a pare dels append
    var pare = divMenu.parentNode;
    
    // Aqui es pot veure com he creat la informacio necesaria per juntar el menu
    var titolMenu = document.createTextNode(var5);
    var subelementsMenu = document.createTextNode(var6);
    var subelementsMenu2 = document.createTextNode(var12);

    divMenu.appendChild(boto);
    divMenu.classList.add("dropdown");
    boto.style.cssText = var7;
    boto.classList.add("dropbtn");
    boto.appendChild(titolMenu);
    // Si el valor del subelement no esta vuit, entra a aquest if
    if(var6 != ""){
        divMenu.appendChild(contingutBoto)
        contingutBoto.appendChild(contingutDiv);
        contingutBoto.classList.add("dropdown-content");
        contingutDiv.appendChild(subelementsMenu);
        // Si el valor del segon subelement no esta vuit, entra a aquest if
        if(var12 != ""){
            contingutBoto.appendChild(contingutDiv2);
            contingutDiv.setAttribute('href', "#");
            contingutDiv2.appendChild(subelementsMenu2);
            // Si el valor del segon subelement dels estils no esta vuit, entra a aquest if
            if(estilSubElement != ""){
                contingutDiv2.style.cssText = estilSubElement;
            } else {
                contingutDiv2.style.cssText = var8;
            }
            contingutDiv2.setAttribute('href', "#");
        }
        contingutDiv.style.cssText = var8;
        contingutDiv.setAttribute('href', "#");
    }

    // Mostra de les dades al HTML
    var recollida:any = document.getElementById("menuDesplegable");
    recollida.appendChild(divMenu);
    contador++;
}

window.onload = function(){
    // Crea el element noticia com un div dins del div del html el cual noticia sera el pare dels append
    var noticia = document.createElement("p");
    var noticia2 = document.createElement("p");
    var noticia3 = document.createElement("p");
    var informacio = document.createElement("details");
    var informacio2 = document.createElement("details");
    var informacio3 = document.createElement("details");

    // Aqui es pot veure com he colocat a noticia com a pare dels append
    var pare = noticia.parentNode;
    var pare2 = noticia2.parentNode;
    var pare3 = noticia2.parentNode;

    // Aqui es pot veure la primera noticia
    var dataNoticia = document.createTextNode("01/02/2022");
    var titolNoticia = document.createTextNode("Molt fred");
    var espaiDescripcio = document.createTextNode("Informacio: ");
    var descripcioNoticia = document.createTextNode("Les temperatures han baixat un 10% mes desde l'utilma vegada.");
    var espaiNoticia = document.createTextNode(" - ");
    var recollida:any = document.getElementById("noticiesColocades");

    // Aqui es pot veure la segona noticia
    var dataNoticia2 = document.createTextNode("10/06/2022");
    var titolNoticia2 = document.createTextNode("Molt calor");
    var espaiDescripcio2 = document.createTextNode("Informacio: ");
    var descripcioNoticia2 = document.createTextNode("Les temperatures han pujat un 10% mes desde l'utilma vegada.");
    var espaiNoticia2 = document.createTextNode(" - ");
    var recollida2:any = document.getElementById("noticiesColocades");

    // Aqui es pot veure la tercera noticia
    var dataNoticia3 = document.createTextNode("15/06/2022");
    var titolNoticia3 = document.createTextNode("Millor Temperatura");
    var espaiDescripcio3 = document.createTextNode("Informacio: ");
    var descripcioNoticia3 = document.createTextNode("Les temperatures son neutres desde l'ultima vegada.");
    var espaiNoticia3 = document.createTextNode(" - ");
    var recollida3:any = document.getElementById("noticiesColocades");
    
    // Colocacio dels fills de la primera noticia autogenerada
    noticia.appendChild(dataNoticia);
    noticia.appendChild(espaiNoticia);
    noticia.appendChild(titolNoticia);
    informacio.appendChild(espaiDescripcio);
    informacio.appendChild(descripcioNoticia);
    noticia.appendChild(informacio);
    recollida.appendChild(noticia);

    // Colocacio dels fills de la segona noticia autogenerada
    noticia2.appendChild(dataNoticia2);
    noticia2.appendChild(espaiNoticia2);
    noticia2.appendChild(titolNoticia2);
    informacio2.appendChild(espaiDescripcio2);
    informacio2.appendChild(descripcioNoticia2);
    noticia2.appendChild(informacio2);
    recollida2.appendChild(noticia2);

    // Colocacio dels fills de la tercera noticia autogenerada
    noticia3.appendChild(dataNoticia3);
    noticia3.appendChild(espaiNoticia3);
    noticia3.appendChild(titolNoticia3);
    informacio3.appendChild(espaiDescripcio3);
    informacio3.appendChild(descripcioNoticia3);
    noticia3.appendChild(informacio3);
    recollida3.appendChild(noticia3);
    
}