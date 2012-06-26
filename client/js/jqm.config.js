$(document).bind("mobileinit", function () {
    $.mobile.ajaxEnabled = false;
    $.mobile.linkBindingEnabled = false;
    $.mobile.hashListeningEnabled = false;
    $.mobile.pushStateEnabled = false;
    //$.mobile.autoInitializePage = false;
    $.mobile.buttonMarkup.hoverDelay = 200;
    $.mobile.defaultPageTransition = "slide";

    // Remove page from DOM when it's being replaced
    $('div[data-role="page"]').live('pagehide', function (event, ui) {
        console.log("pagehide");
        $(event.currentTarget).remove();
    });
});
