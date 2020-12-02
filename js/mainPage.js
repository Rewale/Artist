$( document ).ready(function(){
    /*При загрузке страницы прячем иконку 
    меню и выплывающее меню*/
    
    $('#hide-div').hide();
    $('.list-hide').hide();
    /*Так же привязываем иконке
    меню событие*/
    $('#menu-butt').click(function(){
        $('.list-hide').slideToggle(500)
    })
    // Проверка размера экрана при ЗАГРУЗКЕ страницы
    if($(window).width()<=680)
    {
        // Прячем навигацию с кнопкам
        // Показываем меню и иконку
        $('.main-navigation').hide();        
        $('#hide-div').show();
        
    }    
    //Проверка размера экрана при ИЗМЕНЕНИИ РАЗМЕРА экрана
    $( window ).resize(function() {
        if($(window).width()<=680)
        {
            // Прячем навигацию с кнопкам
            // Показываем меню и иконку
            $('.main-navigation').hide();        
            $('#hide-div').show();           
        }
        else{
            // Показываем навигацию с кнопкам
            // Прячем меню и иконку
            $('.main-navigation').show();            
            $('#hide-div').hide();
                      
        }
    })
});