 fivemac = {}
 $(function() {
     function display(bool) {
         if (bool) {
             $("#container").show();
         } else {
             $("#container").hide();
         }
     }
     display(false)
     window.addEventListener('message', function(event) {
         var item = event.data;
         if (item.type === "ui") {
             if (item.status == true) {
                 display(true)
             } else {
                 display(false)
             }
         }
     })
 })

 $(document).on('keydown', function() {
     switch (event.keyCode) {
         case 27:
             fivemac.Close();
             break;
     }
 });

 fivemac.Close = function() {
     $("#container").fadeOut(175);
     $.post('http://fivemac-weaponknowledge/close');
 }


 $("#exit").click(function() {
     fivemac.Close();
 });

 const indicator = document.querySelector('.nav-indicator');
 const items = document.querySelectorAll('.nav-item');

 function handleIndicator(el) {
     items.forEach(item => {
         item.classList.remove('is-active');
         item.removeAttribute('style');
     });

     indicator.style.width = `${el.offsetWidth}px`;
     indicator.style.left = `${el.offsetLeft}px`;
     indicator.style.backgroundColor = el.getAttribute('active-color');

     el.classList.add('is-active');
     el.style.color = el.getAttribute('active-color');
 }


 items.forEach((item, index) => {
     item.addEventListener('click', (e) => { handleIndicator(e.target) });
     item.classList.contains('is-active') && handleIndicator(item);
 });

 $(document).ready(function() {

     $(".button1").hide();

     $(".button2").hide();

     $(".button3").hide();

     $(".button4").hide();

     $(".button5").hide();



 });

 var sj1 = false

 function myFunction(v) {

     $(".button1").hide();

     $(".button2").hide();

     $(".button3").hide();

     $(".button4").hide();

     $(".button5").hide();

     $(".reklam").hide();

     if (v == "#b1") {
         sj1 = true
         document.getElementById("b1").style.color = "red";
         $(".button1").toggle(500);
     } else if (v == "#b2") {
         document.getElementById("b2").style.color = "red";
         $(".button2").toggle(500);
     } else if (v == "#b3") {
         document.getElementById("b3").style.color = "red";
         $(".button3").toggle(500);
     } else if (v == "#b4") {
         document.getElementById("b4").style.color = "red";
         $(".button4").toggle(500);
     } else if (v == "#b5") {
         document.getElementById("b5").style.color = "red";
         $(".button5").toggle(500);
     }
 }
