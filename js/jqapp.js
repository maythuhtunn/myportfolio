$(document).ready(function(){

    
    
    // Start Mission Section
    $(window).scroll(function(){
        let getscrolly = $(this).scrollTop();
        console.log(getscrolly);
        console.log("hey");
    
        if(getscrolly >= 1150){
            $('.aboutones').addClass('tolarges');
            $('.abouttwos').addClass('tosmalls');
        }else{
            $('.aboutones').removeClass('tolarges');
            $('.abouttwos').removeClass('tosmalls');
        }
    });
    // End Mission Section
      
    
    });
    
    
