// function init() {
//     const form = document.querySelector('form');
//     // ne referim la formular
//     form.addEventListener('submit', handleSubmit);
//     const main = document.querySelector('main');
//     // main.addEventListener('click', handleClick);
//     // manenvram submit-ul
//   }



// function handleSubmit(event){
//     event.preventDefault();
//     const preferinta = document.querySelector('[name="preferinta"]').value;
//     console.log(preferinta);
//     const Kcal_total = document.querySelector('[name="Kcal_total"]').value;
//     const p = document.createElement('p');
//     // p.textContent = `Preferinta aleasa este ${preferinta}, iar numarul total de calorii
//     // pentru dieta de o zi este ${Kcal_total} `;
//     p.textContent = "SA mearga ceva";
//     const ptAppend = document.querySelector('.content_generator');
//     document.body.append(p);
    
// }

// function handleClick(event){
//     main.style.backgroundColour="red";
// }
// onload = init;  
// function init(){
//     // let lista = document.getElementsByTagName('a');
//     // let arr = [...lista];
//     // console.log(arr[0]);
//     let val = document.getElementsByClassName('header');
//     let m = val.textContent;
//     console.log(m);
// }
// onload=init();

// function init() {
//     const button = document.getElementById('touchButton');
//     button.addEventListener ('click', handleCLick);
//     const obosit = document.getElementById('obo');
//     obosit.addEventListener ('contextmenu', handleContextMenu);
//     const listElements = document.getElementsByTagName("a");
//     // iti faci o lista de elemente cu ce gasesti in li-uri
//     const firstElement = listElements[0].textContent;
//     console.log(firstElement);
//     // p = document.createElement('p');
//     for (let i = 0 ; i<listElements.length; i++){
        
//         obosit.textContent = obosit.textContent + " , "+ listElements[i].textContent;
//         console.log(obosit); 
//     }
//     // document.body.append(p);
//   }
 

// function handleCLick(event)  {
//     // preluăm și modificăm conținutul HTML unde stocăm numărul de apăsări
//     const touchCountElement = document.getElementById('touchCount');
//     let count = parseInt(touchCountElement.innerHTML);
//     touchCountElement.innerHTML = count + 1;
//   };
// function handleContextMenu(event){
//     const obosit = document.getElementById('obo');
//     obosit.innerHTML = "MUIE TALPAN";
//     // obosit.classList= "header";
// }

//   window.onload=init; 

function init(){
    const header = document.querySelector(".header");
    header.style.color = "gold";
    header.addEventListener("click", ()=>{
        header.style.backgroundColor = "red";
        header.style.color = "blue";
        // header.style.transitionProperty='background-color, color';
        // header.style.tranisitionDuration='1000ms';
        header.style.transition='300ms background-color ease-in-out, 300ms color ease-in-out';
    });
    // document.addEventListener("keyup", (e)=>{
        // if (Number(e.key)==NaN) return;
        // asta nu merse
        // if (parseInt(e.key)==NaN) return;
        // nici asta nu merse, desi la Tema 6.1 merge, ma gandesc ca e de la modul de generare al functiei
        // ma chinui sa fac o verificare daca tasta apasata e cifra atunci sa se intample ceva
    //     document.addEventListener("keyup", function(e){
    //     if (parseInt(e.key)==NaN) return;
    //     {header.style.color = "white";
    //     header.style.backgroundColor = "#254de4";}
    // })
    // Nici asa nu merse mai incercam
        // document.addEventListener("keyup", handleKeyup);

    const unObiect = document.querySelectorAll(".menu ul li");
    // console.log(unObiect);
    // console.log(unObiect[0]);
    for (let i = 0; i<unObiect.length; i++)
    {unObiect[i].id=i+1;
    // console.log(unObiect[i].id);
    }
    document.addEventListener('keydown', handleKeydown);
    // // luam in considerare evenimentul cand tasta este apasata
    document.addEventListener('keyup', handleKeyup);
    // // si cand tasta nu mai este apasata
    document.addEventListener("keyup", increaseFontSize);
    document.addEventListener("keyup", decreaseFontSize);
    document.addEventListener("contextmenu", ()=>{
            header.style.color = "white";
            header.style.backgroundColor = "#254de4";
    });

    // document.addEventListener("keydown", preventDefaultAlt);
    // document.addEventListener("keydown", e => {
    //     if (e.key === "Alt") {
    //       e.preventDefault();
    //     }
    // })
    /// Daca ma joc cu prevent default-ul peste Alt atunci se anuleaza toate controalele
    /// default precum ctrl+r si nu mi-am dat seama cum sa rezolv asta



    document.addEventListener('keydown', changeTextBackgroundColor);
    topnav_active_page();
    swap();
    modificareIndentareDinamica();

}

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



