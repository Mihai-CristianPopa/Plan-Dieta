// import topnav_active_page from "./topnav_active_page";
function init(){

    document.addEventListener('keypress',(e)=>{
        if(e.code==='KeyF'){
        const form = document.querySelector('#aplicatiaInitiala');
        form.addEventListener('submit', handleSubmit);
        }
        else {
            return;
        }
    })


    // const form = document.querySelector('#aplicatiaInitiala');
    // form.addEventListener('submit', handleSubmit);

    // document.addEventListener('keydown', handleKeyDown);
    // ajax();       
    topnav_active_page();
    // cautarePreferinta();
                 

}


// function ajax(){
//     const getTxt = document.getElementById('getTxt');

//     const content = document.getElementById('ajax');

//     const xhr = new XMLHttpRequest();

//     getTxt.addEventListener('click', ()=>{

//             xhr.addEventListener('readystatechange', ()=>{
//                 content.innerHTML = this.responseText;
//             });
//             xhr.open('GET', 'despre_proiect.html',true);
//             xhr.send();
//     });

// }

function topnav_active_page(){
    const link = location.href;
    console.log(link);
    const lista = document.querySelectorAll('.topnav a');
    // console.log(lista[0].href);
    // console.log(lista[0].innerHTML);
    for (let i = 0; i<lista.length; i++){
        if(lista[i].href === link){
            lista[i].classList.add('active');
        }
    }
}

function regexCheck(input, regex){
    // console.log(regex.test(input));
    //rejex1.test(input1) &&
    return  regex.test(input)
}

function handleSubmit(event){
    event.preventDefault();
    // fara preventDefault() pagina se comporta dubios dupa submit
    
    const input1 = document.querySelector('#input1').value;
    const input2 = document.querySelector('#input2').value;
    const div = document.getElementById('result');
    const form = document.querySelector('#aplicatiaInitiala');
    
    const regex1 = /^([^0-9]*)$/;
    // const regex2 = /\b\d{4}\b/g;
    const regex2 = /^\b\d{4}\b$/;
    if (regexCheck(input1, regex1) && regexCheck(input2, regex2)){// tot ce e sub asta
    // console.log(3);
    form.style.visibility='hidden';
    div.style.color = 'white';
    div.style.fontWeight = '500';
    div.style.fontSize = '16px';
    div.textContent = `${input1} ${input2}`;

    const button = document.createElement('button');
    button.textContent='Sterge preferinta';
    button.style.marginLeft = '15px';
    button.addEventListener('click', ()=>{
        localStorage.clear();
        div.textContent = "";
    })

    localStorage.setItem('preferinta', input1);
    localStorage.setItem('kcal_total', input2);

    let p = document.createElement('p');
    p.innerHTML = "Vrei sa stergi acest rezultat?";
    let divv = document.createElement('div');
    let checkbox1 = document.createElement('input');
    checkbox1.setAttribute('type', 'checkbox');
    checkbox1.id = 'c1';
    let label1  = document.createElement('label');
    label1.htmlFor =  "c1" ;
    label1.innerHTML = "Yes";
    let divvv = document.createElement('div');
    let checkbox2 = document.createElement('input');
    checkbox2.setAttribute('type', 'checkbox');
    checkbox2.id = 'c1';
    let label2  = document.createElement('label');
    label2.htmlFor =  "c2" ;
    label2.innerHTML = "No";

    let p2 = document.createElement('p');
    p2.innerHTML = "Rezultatul implicit este ca o sa se stearga, asadar trebuie sa iei o decizie!";

    setTimeout(()=>{
        div.appendChild(p);
        divv.appendChild(checkbox1);
        divv.appendChild(label1);
        divvv.appendChild(checkbox2);
        divvv.appendChild(label2);
        div.appendChild(divv);
        div.appendChild(divvv);
            }, 5000);
            // am vrut sa astept cinci secunde pana cand sa apara chestionarul pe ecran
            // am vrut sa am o verificare dupa inca cinci secunde, daca utilizatorul a bifat ceva
            // si in caz contrar peste alte cinci secunde sa anunt ca daca nu bifeaza nimic, 
            // textul o sa se stearga


        setTimeout(()=>{
            if(checkbox1.checked === true || checkbox2.checked === true)
           { 
            label1.innerHTML = "Da";
            label2.innerHTML = "Nu";
            }
            else{
                setTimeout(()=>{
                div.appendChild(p2);
                },100);
                            } // de la else
                        }, 12900);

                        // pana aici functioneaza cum vreau, acum, reverific dupa anuntul ca implicit
                        // rezultatul se sterge, daca utilizatorul a bifat ceva
        setTimeout(()=>{
        if (checkbox2.checked === true && checkbox1.checked === false){
            div.textContent = `${input1} ${input2}`;
            div.style.color = 'gold';
            div.style.fontSize = 30 + 'px';
            div.style.fontWeight= 'bold';
            div.appendChild(button);
            form.style.visibility = 'visible';
        }
        else{
                        setTimeout(()=>{    
                            div.textContent = " ";
                            form.style.visibility = 'visible';
                            }, 100);
                                        } // de la else
            },20000); 
            /// as mai vrea sa mai adaug functiei asteia ca rezultatul sa ramana si dupa refresh
            /// unless i press a button
            /// ar trebui sa adaug butonul in html
            /// sa bag un event nou
            /// sa adaug chestie cu clear de localStorage
            ///
        } else{
            alert('Preferinta culinara trebuie sa fie compusa doar din litere, iar numarul de kcal trebuie sa fie un numar de 4 cifre') 
            return;}         

}



window.onload =  init;