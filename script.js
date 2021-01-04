let mousCursor = document.querySelector(".cursor");
window.addEventListener('mousemove',cursor);
function cursor(e){
    mousCursor.style.top= e.pageY +'px';
    mousCursor.style.left= e.pageX +'px';
}