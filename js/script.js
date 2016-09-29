/**
 * Created by Ярик on 27.09.2016.
 */
$(document).ready(function () {
    $.fn.editable.defaults.mode = 'popup';
    $("#propName_1, #propData_1, #propName_2, #propData_2").editable({
        type: 'text',
        title: 'Enter the property'
    });
});
