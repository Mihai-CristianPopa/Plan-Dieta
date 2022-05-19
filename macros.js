function init(){
    const unObiect = document.querySelectorAll(".menu ul li");
    for (let i = 0; i<unObiect.length; i++){
        unObiect[i].id=i+1;
    }
    console.log(localStorage.getItem('preferinta'));
    /// deci localStorage-ul este pentru tot, asadar, daca bag in localStorage
    /// din input, pot sa am toata functia de cautare in scriptul asta
    /// totusi sunt curios daca am cum sa fac cu fetch sa imi trag toate
    /// datele din tabel si sa-mi fac generatorul pe pagina generatorului
    /// oricum inseamna ca momentan pot sa copiez functia de cautare aici si sa
    /// fie functionala

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

    document.addEventListener('keydown', handleKeydown);

    document.addEventListener('keyup', handleKeyup);

    document.addEventListener("keyup", increaseFontSize);

    document.addEventListener("keyup", decreaseFontSize);

    document.addEventListener('keydown', changeTextBackgroundColorMacros);

    const dropdown = document.querySelector('.dropdown');
    const header = document.querySelector('.header');
    dropdown.addEventListener('mouseover',()=>{       
        header.style.textIndent = "15px";
        header.style.transition='300ms textIndent ease-in-out';
    })
    dropdown.addEventListener('mouseout',()=>{       
        header.style.textIndent = "100px";
        header.style.transition='300ms textIndent ease-in-out';
    })
    // cu functia de mai sus voiam sa fac sa se miste
    // titlul din drumul meniului dropdown cand puneam mouse-ul
    // pe meniu

    cautarePreferinta();
    const tables = [...document.getElementsByTagName('table')];
    tables.forEach(el => el.addEventListener('click',alertMancare));
    modificareIndentareDinamica();
}


function handleKeydown(event) {
    if(parseInt(event.key)>0 && parseInt(event.key)<=3){
        const schimbamCuloare = document.getElementById(event.key);
        schimbamCuloare.style.backgroundColor = "red";
    }
  }
  
  function handleKeyup(event) {
    if(parseInt(event.key)>0 && parseInt(event.key)<=3){
        const schimbamCuloare = document.getElementById(event.key);
        schimbamCuloare.style.backgroundColor = "#3474e6";
    }
  }

  function increaseFontSize(event){
    if(event.keyCode===187){
        const body = document.querySelector('body');
        const styles = window.getComputedStyle(body);
        const generalFontSize = styles.getPropertyValue("font-size");
        let floatFontSize= parseFloat(generalFontSize);
        floatFontSize+=0.5;
        body.style.fontSize = floatFontSize + "px"; 
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
    }
  }



function changeTextBackgroundColorMacros(event){
    const content_mijloc = document.getElementsByTagName('table');
    const body = document.querySelector('body');
    const style = window.getComputedStyle(body);
    const initialBgColor= style.getPropertyValue('background-color');
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
                                    }//de la for
    }
}

