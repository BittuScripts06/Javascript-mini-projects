let index = 0;
function changeColors() {
    var arrColors = ['red', 'blue', 'green','yellow','pink','grey','black'];
    const body = document.querySelector('body');
    body.style.background = arrColors[index++];
    if(index>arrColors.length-1){
        index=0;
    }

}