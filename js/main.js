$(document).ready( function () {
    var percent, result;

    var inpA = $('#input-value-a');
    var inpB = $('#input-value-b');

    var descA = $('#input-desc-a');
    var descB = $('#input-desc-b');

    var saleResult = $('#sale-result');

    var area = $('#area');
    var moduleSum = $('#amount-module');

    var offerSum = $('#how-much');

    var lessItem = $('#less-item');

    var sale = $('#sale');

    var price = 300;
   
    var mSum = 1;

    var difference;


    // INIT BILL
    // ----------------------------------------------------------

    $(window).on('DOMContentLoaded', function () {

    });


    // RANGE FUNCTION
    // ----------------------------------------------------------


// обрабатываю события на первом слайдере
    inpA.on('change', function () {
      // вывожу данные по плащиди
        area.text(
          (inpA.val() * inpB.val()).toFixed(2)
          );

      // вывожу данные по сумме
        moduleSum.text (
          ((inpA.val()/0.3) * (inpB.val()/0.3)).toFixed(0)
          );

      // считаю сумму модулей
        mSum = ((inpA.val()/0.3) * (inpB.val()/0.3)).toFixed(0);

        if (mSum < 7) {
          price = 300;
          $('#fin').text('Вам нехватает');
          $('#fin-2').text('шт до скидки');

          lessItem.text (7-mSum);
          sale.text('16' + '%');
        };

        if (mSum >= 7){
          if (mSum <17) {            
            price = 250;
            $('#fin').text('Вам нехватает');
            $('#fin-2').text('шт до скидки');

            lessItem.text(17-mSum);
            sale.text('25' + '%');
          };          
        };

        if (mSum >=17){
          price = 225;
          $('#fin').text('Ваша скидка 25%');          
          $('#fin-2').text('');

          lessItem.text('');
          sale.text('');
        };

        if (mSum > 36){
          $('#fin').html('<p style="color:red; font-weight:800;">Оптовая поставка!</p><p style="font-size:18px;">Подробности уточняйте у оператора</p>'); 
          $('#fin-2').text('');

          lessItem.text('');
          sale.text('');
        }

        offerSum.text (
          mSum*price
          );

        saleResult.text (
          (mSum*300)-(mSum*price)
          );

        // descA = inpA
        $('#input-desc-a').html($(this).val()); 
    });




// обрабатываю события на втором слайдере
    inpB.on('change', function () {
        area.text(
          (inpA.val() * inpB.val()).toFixed(2)
          );

        moduleSum.text (
          ((inpA.val()/0.3) * (inpB.val()/0.3)).toFixed(0)
          );

        mSum = ((inpA.val()/0.3) * (inpB.val()/0.3)).toFixed(0);

        if (mSum < 7) {
          price = 300;
          $('#fin').text('Вам нехватает');
          $('#fin-2').text('шт до скидки');

          lessItem.text (7-mSum);
          sale.text('16' + '%');
        };

        if (mSum >= 7){
          if (mSum <17) {            
            price = 250;
            $('#fin').text('Вам нехватает');
            $('#fin-2').text('шт до скидки');

            lessItem.text(17-mSum);
            sale.text('25' + '%');
          };          
        };

        if (mSum >=17){
          price = 225;
          $('#fin').text('Ваша скидка 25%');          
          $('#fin-2').text('');

          lessItem.text('');
          sale.text('');
        };

        if (mSum > 36){
          $('#fin').html('<p style="color:red; font-weight:800;">Оптовая поставка!</p><p style="font-size:18px;">Подробности уточняйте у оператора</p>'); 
          $('#fin-2').text('');

          lessItem.text('');
          sale.text('');
        }

        offerSum.text (
          mSum*price
          );

        saleResult.text (
          (mSum*300)-(mSum*price)
          );

        $('#input-desc-b').html($(this).val());
    });

});



