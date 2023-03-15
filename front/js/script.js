jQuery(function($){
   
   $(".phoneInput").mask("+ 38 (999) 999-99-99");
   $('#number-card').mask('9       9       9       9       9       9       9       9       9       9       9       9');
});

$(function() {
    $.validator.addMethod("emailRegex", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(value);
    }, "Недійсний формат входу");
});

$(function() {
    $(".form_basket_meest").validate({
        rules: {
            "first_name": {
                required: true,
                minlength: 3,
            },
            "last_name":{
               required: true,
               minlength: 3,
            },
            "po_batkovi":{
               required: true,
               minlength: 3,
            },
            "phone": {
                required: true,
            },
            "email":{
                required: true,
                emailRegex: true,
            },
            "link":{
               required: true,
            },
            "description_goods":{
               required: true,
            },
            "size":{
               required: true,
            },
            "color":{
               required: true,
            },
            "value":{
               required: true,
            },
            "price":{
               required: true,
            },
            "town":{
               required: true,
            },
            "department_post":{
               required: true,
            }

        },
        messages: {
            "first_name": {
                required: "Обов'язковие поле для заповнювання",
                minlength: "Введіть Ваше повне ім'я",
            },
            "last_name":{
               required: "Обов'язковие поле для заповнювання",
            },
            "po_batkovi":{
               required: "Обов'язковие поле для заповнювання",
            },
            "phone": {
                required: "Обов'язковие поле для заповнювання",
            },
            "email":{
                required: "Ви повинні ввести ім'я електронної пошти",
                emailRegex: "Недійсний формат входу",
            },
            "link":{
               required: "Обов'язковие поле для заповнювання",
            },
            "description_goods":{
               required: "Обов'язковие поле для заповнювання",
            },
            "size":{
               required: "Обов'язковие поле для заповнювання",
            },
            "colour":{
               required: "Обов'язковие поле для заповнювання",
            },
            "value":{
               required: "Обов'язковие поле для заповнювання",
            },
            "price":{
               required: "Обов'язковие поле для заповнювання",
            },
            "town":{
               required: "Обов'язковие поле для заповнювання",
            },
            "department_post":{
               required: "Обов'язковие поле для заповнювання",
            }
        },
    });
});

const div = document.getElementById('goods_buy_form_all');

function duplicateForm() {
  let forms = div.getElementsByClassName('goods_buy_form');
  let firstForm = forms[0];
  let formClone = firstForm.cloneNode(true);
  div.appendChild(formClone);
}

$('.delete_goods_buy_form').click(function(){
   $
})

$(function () {
   $('.close_goods').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#username',
      modal: true
   });
   $(document).on('click', '.close_popup', function (e) {
      e.preventDefault();
      $.magnificPopup.close();
   });
});