var baseUrl = 'http://localhost:8080/banner/238857?testparam=true&testgeo=US&sizeParam=';
function updateWhiteRabbitBanner(width) {

  if (width < 640 && width >= 320) {
    $('#whiteRabbitBanner').attr('src', baseUrl + 'medium');
  }
  if (width >= 640) {
    $('#whiteRabbitBanner').attr('src', baseUrl + 'desktop');
  }
  if (width < 320) {
    $('#whiteRabbitBanner').attr('src', baseUrl + 'mobile');
  }
}

Template.body.onRendered(function(){
  updateWhiteRabbitBanner($(window).width());
  $(window).resize(function() {
    updateWhiteRabbitBanner($(window).width());
  });
});