/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = init;


function init() {
    var boton = document.getElementById("btnAdicionar");
    boton.onclick = handleButtonClick;

}
function handleButtonClick() {
    var txtCancion = (document.getElementById("txtCancion")).value;
    if (txtCancion !== "") {        
        var li = document.createElement("li");
        li.innerHTML = txtCancion;
        var ul = document.getElementById("lista");
        ul.appendChild(li);
    } else {
        alert("No ha ingresado datos.");
    }
}
function intro(e) {
    if (e.keyCode === 13) {
        handleButtonClick();
        return false;
    }
}

