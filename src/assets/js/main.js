let urlf = ''
document.addEventListener('DOMContentLoaded', () => {
    siguiente = (numero,id,requerido) =>{
        if(requerido){
            if(document.getElementById(id).value > 0){
                document.getElementById('g'+(numero-1)).classList.add('displaynone');
                document.getElementById('g'+numero).classList.remove('displaynone');
                
                quitarError();
            }else{
                
                saltarError();
            }
        }else{
            document.getElementById('g'+(numero-1)).classList.add('displaynone');
            document.getElementById('g'+numero).classList.remove('displaynone');
        }
    }

    retroceder = (numero) =>{
        document.getElementById('g'+(numero-1)).classList.remove('displaynone');
        document.getElementById('g'+numero).classList.add('displaynone');
    }

    Coger = () =>{
        const form = document.getElementsByClassName('form')[0]
        let arrayGuardar = [];         
        for (let i = 0; i < form.length; i++) {    
            arrayGuardar[i] = form[i].value;  
        }
        console.log(arrayGuardar);  
        let html = '';
        arrayGuardar.forEach(element=>{
            html = html + element + '<br>'
        });
        getElementById('pintar').innerHTML = html;
    }


    enviarurlf = () =>{
        console.log("se mete la url",document.getElementById('urltodo').value);
        document.getElementById('urlalmacen').innerHTML = document.getElementById('urltodo').value;
        console.log("urlalmacen",document.getElementById('urlalmacen').innerHTML);
        siguiente(2);
    }


    terminartodo = () =>{
        console.log("url abriendose",document.getElementById('urlalmacen').textContent);
        window.open(document.getElementById('urlalmacen').textContent);
    }
    
});










