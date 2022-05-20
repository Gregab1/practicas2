
var docs=['Hugo Llanos','Pedro Pacheco','Nicolas Soto','Andres Avalos','Francisco Cabre','Emiliano Martines'];


var txt_nombres = localStorage.getItem("ls_nombres");
if(txt_nombres){
    var pacientes = JSON.parse(txt_nombres);
}else{
    var pacientes = [];
}
var txt_edad = localStorage.getItem("ls_edades");
if(txt_edad){
    var edad = JSON.parse(txt_edad);
}else{
    var edad= [];
}
var txt_obra = localStorage.getItem("ls_obra");
if(txt_obra){
    var ObraSocial= JSON.parse(txt_obra);
}else{
    var ObraSocial= [];
}
var txt_estado = localStorage.getItem("ls_esta");
if(txt_estado){
    var EstadoCronico = JSON.parse(txt_estado);
}else{
    var EstadoCronico = [];
}

function ver() {
  var tabla = "";
  for (var i = 0; i < pacientes.length; i++) {
    tabla =tabla +"<tr><td>" +[i] +"</td><td>" +pacientes[i] + "</td><td>" + edad[i] +"</td><td>" + ObraSocial[i] + "</td><td>" +EstadoCronico[i] +"</td></tr>";
  }
  tabla = "<table class= 'table table-success table-striped'  ><tr><th>N°</th><th>Paciente</th><th>Edad</th></th><th>Obra Social</th><th>Estado</th></tr>" + tabla + "</table>";
  localStorage.setItem("ls_nombres",JSON.stringify(pacientes));
  localStorage.setItem("ls_edades",JSON.stringify(edad));
  localStorage.setItem("ls_obra",JSON.stringify(ObraSocial));
  localStorage.setItem("ls_esta",JSON.stringify(EstadoCronico));
  document.getElementById("mostrar").innerHTML = tabla;
  
 
  


}
function verpacientes() {
  var pasc = "";
  for (var i = 0; i < pacientes.length; i++) {
    pasc =pasc +"<tr><td>" +[i] +"</td><td>" +pacientes[i] +"</td></tr>";
  }
  pasc = "<table><tr><th>N°</th><th>Paciente</th</tr>" + pasc + "</table>";
  localStorage.setItem("ls_nombres",JSON.stringify(pacientes));

  document.getElementById("paci").innerHTML = pasc;
 
  


}
//codigo de eliminacion de pacientes//
function eliminarR() {
  var Elimi = document.getElementById("nele").value;
  pacientes.splice(Elimi, 1);
  edad.splice(Elimi, 1);
  ObraSocial.splice(Elimi, 1);
  EstadoCronico.splice(Elimi, 1);
  ver();
}
//codigo de ardenaiento de pacietes//

function mayor() {
  var bandera, aux;
  do {
    bandera = false;
    for (var i = 0; i < pacientes.length; i++) {
      if (edad[i] < edad[i + 1]) {
        aux = edad[i];
        edad[i] = edad[i + 1];
        edad[i + 1] = aux;
        bandera = true;

        aux = pacientes[i];
        pacientes[i] = pacientes[i + 1];
        pacientes[i + 1] = aux;

        aux = ObraSocial[i];
        ObraSocial[i] = ObraSocial[i + 1];
        ObraSocial[i + 1] = aux;

        aux = EstadoCronico[i];
        EstadoCronico[i] = EstadoCronico[i + 1];
        EstadoCronico[i + 1] = aux;
      }
    }
  } while (bandera==true);
  ver();
}
//mostrar pacientes
function moster(){
   
   var info="";
   var leer=document.getElementById('mos').value;
    for(var i=0;i<pacientes.length;i++){
        if(pacientes[i]==pacientes[leer]){
            info = info + "<tr><td>" + [i] + "</td><td>" + pacientes[i] + "</td><td>" + edad[i] +"</td><td>" + ObraSocial[i] + "</td><td>" + EstadoCronico[i] + "</td></tr>";
        }
      
    }
    info= "<table border=true><tr><th>N°</th><th>Paciente</th><th>Edad</th><th>Obra Social</th><th>Estado</th></tr>" + info + "</table>";
     document.getElementById('ver1').innerHTML=info;
}

