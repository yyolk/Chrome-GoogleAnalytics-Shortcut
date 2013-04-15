(function($){

  var FacebookRedirect = function(){
    this.facebookUrl = "http://www.facebook.com/";
  }


  FacebookRedirect.prototype.redirect = function(){
    window.location.replace(this.facebookUrl);
  }


  $(document).ready(function(){
    var fRedirect = new FacebookRedirect();
    fRedirect.redirect();
  });

})(jQuery);


