
var container = $('#full'),
                img, img_title, img_user, img_price, img_cc, heart, ham;

api.results.forEach( function (whisk) {

  //Build images
  img = "<img src='" + whisk.Images[0].url_170x135 + "'/img>";

  heart = "<div class='heart'>" + "url(https://raw.githubusercontent.com/tiy-atlanta-js/Assignments/master/Assignment%2008/assets/heart.png)" + "</div>";

  ham = "<div class='ham'>" + 'url(https://raw.githubusercontent.com/tiy-atlanta-js/Assignments/master/Assignment%2008/assets/hamburger.png)' + "</div>";

  img_title = "<p class='t'>" + whisk.title + "</p>";

  img_user = "<p class='u'>" + whisk.Shop.shop_name + "</p>"

  img_price = "<p class='p'>" + "$" + whisk.price + "</p>";

  img_cc = "<p class='cc'>" + whisk.currency_code + "</p>";


  items = "<li>" + img + img_title + img_user + img_price + img_cc + "<hr /></li>";

  $(whiskey).append(items);

});

// function shorten(img_title, maxLength) {
//     var ret = img_title;
//     if (ret.length > maxLength) {
//         ret = ret.substr(0,maxLength-3) + "...";
//     }
//     return ret;
// }


// api.results.filter( function (x) {
//   cat = "<p>" + x.category_path + "</p>";
//
//   $(side).append(x);
// }