// function handleKeyup(event){
//     if (parseInt(event.key) == NaN) return;

//     header.style.color = "white";
//     header.style.backgroundColor = "#254de4";
// }
// acum nu mai merge deloc


function handleKeydown(event) {
    // if (parseInt(event.key) == NaN)
    // console.log(parseInt(event.key))
    if(parseInt(event.key)>0 && parseInt(event.key)<=4)
    {
        const schimbamCuloare = document.getElementById(event.key);
        // console.log(schimbamCuloare);
        schimbamCuloare.style.backgroundColor = "red";
        // const pressed = document.querySelector('pressed');
        // pressed.style.backgroundColor="red";
    }
    // daca tasta apasata nu e numar ne oprim
    //   return;
    // const box = document.getElementById(event.key);
    // // luam elementul cu id-ul egal cu tasta apasata
    // box.classList.add('pressed');
    // // il bagam in clasa 'pressed' pe care o editam in css
  
  }
  
  function handleKeyup(event) {
    if(parseInt(event.key)>0 && parseInt(event.key)<=4){
        const schimbamCuloare = document.getElementById(event.key);
        schimbamCuloare.style.backgroundColor = "#3474e6";
    }
    // console.log(parseInt(event.key))
    // if (parseInt(event.key) == NaN)
    //   return;
    // const box = document.getElementById(event.key);
    // box.classList.remove('pressed');
    // cand se ia degetul de pe tasta o eliminam din clasa pressed
  }
//   const body = document.querySelector('body .header');
//   const styles = getComputedStyle(body);
//   var headerFontSize = styles.getPropertyValue('fontSize');
// o incercare nereusita de a salva font-sizeul header-ului
// intr-o variabila pentru a il refolosi mai tarziu
  function increaseFontSize(event){
    //   console.log(event.keyCode);
      // keyCode iti da numarul in "pseudoAscii"
      // key <==> code iti da fix ce scrie pe tastatura
    if(event.keyCode===187){
        const body = document.querySelector('body');
        const styles = window.getComputedStyle(body);
        const generalFontSize = styles.getPropertyValue("font-size");
        let floatFontSize= parseFloat(generalFontSize);
        floatFontSize+=0.5;
        body.style.fontSize = floatFontSize + "px"; 
        // const body = document.querySelector('body .header');
        // // body.style.fontSize = parseInt(document.body.style.fontSize) + 2 + "px";
        // body.style.fontSize = 100 + "px";
        // body.style.lineheight = 1.5; 
    }
  }

  function decreaseFontSize(event){
    if(event.key== "-"){
        const body = document.querySelector('body');
        const styles = window.getComputedStyle(body);
        const generalFontSize = styles.getPropertyValue("font-size");
        let floatFontSize= parseFloat(generalFontSize);
        floatFontSize-=0.5;
        body.style.fontSize = floatFontSize + "px"; 
        // console.log(generalFontSize);
        // console.log(styles);
        // body.style.fontSize = 30 + "px";
    }
  }
// increaseFontSize() si decreaseFontSize() functioneaza atat pentru =-
// cat si pentru +_
// interesant deci nu trebuie tinut apasat shiftul ca sa functioneze
// function preventDefaultAlt(e)
// {
//     if (e.key === "Alt") {
//       e.preventDefault();
//     }
// }

