window.addEventListener( "pageshow", function ( event ) {
    var historyTraversal = event.persisted || 
                           ( typeof window.performance != "undefined" && 
                                window.performance.navigation.type === 2 );
    if ( historyTraversal ) {
      // Handle page restore.
      window.location.reload();
    }
  })


  $(document).ready(function () {
    $(".close_nav").click(function () {
      $(".navbar .menu").removeClass("active");
      $(".ham").removeClass("active");
      });
  });