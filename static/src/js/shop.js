$(document).ready(function(){
    var myObj = {
            'subcat-1': [
                {'name':'Habilidades ensambles', 'imagen': '/theme_chicos/static/src/img/primeros-ensambles_2.png', 'alt': 'Subcategoria1 de Categaria1'},
                {'name':'Peluches', 'imagen': '/theme_chicos/static/src/img/peluches_2.png', 'alt': 'Subcategoria2 de Categaria1'},
                {'name':'Primeras Habilidades', 'imagen': '/theme_chicos/static/src/img/primeras-habilidades_2.png', 'alt': 'Subcategoria3 de Categaria1'},
                {'name':'Habilidades de equilibrio', 'imagen': '/theme_chicos/static/src/img/equilibrio_2.png', 'alt': 'Subcategoria4 de Categaria1'},
                {'name':'Mobiliario', 'imagen': '/theme_chicos/static/src/img/mobiliario.png', 'alt': 'Subcategoria5 de Categaria1'},
                {'name':'Habilidades logicas', 'imagen': '/theme_chicos/static/src/img/logica_2.png', 'alt': 'Subcategoria5 de Categaria1'}
            ],
            'subcat-2': [
                {'name':'Habilidades de construcción', 'imagen': '/theme_chicos/static/src/img/construccion_2.png', 'alt': 'Subcategoria1 de Categaria2'},
                {'name':'Habilideades artisticas', 'imagen': '/theme_chicos/static/src/img/artistica_2.png', 'alt': 'Subcategoria2 de Categaria2'},
                {'name':'Habilidades de fisica', 'imagen': '/theme_chicos/static/src/img/aire-libre_2.png', 'alt': 'Subcategoria3 de Categaria2'},
                {'name':'Habilidades socio-emocionales', 'imagen': '/theme_chicos/static/src/img/2-4.png', 'alt': 'Subcategoria4 de Categaria2'},
                {'name':'Habilidades cognitivas', 'imagen': '/theme_chicos/static/src/img/didactica_2.png', 'alt': 'Subcategoria5 de Categaria2'},
                {'name':'Mobiliario', 'imagen': '/theme_chicos/static/src/img/mobiliario_2.png', 'alt': 'Subcategoria6 de Categaria2'}
            ]
        }
    $(document).on('click', '.a-linea-m', function (event) {
        event.preventDefault();
        console.log('cliqueaste')
        if (!$('.nav-book').hasClass('active')) {
          $('.nav-book').addClass('active');
        }
    });
    $(document).on('click', '.a-close-book', function (event) {
        event.preventDefault();

        if ($('.nav-book').hasClass('active')) {
          $('.nav-book').removeClass('active');
        }
    });

    //inicializacion de bodymovin
    if($('#home_page_svg').length) {
        var animation = bodymovin.loadAnimation({
            container: document.getElementById("home_page_svg"),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/theme_chicos/static/src/js/home_grande/Entrepiso1.json'
        });
    }
    if($('#deslizadero_svg').length) {
        var animation = bodymovin.loadAnimation({
        container: document.getElementById("deslizadero_svg"),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/theme_chicos/static/src/js/deslizadero_svg/data.json'
        });
    }
    if($('#rampa_subcat').length) {
        var animation = bodymovin.loadAnimation({
        container: document.getElementById("rampa_subcat"),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/theme_chicos/static/src/js/rampa_subcat/data.json'
        });
    }
    if($('#mama-jet').length) {
        var animation = bodymovin.loadAnimation({
        container: document.getElementById("mama-jet"),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/theme_chicos/static/src/js/mama-jet/data.json'
        });
    }
    $(document).on('click', '.btn-circle', function(){
        var divE1 = document.getElementById('menu-book-dn');
        var divE2 = document.getElementById('menu-sub_categories');
        divE1.setAttribute('style', 'transition: width 2s;width: 50% !important;');
        divE2.setAttribute('style', 'width: 0% !important;');
        var btn = document.getElementById('btn-circle');
        btn.setAttribute('style', 'left:101%;');
    })
    $(document).on('click', '.click-btn-subcat', function(){
        //ocultar y mostrar los div necesarios
        var divE1 = document.getElementById('menu-book-dn');
        var divE2 = document.getElementById('menu-sub_categories');
        divE1.setAttribute('style', 'transition: width 2s;width: 0% !important;');
        let idDiv = $(this).attr('id');
        if(idDiv == 'subcat-1'){
            divE2.setAttribute('style', 'width: 50% !important;background: #FF4065;');

        }else{
            divE2.setAttribute('style', 'width: 50% !important;');
        }

        //
        let element = document.querySelector('#' + $(this).attr('id'));
        let clone = element.cloneNode(true);
        $('#dv-category').html(clone);

        //agregar subcategorias
        let list = '';
        let list2 = '';
        for(var i in myObj[$(this).attr('id')]){
            console.log(myObj[$(this).attr('id')][i].name)
            if(i % 2 == 0){
                list2 += `
                    <li>
                        <a href="#" class="">
                            <div class="div-img-etapa">
                                <img class="hvr-buzz-out" src="`+myObj[$(this).attr('id')][i].imagen+`" alt="`+myObj[$(this).attr('id')][i].alt+`">
                            </div>
                            <div class="div-data-etapa-sub">
                                <p class="name_subcategoria text-center">`+myObj[$(this).attr('id')][i].name+`</p>
                            </div>
                        </a>
                    </li>
                `
            }
            else{
                list += `
                    <li>
                        <a href="#" class="">
                            <div class="div-img-etapa">
                                <img class="hvr-buzz-out" src="`+myObj[$(this).attr('id')][i].imagen+`" alt="`+myObj[$(this).attr('id')][i].alt+`">
                            </div>
                            <div class="div-data-etapa-sub">
                                <p class="name_subcategoria text-center">`+myObj[$(this).attr('id')][i].name+`</p>
                            </div>
                        </a>
                    </li>
                `
            }
        }
        var btn = document.getElementById('btn-circle');
        if(isMobile()){
            btn.setAttribute('style', 'animation-duration: 2s;animation-name: mov-left2;animation-iteration-count: 1;animation-direction: alternate;animation-fill-mode: forwards;');
        }else{
            btn.setAttribute('style', 'animation-duration: 2s;animation-name: mov-left;animation-iteration-count: 1;animation-direction: alternate;animation-fill-mode: forwards;');
        }
        $(".list-etapas-sub").html(list);
        $(".list2-etapas-sub").html(list2);

    })
    function isMobile(){
        return (
                navigator.userAgent.match(/Android/i)
             || navigator.userAgent.match(/webOS/i)
             || navigator.userAgent.match(/iPhone/i)
             || navigator.userAgent.match(/iPod/i)
             || navigator.userAgent.match(/BlackBerry/i)
             || navigator.userAgent.match(/Windows Phone/i)
             || navigator.userAgent.match(/iPad/i)
        );
    }

})