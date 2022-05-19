// // Sa se afiseze titlul paginii printr-o animatie, in felul urmator.
// //  La fiecare 100 milisecunde se fac vizibile doua litere ale titlului:
// //   intai prima si ultima, apoi a doua si penultima,
// //    apoi a treia si antepenultima, continuand pana in mijloc.


// function init(){
//     const title = document.querySelector('.header section');
//     // const goodTitle = document.querySelector('.header');
//     // console.log(title.textContent.length);
//     const titlu_pe_litere = Array.from(title.textContent);
//     // console.log(titlu_pe_litere);
//     // title.textContent.style.visibility='hidden';
//     // title.style.visibility ='hidden';
//     // const results = titlu_pe_litere.filter(element => {
//     //     return element !== ' ' || element!=='\n';
//     //   });
//     //   console.log(results);
//     title.style.visibility='hidden';
//     // title.textContent = ''; 
//     let i=0;
//     let intervalId = setInterval(()=>{
//         titlu_pe_litere.slice(i,i+2).forEach((miniArray)=>{
//             // slice-ul include pozitia de start, dar nu
//             // si pozitia de final deci o sa fie aceeasi parcurgere
//             // 0, 1, 2 ca la MathFloor(i/3)
//             // aici element nu se mai refera la un singur patratel ci
//             // element este [0, 1, 2] ...
//             // n-o sa-l mai cheme element ca nu mi se pare potrivit
//             title.append(miniArray);
//         })
//         i+=2;
//     // intervalID = setInterval(()=>{
//         // let i = 0;
        

//         // i+=2
//         if (i>=title.textContent.length-1) {
//             clearInterval(intervalId);
//             // aici se anuleaza intervalul cu numele din paranteza
//         }
// }, 100);
// }
// onload = init; 


// function init(){

//     const spatiu_lista = document.getElementById('lista');
//     console.log(spatiu_lista.textContent);
//     const main = document.querySelector('main');
//     document.addEventListener('keyup', ()=>{
//         const elemente = document.querySelectorAll('#lista li')
//         const elemente2 = [...document.querySelectorAll('#lista li')]
        
        // const x = elemente2.reverse();
        // elemente[0].textContent = x[0].textContent;
        // elemente[1].textContent = x[1].textContent;
        // elemente[2].textContent = x[2].textContent;
        // elemente[3].textContent = x[3].textContent;
        // elemente.forEach((element,index) => 
        // element[index].textContent = element[(index+1)%2].textContent);
        // for(let i = 0; i<elemente2.length; i++){
            
        //     // elemente[i].textContent = elemente2[i].textContent;
        // }

    // });
    // for(let i = 0; i<spatiu_lista.length; i++){
    // spatiu_lista[i].addEventListener('dblclick', reverseList);
    // }
// }

// function reverseList(event){
//     const elemente_lista = document.querySelectorAll('ul li');
//     console.log(elemente_lista);
// }

// onload = init;

// onload = init();


function init(){
    topnav_active_page();
    // const footer = document.querySelector('.footer_bbl');
    // footer.addEventListener('click',()=> {toggle =!toggle});
    addTimeInFooter();
    modificareIndentareDinamica();
    ravaseColorate();
    const lista = document.getElementById('lista');

    console.log(lista);
    lista.addEventListener('dblclick', ()=>{
        const styles = getComputedStyle(lista);
        const directie = styles.getPropertyValue('flex-direction');
        if(directie === 'column'){
        lista.style.flexDirection = 'column-reverse';
        }
        else if(directie === 'column-reverse'){
            lista.style.flexDirection = 'column';
        }
    });
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
function addTimeInFooter(){
    const footer = document.querySelector('.footer_bbl');
    // footer.style.textAlign = 'right';
    footer.style.paddingRight = '20px';
    footer.style.fontSize = '0.85em';
        setTimeout(()=>{setInterval(()=>{
        const date = new Date();    
        const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];   
        footer.textContent =`${hour} : ${minutes} : ${seconds} `;
        },1000);
    },5000);
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
    // console.log(marimeIndentare);
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


function ravaseColorate(){
    const vector = ["O sa treci toate examenele!", "O sa ai o vara frumoasa!", "O sa te ciupeasca un tantar!", "O sa termini proietul"]
    const culoriText = ['rgb(195, 245, 229)', 'rgb(252, 255, 151) ', 'rgb(245, 193, 246) ', 'rgb(170, 153, 162) ', 'white' ]
    const result = document.querySelector('.footer_bbl');
    console.log(vector[Math.floor(Math.random()*3)]);
    result.textContent=vector[Math.floor(Math.random()*3)];
    result.style.color=culoriText[Math.floor(Math.random()*4)];
 }

onload = init;
