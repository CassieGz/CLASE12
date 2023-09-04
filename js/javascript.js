function saludo() {

  let usuario=prompt("Ingrese su nombre");

if (usuario=="" || usuario==null){

  alert("El campo está vacío");
  saludo();
} else{
  alert("Bienvenido/a "+ usuario + "!");
}
}
saludo();


