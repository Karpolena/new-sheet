
   

// Кнопки
var buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++){
    var button = buttons[i];
    button.innerText = i;
    button.onclick = function(e){
        document.getElementById("rez").innerHTML = i;
    }    

}