(function ( $, window, undefined ) {
var cnv_array=[];
var designBalls=function(cnvObj){
	var //ctx=$(cnvObj)[0].getContext("2d"),
  		b_id=$(cnvObj).attr("id");
		$("#"+b_id).drawPolygon({
			  layer: true,
			  fillStyle: "#c33",
			  x: 100, y: 50,
			  radius: 30,
			  sides: 5,
			  concavity: 0.5,
			  click: function(layer) {
				$(this).animateLayer(layer, {
			      
						rotate: '+=21780'
			      	
			    });
			    setTimeout(function(){
			    	openBox(b_id,layer);
			    },400);
			    
			  }
		});
	} 

var openBox=function(id,layer){
	var number=Math.floor((Math.random()*20)+1),
	elem=$("canvas"),i=0,flag=false;
	while(i<elem.length){
			chk=parseInt(cnv_array[i]);
			if(chk===number){
				number=Math.floor((Math.random()*20)+1);
				i=0;
			}
			else{
				i++;
			}	
	}
	
	$("#"+id).drawArc({
			  layer: true,
			  strokeStyle: '#25a',
			  strokeWidth:2,
			  	fillStyle: function(){
					  $("#"+id).drawText({
					  //fillStyle: '#9cf',
					  strokeStyle: '#000',
					  strokeWidth: 2,
					  x: 100, y: 50,
					  fontSize: 25,
					  fontFamily: 'Verdana, sans-serif',
					  text: number
					});
				},
			
			  x: 100, y: 50,
			  radius: 30
		});
	$("#"+id).removeLayer(layer);
	$("#"+id).val(number);
	cnv_array.push(number);
	
}

$(document).ready(function($) {
 	var i=0,
    canvasBalls=$(document).find("canvas");
    for(i=0;i<canvasBalls.length;i++){
      designBalls(canvasBalls[i]);
    }
 });

}(jQuery, window));