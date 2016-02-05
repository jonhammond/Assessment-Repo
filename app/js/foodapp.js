$(document).on('ready', function() {
  console.log('sanity check!');
  $.ajax(settings).done(function (response) {
      for (var i=0; i<response.menu.length; i++) {
        if (response.menu[i].type === "burger") {
          $('.burgers').append('<p class="item" id=' + response.menu[i].id + ' >' + response.menu[i].name + '</p>')
          $('.burgers').append('<p class="price">' + response.menu[i].price + '</p>')
        }
        else {
          $('.pizza').append('<p class="item" id=' + response.menu[i].id + '>' + response.menu[i].name + '</p>')
          $('.pizza').append('<p class="price">' + response.menu[i].price + '</p>')
        }
      }
    });
  addItemToReceipt();
})

$(document).on('click', '.item', function () {
  console.log($(this).attr('id'));
})

function addItemToReceipt () {
  $('#1').on('click', function (){
      console.log('test');
      $('.recItems').append('<div>' + menuItems.cheeseburger.name + '</div>');
      $('.recPrices').append('<div>' + menuItems.cheeseburger.price + '</div>');
      subTotal += menuItems.cheeseburger.price;
    });
  };

function addSubtotal () {
  console.log($('.recPrices'));
}