//Eliminar varios //
function variosElim(){


j = 0;

var randon = document.getElementsByName("eliminando");



for ( var i = 0; i < randon.length; i++) {
    
    if (randon[i].checked) {
        if (randon[i].value == "muymal") {
            var borandon = "grave";
           
        } if (randon[i].value == "muybien") {
            var borandon= "leve";
            
        } if (randon[i].value=="-osprera"){
          var borandon="Osprera";
        }if (randon[i].value=="sepon"){
          var borandon="Osep";
        }if (randon[i].value=="-osprera"){
          var borandon="Osprera";
        }if (randon[i].value=="osde"){
          var borandon="Osdipp";
        }if (randon[i].value=="simac"){
          var borandon="Simeco";
        }

    }


}

for (var i = 0; i < randon.length; i++) {
    
    if (randon[i].checked) {
        do {
            var bandera3 = true;
            for (j = 0; j < pacientes.length; j++) {
                if (EstadoCronico[j] == borandon) {
                    
                    pacientes.splice(j, 1);
                    edad.splice(j, 1);
                    EstadoCronico.splice(j, 1);
                    ObraSocial.splice(j, 1);
                    bandera3 = false;
                }
            }
        } while (bandera3 == false);
    }
    if (randon[i].checked) {
      do {
          var bandera3 = true;
          for (j = 0; j < pacientes.length; j++) {
              if (ObraSocial[j] == borandon) {
                  
                  pacientes.splice(j, 1);
                  edad.splice(j, 1);
                  EstadoCronico.splice(j, 1);
                  ObraSocial.splice(j, 1);
                  bandera3 = false;
              }
          }
      } while (bandera3 == false);
  }
}
ver();
}
//codigo de agregar pacientes//
function Agregar(){
  var nomAp=document.getElementById("nombreApellido").value;
  var yaars=document.getElementById("añosdevida").value;
  var estados=document.getElementById("situacionsalus").value;
  var ayuda=document.getElementById("obrasSocialespaci").value;
  

  pacientes.push(nomAp);
  edad.push(yaars);
  EstadoCronico.push(estados);
  ObraSocial.push(ayuda);
 
  
  ver();
}
//mostrar pacientes grave//
function mostergrave(){
  var info="";
  
    for(var i=0;i<EstadoCronico.length;i++){
        if(EstadoCronico[i]=='grave'){
            info = info + "<tr><td>" + [i] + "</td><td>" + pacientes[i] + "</td><td>" + edad[i] +"</td><td>" + ObraSocial[i] + "</td><td>" + EstadoCronico[i] + "</td></tr>";
        }
      
    }
    info= "<table border=true><tr><th>N°</th><th>Paciente</th><th>Edad</th><th>Obra Social</th><th>Estado</th></tr>" + info + "</table>";
     document.getElementById('ver2').innerHTML=info;
}
//mostrar pacientes leves//
function mosterleve(){
  var info="";
  
    for(var i=0;i<EstadoCronico.length;i++){
        if(EstadoCronico[i]=='leve'){
            info = info + "<tr><td>" + [i] + "</td><td>" + pacientes[i] + "</td><td>" + edad[i] +"</td><td>" + ObraSocial[i] + "</td><td>" + EstadoCronico[i] + "</td></tr>";
        }
      
    }
    info= "<table border=true><tr><th>N°</th><th>Paciente</th><th>Edad</th><th>Obra Social</th><th>Estado</th></tr>" + info + "</table>";
     document.getElementById('ver3').innerHTML=info;
}
//codigo de mostrar mayores a...//
function mosterma(){
  var info="";
   var leo=document.getElementById('mayores').value;
    for(var i=0;i<edad.length;i++){
        if(edad[i]>leo){
            info = info + "<tr><td>" + [i] + "</td><td>" + pacientes[i] + "</td><td>" + edad[i] +"</td><td>" + ObraSocial[i] + "</td><td>" + EstadoCronico[i] + "</td></tr>";
        }
      
    }
    info= "<table border=true><tr><th>N°</th><th>Paciente</th><th>Edad</th><th>Obra Social</th><th>Estado</th></tr>" + info + "</table>";
     document.getElementById('ver4').innerHTML=info;
}
//codigo mostrar menores a...
function mosterme(){
  var info="";
   var leo=document.getElementById('menores').value;
    for(var i=0;i<edad.length;i++){
        if(edad[i]<leo){
            info = info + "<tr><td>" + [i] + "</td><td>" + pacientes[i] + "</td><td>" + edad[i] +"</td><td>" + ObraSocial[i] + "</td><td>" + EstadoCronico[i] + "</td></tr>";
        }
      
    }
    info= "<table border=true><tr><th>N°</th><th>Paciente</th><th>Edad</th><th>Obra Social</th><th>Estado</th></tr>" + info + "</table>";
     document.getElementById('ver5').innerHTML=info;
}
//modificacion de turno//

function modificador(){
  var info="";
  var modi=document.getElementById('buscador').value;
  var nuevo=document.getElementById('nuevo').value;
  
 



   for(var i=0;i<pacientes.length;i++){
       if(pacientes[i]==pacientes[modi]){
         pacientes[modi]=nuevo;
       info = info + "<tr><td>" + [i] + "</td><td>" + pacientes[i] + "</td><td>" + edad[i] +"</td><td>" + ObraSocial[i] + "</td><td>" + EstadoCronico[i] + "</td></tr>";
   }
  
  }
 
  info= "<table border=true><tr><th>N°</th><th>Paciente</th><th>Edad</th><th>Obra Social</th><th>Estado</th></tr>" + info + "</table>";
   document.getElementById('ver6').innerHTML=info;

    
    ver();
}
//modificaion de edad//

