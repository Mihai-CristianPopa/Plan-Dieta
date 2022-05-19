// import topnav_active_page from "./topnav_active_page";
function init(){

    const form = document.querySelector('#aplicatiaInitiala');
    form.addEventListener('submit', handleSubmit);

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

function handleSubmit(event){
    event.preventDefault();
    // fara preventDefault() pagina se comporta dubios dupa submit
    
    const input1 = document.querySelector('#input1').value;
    const input2 = document.querySelector('#input2').value;
    const div = document.getElementById('result');
    const form = document.querySelector('#aplicatiaInitiala');
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
    
    // const kcal  = document.querySelector('.nrKcal');
    // kcal.textContent = `Astazi vei consuma ${input2} Kilocalorii.`;        
    // const masa1 = document.querySelector('.masa1');
    // masa1.textContent = `Masa 1: ${input1}  `;
    
    // const dieta = document.createElement('div');
    // dieta.className = 'deSters';
    // dieta.textContent = `Preferinta selectate este ${input1}, iar numarul de kcal pentru azi este de ${input2}`;
    // const cg = document.querySelector('.content_generator');
    // cg.appendChild(dieta);



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
            

}

// function cautarePreferinta(){
//     let preferinta = localStorage.getItem('preferinta') || "niciuna";
//     console.log(preferinta);
//     let kcal_total = parseInt(localStorage.getItem('kcal_total'))||
//                     Math.floor(Math.random()*1400+1600);
//     console.log(kcal_total);

//     const tabel_proteine_nume = [...document.querySelectorAll
//         ('#surse_proteine tr td:nth-of-type(1)')];
//     console.log(tabel_proteine_nume[0].textContent);

//     const tabel_proteine_grame = [...document.querySelectorAll
//         ('#surse_proteine tr td:nth-of-type(2)')];
//     console.log(tabel_proteine_grame[0].textContent);

//     const tabel_proteine_kcal = [...document.querySelectorAll
//         ('#surse_proteine tr td:nth-of-type(3)')];
//     console.log(tabel_proteine_kcal[0].textContent);  
    
//     const tabel_carbohidrati_nume = [...document.querySelectorAll
//         ('#surse_carbohidrati tr td:nth-of-type(1)')];

//     const tabel_carbohidrati_grame = [...document.querySelectorAll
//         ('#surse_carbohidrati tr td:nth-of-type(2)')];

//     const tabel_carbohidrati_kcal = [...document.querySelectorAll
//         ('#surse_carbohidrati tr td:nth-of-type(3)')]; 
    
//     const tabel_lipide_nume = [...document.querySelectorAll
//         ('#surse_lipide tr td:nth-of-type(1)')];

//     const tabel_lipide_grame = [...document.querySelectorAll
//         ('#surse_lipide tr td:nth-of-type(2)')];

//     const tabel_lipide_kcal = [...document.querySelectorAll
//         ('#surse_lipide tr td:nth-of-type(3)')];
//         console.log(tabel_proteine_nume.length);

//         /// partea initiala in care scoatem datele din tabele


//     const nume_prot=[];
//     const nume_carb=[];
//     const nume_lip =[];
//     const kcalPerMasa = kcal_total/3;

//     let kcal_total_prot = 0;
//     let kcal_total_carb = 0;
//     let kcal_total_lip = 0;

//     let kcal_ramase = 0;
    
//     for (let i = 0; i<tabel_proteine_nume.length; i++){
//         nume_prot.push(tabel_proteine_nume[i].textContent);
//     }

//     for (let i = 0; i<tabel_carbohidrati_nume.length; i++){
//         nume_carb.push(tabel_carbohidrati_nume[i].textContent);
//     }

//     for (let i = 0; i<tabel_lipide_nume.length; i++){
//         nume_lip.push(tabel_lipide_nume[i].textContent);
//     }

//     const indexPreferintaP = nume_prot.findIndex(element => element.includes(preferinta));
//     const indexPreferintaC = nume_carb.findIndex(element => element.includes(preferinta));
//     const indexPreferintaL = nume_lip.findIndex(element => element.includes(preferinta));
    
//     /// aici caut pozitia in care se afla preferinta in tabel daca se afla 

//     let gProteinePref = parseInt(tabel_proteine_grame[indexPreferintaP].textContent);
//     let gCarbohidratiPref = parseInt(tabel_carbohidrati_grame[indexPreferintaC].textContent);
//     let gLipidePref = parseInt(tabel_lipide_grame[indexPreferintaL].textContent);
    

//     /// acum ma gandesc ca kcalPref e fie constant fie nu exista, in functie de index
//     /// in sensul ca daca are indexul -1 kcalPref e undefined



//     /// aici sunt Kcal/100g de preferinta
//     /// verific daca se afla in tabel
//         if(indexPreferintaP!==-1){
//             let kcalPref = parseInt(tabel_proteine_kcal[indexPreferintaP].textContent)
//             if(kcalPref >= kcalPerMasa){
//                 /// aici ce fac e sa verific daca caloriile preferintei depasesc caloriile
//                 // puse la bataier pentru fiecare masa in parte si daca asta se intampla
//                 // modific gramajul de preferinta astfel incat kcaloriile sa fie egale
//                 // cu cele ale unei mese
//                 // considerand faptul ca am luat kcal/100g nu cred ca o sa se aplice cam niciodata
//                 // considerand si pragul minim de input de 1600
//                 // si am modificat si gramajul de proteine pastrand rapoartele
//                 gProteinePref = gProteinePref*(kcalPerMasa/kcalPref);
//                 kcalPref = kcalPerMasa;    
//             }
//             kcal_total_prot = Math.floor(4 * gProteinePref);    
//         }
//         if(indexPreferintaC!==-1){
//             kcalPref = parseInt(tabel_carbohidrati_kcal[indexPreferintaC].textContent)
//             if(kcalPref >= kcalPerMasa){
//                 gCarbohidratiPref = gCarbohidratiPref*(kcalPerMasa/kcalPref);
//                 kcalPref = kcalPerMasa;    
//             }
//             kcal_total_carb = Math.floor(4 * gCarbohidratiPref);    
//         }
//         if(indexPreferintaL!==-1){
//             kcalPref = parseInt(tabel_lipide_kcal[indexPreferintaL].textContent)
//             if(kcalPref >= kcalPerMasa){
//                 gLipidePref = gLipidePref*(kcalPerMasa/kcalPref);
//                 kcalPref = kcalPerMasa;    
//             }
//             kcal_total_lip = Math.floor(9 * gLipidePref);    
//         }


//         kcal_ramase = Math.floor(kcal_total - kcalPref);
//     /// apare problema cu gramajul, ca implicit se considera ca mananca 100 de grame din preferinta
//     /// as putea sa adaug regula cu daca 100 de grame nu depasesc 1/3 din kcal total
//     /// atunci sa fie asa altfel sa modific gramajul    
//     console.log(kcal_total_prot);
//     console.log(kcal_total_carb);
//     console.log(kcal_total_lip);
//     console.log(kcal_ramase);    

//     // acum ar trebui sa fac o cautare similara pentru fiecare tabel in parte pentru a verifica
//     // daca nu cumva preferinta se gaseste si in alt tabel si de obicei se cam gasesc
//     // apoi o sa vreau sa afisez rezultatul pe pagina asta de macros sub tabele pentru ca momentan
//     // de atata sunt in stare, o sa fac un div .rezultat in care sa adaug ce am obtinut pana acum
    
//     // am rezultatele preferintei hai sa afisez intr-un div sub tabel
//     const divSubTabele = document.createElement('div');
//     const sectiuneTabele = document.querySelector('.content_macros')
//     // const styles = window.getComputedStyle(sectiuneTabele);
//     // const marginLeft = styles.getPropertyValue('margin-left')
//     // divSubTabele.style.marginLeft=marginLeft;
//     divSubTabele.id = 'subTabele';
//     divSubTabele.textContent = `Astazi daca vei consuma ${kcalPref} kcal de ${preferinta},
//     vei fi consumat ${kcal_total_prot} kcal proteine,  ${kcal_total_carb} kcal carbohidrati,  ${kcal_total_lip} kcal lipide
//     si caloriile ramase pentru celelalte mese sunt in numar de ${kcal_ramase}`;
//     sectiuneTabele.appendChild(divSubTabele);
    
//     // nu stiu de ce nu reusesc sa ii dau margine dinamic, o sa incerc in css
//     // mi-am dat seama care era problema, nu gasea elementele de stil,
//     // pentru ca alea sunt puse pe tabel, nu pe .content_macros


// }

window.onload =  init;