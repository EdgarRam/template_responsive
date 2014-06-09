$(window).load(function() {
    $('#featured').orbit();
});
jQuery(function($) {
    $(".tweet").tweet({
        join_text: "auto",
        username: "PriteshGupta",
        count: 5,
        loading_text: "loading tweets..."
    });
});
$(document).ready(function() {
    $('#featured').jflickrfeed({
        limit: 2,
        qstrings: {
            id: '33871992@N07'
        },
        useTemplate: false,
        itemCallback: function(item) {
            $(this).append("<img src='" + item.image + "' alt='' width='450' />");
        }
    });

    $("a.fancybox").fancybox({
        'overlayShow': false,
        'transitionIn': 'elastic',
        'transitionOut': 'elastic'
    });

    //if submit button is clicked
    $('#submitbtn').click(function() {

        //Get the data from all the fields
        var name = $('input[name=name]');
        var email = $('input[name=email]');
        var emailAddress = $('input[name=email]').val();
        var website = $('input[name=website]');
        var comment = $('textarea[name=comment]');
        function isValidEmailAddress(emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        }
        ;
        //Simple validation to make sure user entered something
        //If error found, add highlight class to the text field
        if (name.val() == '') {
            name.addClass('highlight');
            $('.error').replaceWith('<div class="error">Please enter your name</div>');
            $('.error').fadeIn('slow');
            $(name).focus();
            return false;
        } else {
            name.removeClass('highlight');
            $('.error').hide();
        }

        if (email.val() == '') {
            email.addClass('highlight');
            $('.error').replaceWith('<div class="error">Please enter your email</div>');
            $('.error').fadeIn('slow');
            $(email).focus();
            return false;
        } else if (!isValidEmailAddress(emailAddress)) {
            email.addClass('highlight');
            $('.error').replaceWith('<div class="error">Please enter a valid email</div>');
            $('.error').fadeIn('slow');
            $(email).focus();
            return false;
        } else {
            email.removeClass('highlight');
            $('.error').hide();
        }

        if (comment.val() == '') {
            comment.addClass('highlight');
            $('.error').replaceWith('<div class="error">Please enter your message</div>');
            $('.error').fadeIn('slow');
            $(comment).focus();
            return false;
        } else {
            comment.removeClass('highlight');
            $('.error').hide();
        }

        //organize the data properly
        var data = 'name=' + name.val() + '&email=' + email.val() + '&website=' +
                website.val() + '&comment=' + encodeURIComponent(comment.val());

        //disabled all the text fields
        $('.text').attr('disabled', 'true');

        //show the loading sign
        $('.loading').show();

        //start the ajax
        
                    $('.form').fadeOut('slow');

                    //show the success message
                    $('.done').fadeIn('slow');
        //cancel the submit button default behaviours
        return false;
    });
});