function mod(){
  var info="";
  var modi=document.getElementById('buscador').value;
  var newyears=document.getElementById('news').value;
  
 



   for(var i=0;i<edad.length;i++){
       if(edad[i]==edad[modi]){
         edad[modi]=newyears;
       info = info + "<tr><td>" + [i] + "</td><td>" + pacientes[i] + "</td><td>" + edad[i] +"</td><td>" + ObraSocial[i] + "</td><td>" + EstadoCronico[i] + "</td></tr>";
   }
  
  }
 
  info= "<table border=true><tr><th>N°</th><th>Paciente</th><th>Edad</th><th>Obra Social</th><th>Estado</th></tr>" + info + "</table>";
   document.getElementById('ver7').innerHTML=info;

    
    ver();
}
//modificacion de turno completo//
function universal(){
  var listar="";
  
var modi=document.getElementById('buscador').value;
var nomsur=document.getElementById('completo').value;
var canti =document.getElementById('years').value;
var more=document.getElementById('salvacion').value;
var estadosnum1=document.getElementById('salud1').value;

for(var i=0;i<pacientes.length;i++){
  if(pacientes[i]===pacientes[modi]){
    pacientes[modi]=nomsur;
  }
}
for(var i=0;i<edad.length;i++){
  if(edad[i]===edad[modi]){
    edad[modi]=canti;
  }
}
for(var i=0;i<ObraSocial.length;i++){
  if(ObraSocial[i]===ObraSocial[modi]){
    ObraSocial[modi]=more;
  }
}
for(var i=0;i<EstadoCronico.length;i++){
  if(EstadoCronico[i]===EstadoCronico[modi]){
    EstadoCronico[modi]=estadosnum1;
  }
}
listar=listar+"<p>"+"Modificacion Exitosa!!   "+" - "+"N°"+[modi]+ " - "+"Nombre y apellido; "+ pacientes[modi]+" - "+"Edad; "+edad[modi]+" - "+"Obra Social; "+ObraSocial[modi]+" - "+"Estado; "+ EstadoCronico[modi]+"</p>"
document.getElementById('ver8').innerHTML=listar;
    
    ver();
}
//muestra de doctores
function mirardocs() {
  var tabla = "";
  for (i = 0; i < docs.length; i++) {
    tabla =tabla +"<tr><td>" +[i] +"</td><td>" +docs[i] +"</td></tr>";
  }
  tabla = "<table border=true><tr><th>N°</th><th>Doctores</th>" + tabla + "</table>";
  document.getElementById("verfin").innerHTML = tabla;
}
function guardar(){
               
  var misDatos = [];
  var paraRevisar=document.getElementById('di1').value

  var paraGuardar = document.getElementById('entrada').value;
  
  for(var i=0;i<pacientes.length;i++ ){
    
          if(pacientes[i]==pacientes[paraGuardar]){
            paraGuardar ="<p>"+['TURNO A; '] + " - NOMBRE-" + pacientes[i] + " -EDAD-" + edad[i] +" -OBRA SOCIAL- " + ObraSocial[i] + " -ESTADO- " + EstadoCronico[i] +"</p>";
          }
          
  }
  for(var i=0;i<docs.length;i++){
    if(docs[i]==docs[paraRevisar]){
      paraRevisar = "<p>"+['DOCTOR; '] + " - " + docs[i] +"</p>";
    }
    
}
var turno= paraGuardar + paraRevisar;
       
  var datosRecuperados = localStorage.getItem("misDatosGuardados");
       
  if(!(datosRecuperados == null)){
      misDatos = JSON.parse(datosRecuperados);                     
  }else{
  }

  misDatos.push(turno);
  
              
  var datosParaGuardar = JSON.stringify(misDatos)
       
  localStorage.setItem("misDatosGuardados",datosParaGuardar);
}

function recuperar(){
  
  var datosRecuperados = localStorage.getItem("misDatosGuardados");
  if(datosRecuperados != null){
      var vectorRecuperado = JSON.parse(datosRecuperados);
      var str_lista = convertirLista(vectorRecuperado);
      document.getElementById('ultimo').innerHTML = str_lista;
  }    
}

function convertirLista(miVec){
  var vdr = "";
  for(var i=0 ;i<miVec.length ;i++){
      vdr = vdr + "//-----TURNO ASIGNADO - CLINICA SOLUTION S.A.-----// "+miVec[i];
  }
  return "<ul>"+vdr+"</ul>";
}

function borrar(){
  localStorage.removeItem("misDatosGuardados");
}


