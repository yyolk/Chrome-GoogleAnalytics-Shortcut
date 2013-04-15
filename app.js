(function($){

  var GoogleAnalyticsRedirect = function(){
    this.googleAnalyticsUrl = "http://www.google.com/analytics";
  }


  GoogleAnalyticsRedirect.prototype.redirect = function(){
    window.location.replace(this.googleAnalyticsUrl);
  }


  $(document).ready(function(){
    var gaRedirect = new GoogleAnalyticsRedirect();
    gaRedirect.redirect();
  });

})(jQuery);


