//datepicker widget
$( function() {
  $( "#datepicker" ).datepicker();
} );



//buttom
$( function() {
  $( ".widget button" )
  .end().eq( 2 ).button( {
    icon: "ui-icon-cart" 
  } );
} );

//slideToggle
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});



//tooltip widget
$( function() {
  var tooltips = $( "[title]" ).tooltip({
    position: {
      my: "left top",
      at: "right+5 top-10",
      collision: "none"
    }
  });
  $( "<button>" )
    .text( "Email Us!" )
//add a icon to button
    .button(
      {
        icon: " ui-icon-mail-open",
        // iconPosition: "end"
      }
    )
    .on( "click", function() {
      tooltips.tooltip( "open" );
    })
    .insertAfter( "form" );
} );


//Menu
$('.toggle').on('click', function() {
  $('.menu').toggleClass('active');
});


//Tabs
$( function() {
  $( "#tabs" ).tabs({
    event: "mouseover"
  });
} );











