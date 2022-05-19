///Marcare pagina activa. Se va marca in meniu pagina curenta (pe care se afla utilizatorul) prin intermediul javascript astfel: se va prelua din location linkul paginii curente si se va cauta in meniu. Pentru linkul gasit in meniu se va schimba stilizarea, adaugandu-i-se clasa "curent" (care de exemplu ii schimba culoarea de background)


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
