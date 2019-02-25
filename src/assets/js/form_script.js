"use strict";

/* Ajax Form Plugin V 1.0.1
 * Send contact and newsletter form data to a server and waiting for its response.
 * Compatible with jqery validator plugin
 */

(function($) {

    $.fn.initForm = function(options) {
        var settings = $.extend({
            type: 'post',
            serverUrl: '#',
            successClean: this.find('.form-success-clean'),
            successGone: this.find('.form-success-gone'),
            successInvisible: this.find('.form-success-invisible'),
            successVisible: this.find('.form-success-visible'),
            textFeedback: this.find('.form-text-feedback'),
        }, options);
        var $ajax = {
            sendRequest: function(p) {
                var form_fill = $(p);

                // Get the form data.
                var form_inputs = form_fill.find(':input');
                var form_data = {};
                form_inputs.each(function() {
                    form_data[this.name] = $(this).val();
                });
               
            }

        };


        //if jquery validator plugin is enable, use it	
        if (jQuery.validator) {
            jQuery.validator.setDefaults({
                success: "valid"
            });
            this.validate({
                rules: {
                    field: {
                        required: true,
                        email: true
                    }
                }
            });
        }



        this.submit(function(event) {
            // prevent default submit
            event.preventDefault();
            // use jquery validator plugin if it is enabled
            if (jQuery.validator) {
                if ($(this).valid()) {
                    $ajax.sendRequest(this);
                }
            } else {
                $ajax.sendRequest(this);
            }
        });

    };

}(jQuery));

/* End of ajax */


// Make them as plugin