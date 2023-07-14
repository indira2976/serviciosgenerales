
// Validacion de formulario

formulario=document.getElementsByName("formulario")[0]
elementos=formulario.elements
boton=document.getElementById("btn")

validarNombre = function(e){
if(formulario.nombre.value == 0){
alert("Complete el campo Nombre")
e.preventDefault() }
 }


validarApellido = function(e){
if (formulario.apellido.value == 0){
alert("Complete el campo Apellido")
e.preventDefault()
 }
 }
  

validarCorreo = function(e){
if (formulario.correo.value == 0){
alert("Complete el campo Correo")
e.preventDefault()
}
}

validarTelefono = function(e){
if (formulario.telefono.value == 0){
alert("Complete el campo Telefono")
e.preventDefault()
 }}



validarCheckbox=function(e){
if (formulario.albañileria.checked ==false && formulario.cerrajeria.checked ==false &&formulario.electricidad.checked ==false &&  formulario.gasista.checked ==false && formulario.pintura.checked ==false && formulario.plomeria.checked ==false){alert("Seleccione al menos un Servicio")
e.preventDefault()

}}

 

validar = function(e){
    
validarNombre(e)
validarApellido(e)
validarCorreo(e)
validarTelefono(e)
validarCheckbox(e)}



formulario.addEventListener("submit",validar)



