function cautarePreferinta(){

    const tabel_proteine_nume = [...document.querySelectorAll
        ('#surse_proteine tr td:nth-of-type(1)')];
    console.log(tabel_proteine_nume[0].textContent);

    const tabel_proteine_grame = [...document.querySelectorAll
        ('#surse_proteine tr td:nth-of-type(2)')];
    console.log(tabel_proteine_grame[0].textContent);

    const tabel_proteine_kcal = [...document.querySelectorAll
        ('#surse_proteine tr td:nth-of-type(3)')];
    console.log(tabel_proteine_kcal[0].textContent);  
    
    const tabel_carbohidrati_nume = [...document.querySelectorAll
        ('#surse_carbohidrati tr td:nth-of-type(1)')];

    const tabel_carbohidrati_grame = [...document.querySelectorAll
        ('#surse_carbohidrati tr td:nth-of-type(2)')];

    const tabel_carbohidrati_kcal = [...document.querySelectorAll
        ('#surse_carbohidrati tr td:nth-of-type(3)')]; 
    
    const tabel_lipide_nume = [...document.querySelectorAll
        ('#surse_lipide tr td:nth-of-type(1)')];

    const tabel_lipide_grame = [...document.querySelectorAll
        ('#surse_lipide tr td:nth-of-type(2)')];

    const tabel_lipide_kcal = [...document.querySelectorAll
        ('#surse_lipide tr td:nth-of-type(3)')];
        console.log(tabel_proteine_nume.length);

    let preferinta = localStorage.getItem('preferinta') || "niciuna";
    console.log(preferinta);
    let kcal_total = parseInt(localStorage.getItem('kcal_total'))||
                    Math.floor(Math.random()*1400+1600);
    console.log(kcal_total);  
    
    const divSubTabele = document.createElement('div');
    const sectiuneTabele = document.querySelector('.content_macros')
    divSubTabele.id = 'subTabele';

    if(preferinta === "niciuna"){
        divSubTabele.textContent = `Neavand preferinte, astazi poti consuma ${kcal_total} de kilocalorii.`
        sectiuneTabele.appendChild(divSubTabele);
    }else{
                /// partea initiala in care scoatem datele din tabele


            const nume_prot=[];
            const nume_carb=[];
            const nume_lip =[];
            const kcalPerMasa = Math.floor(kcal_total/3);
            const modificareCantitate = Math.min(kcalPerMasa, 700);

            let kcal_ramase = 0;
            
            for (let i = 0; i<tabel_proteine_nume.length; i++){
                nume_prot.push(tabel_proteine_nume[i].textContent);
            }

            for (let i = 0; i<tabel_carbohidrati_nume.length; i++){
                nume_carb.push(tabel_carbohidrati_nume[i].textContent);
            }

            for (let i = 0; i<tabel_lipide_nume.length; i++){
                nume_lip.push(tabel_lipide_nume[i].textContent);
            }

            const indexPreferintaP = nume_prot.findIndex(element => element.includes(preferinta));
            const indexPreferintaC = nume_carb.findIndex(element => element.includes(preferinta));
            const indexPreferintaL = nume_lip.findIndex(element => element.includes(preferinta));
            
            /// aici caut pozitia in care se afla preferinta in tabel daca se afla 

            let gProteinePref = parseInt(tabel_proteine_grame[indexPreferintaP]?.textContent);
            let gCarbohidratiPref = parseInt(tabel_carbohidrati_grame[indexPreferintaC]?.textContent);
            let gLipidePref = parseInt(tabel_lipide_grame[indexPreferintaL]?.textContent);
            

            /// acum ma gandesc ca kcalPref e fie constant fie nu exista, in functie de index
            /// in sensul ca daca are indexul -1 kcalPref e undefined

            let kcal_total_prot = 0;
            let kcal_total_carb = 0;
            let kcal_total_lip = 0;
            let kcalPref = 0;
            /// aici sunt Kcal/100g de preferinta
            /// verific daca se afla in tabel
                if(indexPreferintaP!==-1){
                    kcalPref = parseInt(tabel_proteine_kcal[indexPreferintaP].textContent)
                    if(kcalPref !== modificareCantitate){
                        /// aici ce fac e sa verific daca caloriile preferintei depasesc caloriile
                        // puse la bataier pentru fiecare masa in parte si daca asta se intampla
                        // modific gramajul de preferinta astfel incat kcaloriile sa fie egale
                        // cu cele ale unei mese
                        // considerand faptul ca am luat kcal/100g nu cred ca o sa se aplice cam niciodata
                        // considerand si pragul minim de input de 1600
                        // si am modificat si gramajul de proteine pastrand rapoartele
                        gProteinePref = gProteinePref*(modificareCantitate/kcalPref);
                        kcalPref = modificareCantitate;    
                    }
                    kcal_total_prot = Math.floor(4 * gProteinePref);    
                }
                else{
                    kcal_total_prot = Math.floor(Math.random()*25)+2;
                }
                
                if(indexPreferintaC!==-1){
                    kcalPref = parseInt(tabel_carbohidrati_kcal[indexPreferintaC].textContent)
                    if(kcalPref !== modificareCantitate){
                        gCarbohidratiPref = gCarbohidratiPref*(modificareCantitate/kcalPref);
                        kcalPref = modificareCantitate;    
                    }
                    kcal_total_carb = Math.floor(4 * gCarbohidratiPref);    
                }
                else{
                    kcal_total_carb = Math.floor(Math.random()*25) + 2;
                }

                if(indexPreferintaL!==-1){
                    kcalPref = parseInt(tabel_lipide_kcal[indexPreferintaL].textContent)
                    if(kcalPref !== modificareCantitate){
                        gLipidePref = gLipidePref*(modificareCantitate/kcalPref);
                        kcalPref = modificareCantitate;    
                    }
                    kcal_total_lip = Math.floor(9 * gLipidePref);    
                }
                else{
                    kcal_total_lip = Math.floor(Math.random()*100) + 5;
                }

                kcal_ramase = Math.floor(kcal_total - kcalPref);
            /// apare problema cu gramajul, ca implicit se considera ca mananca 100 de grame din preferinta
            /// as putea sa adaug regula cu daca 100 de grame nu depasesc 1/3 din kcal total
            /// atunci sa fie asa altfel sa modific gramajul    
            console.log(kcal_total_prot);
            console.log(kcal_total_carb);
            console.log(kcal_total_lip);
            console.log(kcal_ramase);    

            // acum ar trebui sa fac o cautare similara pentru fiecare tabel in parte pentru a verifica
            // daca nu cumva preferinta se gaseste si in alt tabel si de obicei se cam gasesc
            // apoi o sa vreau sa afisez rezultatul pe pagina asta de macros sub tabele pentru ca momentan
            // de atata sunt in stare, o sa fac un div .rezultat in care sa adaug ce am obtinut pana acum
            
            // am rezultatele preferintei hai sa afisez intr-un div sub tabel
            
            divSubTabele.textContent = `Astazi daca vei consuma ${kcalPref} kcal de ${preferinta},
            vei fi consumat ${kcal_total_prot} kcal proteine,  ${kcal_total_carb} kcal carbohidrati,  ${kcal_total_lip} kcal lipide
            si caloriile ramase pentru celelalte mese sunt in numar de ${kcal_ramase}.`;
            sectiuneTabele.appendChild(divSubTabele);
            
            // nu stiu de ce nu reusesc sa ii dau margine dinamic, o sa incerc in css
            // mi-am dat seama care era problema, nu gasea elementele de stil,
            // pentru ca alea sunt puse pe tabel, nu pe .content_macros
            if (indexPreferintaP === -1 && indexPreferintaC == -1 && indexPreferintaL == -1){
                divSubTabele.textContent = `Din pacate ${preferinta}, nu este in tabel, incercam
                sa ne crestem baza de date.`;
                sectiuneTabele.appendChild(divSubTabele);
            }    

            }    

}
function alertMancare(event){
    const tabel = event.currentTarget;
    const patratica = event.target;
    const patraticaUrmatoare =patratica.nextElementSibbling;
    // console.log(patratica);
    // console.log(patraticaUrmatoare)
    // console.log(tabel);
    const titlu_tabel = tabel.querySelector('th:nth-of-type(1)');
    console.log(titlu_tabel.textContent);
    if(event.target.tagName === 'TH'){
        alert('Ai apasat pe zona informativa a tabelului');
        event.stopPropagation();
        // aici daca nu foloseam stopPropagation s-ar fi pornit si celalalt alert
    }
    else{    
    alert(`Ai apasat pe ${patratica.textContent} din tabelul ${titlu_tabel.textContent}`);
    }

    /// acum ce vreau sa mai fac e sa afisez toate informatiile de pe un rand, indiferent, pe care dintre
    /// elemente a apasat
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

onload = init;