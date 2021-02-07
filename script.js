const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});


setTimeout(function(){
     let popUp = document.getElementById("popUp").remove();
    console.log("delete pop up?")
}, 2800);

