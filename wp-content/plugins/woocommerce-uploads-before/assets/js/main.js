jQuery(document).ready(function($) {

    if ($('input[name="wpf_umf_uploads_needed"]').val() == 1) {

        $('#wpf-umf-uploads-cart .checkout-button').click(function(e) {

            e.preventDefault();

            $('#wpf-umf-before-uploads-needed').fadeIn().scrollTop();

            $("html, body").animate({ scrollTop: 0 }, 500);

        });

        $("form.woocommerce-checkout").on( 'checkout_place_order', function() {


            $('#wpf-umf-before-uploads-needed').fadeIn().scrollTop();

            $("html, body").animate({ scrollTop: 0 }, 500);

            return false;

        });

    }


});

jQuery( document ).bind( 'found_variation', function(event, variation) {

    if (variation.can_upload == 0) {
        jQuery('.single_add_to_cart_button').text(wpf_umf_before_main.add_to_cart_text);
    } else {
        jQuery('.single_add_to_cart_button').text(wpf_umf_before_main.add_to_cart_with_upload_text);
    }

});
