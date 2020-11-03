document.getElementById('buttonClick').onclick = aceptation;
    
function aceptation(){
    var result = document.getElementById('age').value;

    if(result >= 18){
        alert('vous êtes majeur');
    } 
    else{
        alert('Vous êtes mineur');
    }
}