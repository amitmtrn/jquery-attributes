/*global jQuery, console */
jQuery( function( $ ) {
  "use strict";

  var singleAction = [ "toggle", "show", "hide", "slideDown", "slideUp",
  "slideToggle", "fadeIn", "fadeOut", "fateTo", "fadeToggle" ];

  jQuery.each( singleAction, parseDataJq );
//////////////////////////////////

  function activateAction( e ) {
    var $this = $( e.currentTarget ),
    selectorType = $item.attr( "data-jq-selector-type" ) || "siblings",
    selector = $item.attr( "data-jq-" + value );

    $this[selectorType]( selector )[value]();

  }

  function setEventItem( itemIndex, item ) {
    var $item = $( item ),
    event = $item.attr( "data-jq-event" ) || "click";

    $item.on( event, activateAction );
  }

  function parseDataJq( index, value ) {
    var $items = $( "[data-jq-" + value + "]" );
    $items.each( setEventItem );
  }

} );
