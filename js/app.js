jQuery(document).ready(function(){
    jQuery('.nav-icon').bind('click',function() {
        jQuery('.header').toggleClass('active-menu');
        jQuery('html').toggleClass('y-hidden');
    })
    jQuery("input:radio").click(function() {
        if(jQuery('#first').is(':checked')) {
            jQuery('.service-text .label-wrap').css({
                "background-color": "#fafafa"
            });
        }
        else {
            jQuery('.service-text .label-wrap').css({
                "background-color": "#ffffff"
            });
        }
    }); 
    jQuery('.show-modal').click(function() {
        jQuery('.modal').fadeIn();
        jQuery('html').addClass('y-hidden');
        jQuery('.overlay').show();
        jQuery('.modal').addClass('active-modal')
    });    
    jQuery('.overlay').on('click',function(e) {        
        if(jQuery(e.target).closest('.modal').length===0 && jQuery('.modal').hasClass('active-modal')) {
            jQuery('.modal').removeClass('active-modal');
            jQuery('html').removeClass('y-hidden');
            jQuery('.modal').fadeOut();
            jQuery('.overlay').hide();
        }
    });
});