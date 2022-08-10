//Navigation
   //Nav Start
let inputfocus = document.querySelector('.nav_start input');
let iconSearch = document.querySelector('.nav_start i');
let svgIcon = document.querySelector('.nav_start img');
let rechercheRecent = document.querySelector('.recherche_recent');
let contentRecherche = document.querySelector('.content_recherche');
let multiple = document.querySelectorAll('.recherche_recent .multiple');

inputfocus.onclick = function() {
   rechercheRecent.style.display = 'block';
   iconSearch.style.display = 'none';
   inputfocus.style.paddingLeft = '20px';
   svgIcon.src = "../imgs/nav_pic/arrow.png";
   svgIcon.style.backgroundColor = '#fff';
   
   }

document.addEventListener('click', (e) => {
   if(e.target !== inputfocus && e.target.tagName !== "SPAN") { 
      rechercheRecent.style.display = 'none';
      iconSearch.style.display = 'block';
      inputfocus.style.paddingLeft = '40px';
      svgIcon.src = "../imgs/nav_pic/facebook.svg";
      svgIcon.style.backgroundColor = 'transparent';
   }
})

multiple.forEach(span => {
    span.addEventListener('click', (e) => {
        e.target.parentElement.remove();

        if(contentRecherche.children.length === 0) {
            contentRecherche.remove();
            rechercheRecent.innerHTML = "";
            let emptyMsg = document.createElement('p');
                emptyMsg.className = 'empty_msg';
            let emptyMsgText = document.createTextNode('Aucune recherche récente');
            emptyMsg.appendChild(emptyMsgText);
            rechercheRecent.appendChild(emptyMsg);  
        }
    }) 
})

//Up Down Liste
let listes = document.querySelector('.liste');
let listeEnd  = document.querySelector('.liste_six .up_down');
let upDownImg = document.querySelector('.liste_six .up_down img');
let listeTwo = document.querySelector('.liste li .liste_two');
let listSix = document.querySelector('.liste .liste_six');

listeEnd.addEventListener('click', (e) => {
    listeTwo.classList.toggle('show_liste');
    if(listeTwo.classList.contains('show_liste')) {
       listeEnd.style.position = 'relative';
       listeEnd.style.bottom = '0px';
       
       upDownImg.src = '../imgs/content_pic/up.png';
       listSix.style.marginTop = '-20px';
       
    } else {
         listSix.style.marginTop = '0px';
        upDownImg.src = '../imgs/content_pic/down.jpg';
    }
})

//Nav Middle Content
let middleNavContent = document.querySelectorAll('.middle_nav ul li');
let middleNavLinks = document.querySelectorAll('.middle_nav ul li a')

middleNavContent.forEach((li) => {
   li.addEventListener('click', (e) => {
      e.preventDefault();
     ToggleActive(e)

  })
})

function ToggleActive(el) {
     el.target.parentElement.querySelectorAll('.active').forEach((ele) => {
        ele.classList.remove('active');
     })

     el.target.classList.add('active');
}

//Arow Right Fleche
let middleContent = document.querySelector('.middle_content');
let arowRight = document.querySelector('.arow_right');
let arowLeft = document.querySelector('.arow_left');
let boxGaleries = document.querySelectorAll('.middle_content .box');

arowRight.onclick = () => {
    boxGaleries.forEach(box => {
        arowLeft.style.display = 'block';
        box.style.animation = 'move';
    })
}

//Overlay Page
let overlayPage = document.querySelector('.cherch form input');

