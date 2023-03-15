$(function() {

   $(".phoneInput").mask("+ 38 (999) 999-99-99");

   $.validator.addMethod("emailRegex", function(value, element) {
      return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(value);
   }, "Недійсний формат входу");

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
            "town":{
               required: "Обов'язковие поле для заповнювання",
            },
            "department_post":{
               required: "Обов'язковие поле для заповнювання",
            }
        },
   });
   
   const divToAppend = $('#goods_buy_form_all') //
   const goodToCopy = $('#goods_buy_form_all').html() //

   function duplicateForm() {
      divToAppend.append(goodToCopy);
   }

   $('.add_link').on('click', function(e) {
      e.preventDefault()
      duplicateForm()
   })

   $(document).on('click', '.close_goods', function(e) {
      e.preventDefault()
      const parent = $(this).parents('.goods_buy_form')
      const index = parent.index()
      $.magnificPopup.open({
         items: {
           src: "#open_popup_close",
           type: 'inline',
         }
      });
      localStorage.setItem('product_index', index)
   })

   $(document).on('click', '.delete_goods_buy_form', function(e) {
      e.preventDefault()
      const index = localStorage.getItem('product_index')
      if(index !== null) {
         $('.goods_buy_form').eq(index).remove()
      }
      $.magnificPopup.close();
   })

   $(document).on('click', '.sub_btn, .close_popup', function(e) {
      e.preventDefault()
      $.magnificPopup.close();
   })

});


$('.toggle_switch .page').click(function(){
   $('.toggle_switch .page').removeClass('active')
   $(this).addClass('active')
   return false
})