function changeTextBackgroundColor(event){
    // event.preventDefault();
    const content_mijloc = document.getElementsByClassName('content_mijloc');
    const body = document.querySelector('body');
    const style = window.getComputedStyle(body);
    const initialBgColor= style.getPropertyValue('background-color');
    const bolder = document.querySelector('#bolder');
    console.log(initialBgColor);
    // const initialTextColor = style.getPropertyValue('color');
    console.log(event.keyCode);
    if (event.key === 'f'){
        document.onkeydown= (ee)=>{
            if(ee.key=== 'u'){
                document.onkeydown= (ee)=>{
                    if(ee.key=== 'n'){
                        document.onkeydown= (ee)=>{
                            if(ee.key=== 'd'){
                                document.onkeydown= (ee)=>{
                                    if(ee.key=== 'a'){
                                        document.onkeydown= (ee)=>{
                                            if(ee.key=== 'l'){
                            for (let i = 0; i < content_mijloc.length; i++){
                                content_mijloc[i].style.backgroundColor='rgb(30, 30, 125)';
                                content_mijloc[i].style.color='white';
                                content_mijloc[i].style.borderRadius='10px';
                                bolder.style.color='white' 
                                                        }//de la for
                        }//if6                                            
                        }//doc5
                    }//if5
                    }//doc4
                }//if4
                }//doc3                                
            }//if3
            }//doc2
        }//if2
        }//doc1
    }//if1
    if(event.key === 'Backspace'){
        for (let i = 0; i < content_mijloc.length; i++){
            content_mijloc[i].style.backgroundColor=initialBgColor;
            content_mijloc[i].style.color='black';
            bolder.style.color='black'
                                    }//de la for
    }
}



function swap(){
    let i = 0;
    const deSchimbat = document.getElementById('swap');
    deSchimbat.dataset.text = deSchimbat.textContent;
    
    let intervalId = setInterval(()=>{
    // console.log(deSchimbat.innerHTML);
    const img = document.createElement('img');    
    const array = ['imagini/swap1.jpg', 'imagini/swap2.jpg', 'imagini/swap3.jpg']
    // let random = Math.floor(Math.random*2);
    // console.log(array.random);
    img.src = array[i];
    deSchimbat.textContent = "";
    deSchimbat.appendChild(img);
    i++;
    if(i>3){
        deSchimbat.removeChild(img);
        deSchimbat.innerHTML = deSchimbat.dataset.text;
        clearInterval(intervalId);
    }
}, 3000)

}

function modificareIndentareDinamica(){
    const normal = document.querySelector('.topnav a:nth-of-type(1)');
    const styles = window.getComputedStyle(normal);
    console.log(styles.getPropertyValue('font-size'));
    const marimeFont = styles.getPropertyValue('font-size');

    const tp = document.querySelector('.topnav .dropbtn');
    // const style = window.getComputedStyle(tp);
    // console.log(style.getPropertyValue('font-size'));

    

    // const header = document.querySelector('.header');
    // console.log(normal.getBoundingClientRect());

    let rect = normal.getBoundingClientRect();
    let latime = rect['width'];
    // console.log(latime);
    let intervalId = setInterval(()=>{
    if(parseInt(latime) <= 800){
    // console.log(normal.textContent);
    let rect = normal.getBoundingClientRect();
    let latime = rect['width'];
    // const normalPeLitere =[...normal.textContent];
    const tpPeLitere = [...tp.textContent];
    // console.log(normalPeLitere[0]);

    // const lungimeTextNormal = normalPeLitere.length * Math.floor(Math.sqrt(parseInt(marimeFont)));
    // const lungimeTextNormal = normalPeLitere.length * parseInt(marimeFont);
    // console.log(lungimeTextNormal);

    const lungimeTp = tpPeLitere.length*(parseInt(marimeFont));
    const marimeIndentare = latime - lungimeTp;
    // asta e distanta care trebuie impartita la doi pentru ca ne trebuie margini in ambele parti
    console.log(marimeIndentare);
    tp.style.textIndent=`${marimeIndentare/2 + 20}px`;
    }
    else{
        clearInterval(intervalId);
    }},250)



    // console.log(tp.getBoundingClientRect());
    // console.log(header.getBoundingClientRect());
    /// vreau sa fac pentru media query o functie care-mi indenteaza
    /// linkul din meniul dropdown, scazand latimea lui din latimea headerului
    /// si apoi indentant cu jumatate din valoarea obtinuta
}


window.onload = init;