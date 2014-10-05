/**
 * Created by SAYAN on 08-06-2014.
 */

define(["widget/san.Menu","util/menuJSON"],function(){
    $(document).ready(function(){
        if($("#sampleUl").outerHeight() > $("#sampleDiv").outerHeight()-2){
			var button = document.createElement("button");
			$(button).attr({"id":"samplebutton", "class":"samplePic"});
			$("#sampleDiv").append(button);
			$(button).css({"position":"absolute"});
    		$(button).on( 'DOMMouseScroll mousewheel', function ( event ) {
			  if( event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 ) { //alternative options for wheelData: wheelDeltaX & wheelDeltaY
			    //scroll down
			    var scrlTop =  $("#sampleDiv").scrollTop();
		        $("#sampleDiv").animate({
		            scrollTop: scrlTop + 20
		        }, 20);
			  } else {
			    //scroll up
			    var scrlTop =  $("#sampleDiv").scrollTop();
		        $("#sampleDiv").animate({
		            scrollTop: scrlTop - 20
		        }, 20);
			  }
			  //prevent page from scrolling
			  return false;
			});

			$(button).on("mouseenter", function () {
				var scrlTop =  $("#sampleDiv").scrollTop();
		        $("#sampleDiv").animate({
		            scrollTop: scrlTop + 150
		        }, 1000);
		        return false;
		    });
		}
    });
});