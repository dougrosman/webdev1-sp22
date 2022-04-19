

let secretPasscode = "0f4168490e38b8447e11ba4bd656aa11b925bd22af30bac464bc153fdb608501";


$('#guess').click(function(){


console.log("clicked?")

   let userInput = $('#password-box').val()

   if(userInput == secretPasscode) {
       //alert("correct password!")

    //    $('.secret-image').show();

    window.location.href = "https://google.com"

    $('.password-container').fadeOut();

   } else {
       alert("try again")
   }
})