 var mouseEvent = "empty" ;
 var last_postition_of_x , last_postition_of_y ;
 canvas = document.getElementById ('myCanvas') ;
 ctx = canvas.getContext ("2D") ;
 color = "black" ;
 width_of_line = 2 ; 
 canvas.addEventListener ("mousedown" ,  my_mousedown) ;
 function my_mousedown (e) 
 {
mouseEvent = "mousedown" ;
 }
 canvas.addEventListener ("mousemove" , my_mousemove) ;
 function my_mousemove (e) 
{
current_position_of_mouse_x = e.canvasX - canvas.offsetLeft ;
current_position_of_mouse_y = e.canvasY - canvas.offsetTop ;
 if (mouseEvent= my_mousedown) 
 {
ctx.beginPath () ;
ctx.strokeStyle = color ;
ctx.lineWidth = width_of_line ;
console.log ("last_position_of_x_and_y_coordinates" ) ;
console.log ("X =" + last_position_of_x , "y=" + last_position_of_y) ;
 ctx.moveTo (last_position_of_x , last_position_of_y) ;

console.log ("current_position_of_x_and_y_coordinates" ) ;
console.log ("X =" + current_position_of_mouse_x , "y=" + current_position_of_mouse_y) ;
ctx.lineTo (current_position_of_mouse_x , current_position_of_mouse_y);
}
canvas.addEventListener ("mouseup" , my_mouseup);

function my_mouseup (e) 
{
mouseEvent = "mouseup";
}
canvas.addEventListener ("mouseleave" , my_mouseleave) ;

function my_mouseleave (e) 
{
mouseEvent = "mouseleave";
}
}

