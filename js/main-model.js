
let dismiss = document.querySelector('[data-rb-dismiss]');
dismiss.title ="Hide menu";

dismiss.addEventListener('click', () => {
    document.querySelector('#menu').setAttribute('style', 'display:none');
    document.querySelector('[data-rb-show]').setAttribute('style', 'display:block');
});



document.querySelector('[data-rb-show]').title = "Show menu";

document.querySelector('[data-rb-show]').addEventListener('click', (e) => {
    document.querySelector('#menu').setAttribute('style', 'display:inline');
    document.querySelector('[data-rb-show]').setAttribute('style', 'display:none');
});


    // read more 
    let readMore = document.querySelector('[data-read-more]');
    let pLead = document.querySelector('[data-p-lead]');

    // mouse hover
    readMore.addEventListener('mouseover', () => {
        pLead.classList.replace('d-none','d-block');
    });

    // mouse out 
    readMore.addEventListener('mouseout', () => {
        pLead.classList.replace('d-block','d-none');
    })


    // nav= 1
    let nav1 = document.querySelector('[data-rb-nav="1"]');
    nav1.addEventListener('click', function() {
        let sub1 = document.querySelector('[data-rb-sub="1"]');
        if (sub1.classList.contains('d-none')) {
            sub1.classList.replace('d-none', 'd-block');

            let sub2 = document.querySelector('[data-rb-sub="2"]');

                if (sub2.classList.contains('d-block')) {
                   sub2.classList.replace('d-block', 'd-none'); 
                }

        } else {
            sub1.classList.replace('d-block', 'd-none');
        }
    });

    // nav = 2
    let nav2 = document.querySelector('[data-rb-nav="2"]');
    nav2.addEventListener('click', function() {
        let sub2 = document.querySelector('[data-rb-sub="2"]');
        if (sub2.classList.contains('d-none')) {
            sub2.classList.replace('d-none', 'd-block');

            let sub1 = document.querySelector('[data-rb-sub="1"]');
            
                if (sub1.classList.contains('d-block')) {
                   sub1.classList.replace('d-block', 'd-none'); 
                }
        
        } else {
            sub2.classList.replace('d-block', 'd-none');
        }
    }); 

    // dark
    let dark = document.querySelector('[data-dark]');
    
    dark.addEventListener('click', ( ) =>{

        document.querySelector('[data-light]').classList.toggle('d-block');
        dark.classList.toggle('d-none');

        let menu = document.querySelector('.menu');
        menu.setAttribute('style', 'background-color:#000; color:#fff;');


        let a = document.querySelectorAll('.text-black');

        a.forEach((li) =>{
            li.classList.replace('text-black', 'text-white');
        })

        let cards = document.querySelectorAll('.card');

        cards.forEach((card) => {
            card.classList.replace('bg-white', 'bg-black');
            card.classList.add('text-white');
        })

    });

    //  light 
    let light = document.querySelector('[data-light]');
    light.addEventListener('click', () => {
        dark.classList.toggle('d-none');
        light.classList.toggle('d-block');

        document.querySelector('.menu').removeAttribute('style' );

        let a = document.querySelectorAll('.text-white');

        a.forEach((li) => {
            li.classList.replace('text-white', 'text-black');
        })

        // cards

        let cards = document.querySelectorAll('.card');

        cards.forEach((card) => {
            card.classList.replace('bg-black', 'bg-white');
        })
    });

    // model
    let btnModel = document.querySelector('[data-rb-model]');
    btnModel.title ="Show model menu";

    let model = document.getElementById('model');
    
    btnModel.addEventListener('click',()=> {
        model.classList.replace('d-none', 'd-block');
    });

    let close = document.querySelector('[data-close="1"]');
    let btn = document.querySelector('[data-close="2"]');

    close.addEventListener('click', () => {
        model.classList.replace('d-block', 'd-none');
    });

    btn.addEventListener('click', () => {
        model.classList.replace('d-block', 'd-none');
    });

    

    
    

        