overlayPage.onclick = () => {
    let overlay = document.createElement('div');
    overlay.className = 'overlay';

    let box = document.createElement('div');
    box.className = 'popup';

    let boxTitle = document.createElement('h1');
    let boxtext = document.createTextNode('Creer Une Publication');
    boxTitle.appendChild(boxtext);

    let img = document.createElement('img');
    img.src = '../imgs/nav_pic/kimo.png';
    
    let secondTitle = document.createElement('a');
    let secondText = document.createTextNode('touati karim');
    secondTitle.appendChild(secondText);

    let paragraph = document.createElement('p');
    paragraphText = document.createTextNode('Public');
    paragraph.appendChild(paragraphText);

    let input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Quoi de Neuf , Touati ?';
     
    input.onclick = (e) => {
        e.preventDefault();
       if(e.target.value.length !== '0') {
          btn.classList.add('btn_blue');
       }
    }

    let divFooter = document.createElement('div');
    divFooter.className = 'div_footer';
    let divFooterText = document.createTextNode('Ajouter A Votre Publication');
    divFooter.appendChild(divFooterText);

    let btn = document.createElement('button');
    btn.className = 'btn';
    let btntext = document.createTextNode('Publier');
    btn.appendChild(btntext);

    let btnClose = document.createElement('btn');
    btnClose.className = 'btn_close';
    let btnCloseText = document.createTextNode('X');
    btnClose.appendChild(btnCloseText);
    
    btnClose.addEventListener('click', (e) => {
        overlay.remove();
        box.remove();
    })

    box.append(boxTitle, img, secondTitle, paragraph, input, divFooter, btn, btnClose);

    document.body.appendChild(box);

    document.body.appendChild(overlay);
}

//Sponsoriser show Hide
let elipsis = document.querySelectorAll('.sponsor_one .elips');
let spons = document.querySelectorAll('.sponsor_one .masquer');

elipsis.forEach(ele => {
    ele.addEventListener('click', (e) => {
        e.target.nextElementSibling.classList.toggle('toggle_sponsor');
    })
})

//anniversaire facebook
let anniv = document.querySelector('.aniv');

anniv.addEventListener('click', (e) => {
    let popupTwo = document.createElement('div');
    popupTwo.className = 'popup_two';

    let anniv = document.createElement('div');

    let title = document.createElement('h1');
    let titleText = document.createTextNode('Anniversaire de vos Amis');
    title.append(titleText);

    let btnClos = document.createElement('button');
    let btnClostext = document.createTextNode('X');
    btnClos.append(btnClostext);

    btnClos.addEventListener('click', (e) => {
        anniv.remove();
        popupTwo.remove();
    })

    let form = document.createElement('form');

    let img = document.createElement('img');
    img.src = '../imgs/nav_pic/kimo.png';

    let content = document.createElement('p');
    content.className = 'content';
    
    let Name = document.createElement('span');
    let nameText = document.createTextNode('Kimo Kimo');
    Name.append(nameText);

    let input = document.createElement('input');
    input.placeholder = 'Ecrire Sur Sont Journal';

    let icon = document.createElement('i');
    icon.className ='fa-solid fa-face-smile-beam';

    content.append(Name, input, icon);

    form.append(img, content);

    let btnAnnivers = document.createElement('button');
    btnAnnivText = document.createTextNode('Afficher Les Anniversaire A Venir');
    btnAnnivers.append(btnAnnivText);

    anniv.append(title, btnClos, form, btnAnnivers);
    
    popupTwo.appendChild(anniv);
    document.body.appendChild(popupTwo);
})

//hide Show Navigation end Image
let navEndLogo = document.querySelector('.nav_end_logo');
console.log(navEndLogo);
let navLogo = document.querySelector('.nav_end_images');
let rightOne = document.querySelector('.right_one');

navEndLogo.addEventListener('click', (e) => {
    navLogo.classList.toggle('show_nav_end');
    if(navLogo.classList.contains('show_nav_end')) {
       rightOne.style.visibility = 'hidden';
    } else {
        rightOne.style.visibility = 'visible';
    }
})

//Notification
let notif = document.querySelector('.nav_end .bell');
let notifications = document.querySelector('.end_notification');

notif.addEventListener('click', (e) => {
    notifications.classList.toggle('toggle_notif');
     if(notifications.classList.contains('toggle_notif')) {
       rightOne.style.visibility = 'hidden';
       notif.style.color = 'blue';
       notif.style.backgroundColor = '#333';
    } else {
        rightOne.style.visibility = 'visible';
        notif.style.backgroundColor = '#fff';
        notif.style.color = '#000';
    }
})

