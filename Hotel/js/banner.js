var contenedor = $ ('#caja');


var siguiente = ('btn-adelante');
var anterior = ('btn-atras');


$('#caja .section_caja_last').insertBefore('#caja.section_caja:first');

contenedor.css('margin-left','-',+ 100 + '%');

function derecha(){
    contenedor.animate({
        marginleft:'-'+200+'%'
    } ,700, function(){
        $('#caja .setion_caja:first').insertAfter('#caja .section_caja:last');
        contenedor.css('marginleft', '-',+100+'%');
    });
}


function izquierda(){
    contenedor.animate({
        marginleft:0
    }, 700, function(){
        $('#caja .setion_caja:last').insertBefore('#caja .section_caja:first');
        contenedor.css('marginleft', '-',+100+'%');
    });
}

function automatico(){
    interval = setInterval(function(){
        derecha();
    }, 5000);


}


siguiente.on('click', function(){
    derecha();
    clearInterval(interval);
    automatico();

})

anterior.on('click', function(){
    izquierda();
    clearInterval(interval);
    automatico();
})

automatico();
