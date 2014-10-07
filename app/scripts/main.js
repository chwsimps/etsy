
var container = $('#full'),
                img, img_title, img_user, img_price, img_cc;

api.results.forEach( function (whisk) {

  //Build images
  img = "<img src='" + whisk.Images[0].url_170x135 + "'/img>";

  img_title = "<p class='t'>" + whisk.title + "</p>";

  img_user = "<p class='u'>" + whisk.Shop.shop_name + "</p>"

  img_price = "<p class='p'>" + whisk.price + "</p>";

  img_cc = "<p class='cc'>" + whisk.currency_code + "</p>";


  items = "<li>" + img + img_title + img_user + img_price + img_cc + "<hr /></li>";

  $(whiskey).append(items);

});




// var container = $('#tracks'),
//     song_image, song_title, song_mp3, track;
//
// rocktracks.forEach( function (song) {
//
//   // Build Image Tag for Each Song
//   song_image = "<img src='" + song.artwork_url + "' />'";
//
//   // Build Image Title
//   song_title = "<p>" + song.title + "</p>";
//
//   // Build the Song MP3
//   song_mp3 = "<audio controls src='" + song.stream_url + "?client_id=87322f9fd4d27754fc7adf00ce869254'></audio>";
//
//   // Build Each Track Display
//   track = "<li>" + song_title + song_mp3  + song_image + "<hr /></li>";
//
//   // Append Each Track To my Tracks List
//   container.append(track);

// });
