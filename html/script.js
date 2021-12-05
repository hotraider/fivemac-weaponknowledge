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
     $("#yazi").click(function() {
         let inputValue = $("#yazi").val()
         return;
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


 $(document).ready(function() {

     $("#b1").click(function() {

         $(".button1").toggle(1000);

         $(".button2").hide();

         $(".button4").hide();

         $(".button3").hide();

         $(".button5").hide();

     });
 });

 $(document).ready(function() {

     $("#b2").click(function() {

         console.log("b2")

         $(".button2").toggle(1000);

         $(".button1").hide();

         $(".button4").hide();

         $(".button3").hide();

         $(".button5").hide();



     });
 });

 $(document).ready(function() {

     $("#b3").click(function() {

         console.log("b3")


         $(".button3").toggle(1000);

         $(".button4").hide();

         $(".button1").hide();

         $(".button2").hide();

         $(".button5").hide();


     });
 });


 $(document).ready(function() {

     $("#b4").click(function() {

         console.log("b4")


         $(".button4").toggle(1000);

         $(".button1").hide();

         $(".button2").hide();

         $(".button3").hide();

         $(".button5").hide();



     });
 });


 $(document).ready(function() {

     $("#b5").click(function() {

         $(".button5").toggle(1000);

         $(".button1").hide();

         $(".button4").hide();


         $(".button2").hide();

         $(".button3").hide();


     });
 });