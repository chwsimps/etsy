
var container = $('#full'),
                img, img_title, img_user, img_price, img_cc;

api.results.forEach( function (whisk) {

  //Build images
  img = "<img src='" + whisk.Images[0].url_170x135 + "'/img>";

  img_title = "<li>" + whisk.title + "</li>";

  img_user = "<li>" + whisk.Shop.shop_name + "</li>"

  img_price = "<li>" + whisk.price + "</li>";

  img_cc = "<li>" + whisk.currency_code + "</li>";


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
