/**
 * Created by Ярик on 27.09.2016.
 */
$(document).ready(function () {
    $.fn.editable.defaults.mode = 'popup';
    $("#propName_1, #propData_1").editable({
        type: 'text',
        title: 'Enter the property'
    }).css('left', '0');
    $('#username').editable();
});
