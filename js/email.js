<script>
 $('#myForm').submit(function(e) {
    //prevent default form submitting so it can run the ajax code first
    e.preventDefault();

    $(this).on('valid', function() {    //if the form is valid then grab the values of these IDs (name, email, message)
      var name = $("input#name").val();
      var email = $("input#email").val();
      var message = $("textarea#message").val();

      //Data for reponse (store the values here)
      var dataString = 'name=' + name +
        '&email=' + email +
        '&message=' + message;

      //Begin Ajax call
      $.ajax({
        type: "POST",
        url:"mail.php", //runs the php code
        data: dataString, //stores the data to be passed
        success: function(data){ // if success then generate the div and append the the following
          $('.contactform').html("<div id='thanks'></div>");

            $('#thanks').html("<br /><h4>Thanks!</h4>")
            .append('<p><span style="font-size:1.5em;">Hey</span> <span class="fancy">'+ name +'</span>,<br />I&acute;ll get back to you as soon as I can ;)</p>')
            .hide()
            .fadeIn(1500);
        },
        error: function(jqXHR, status, error){ //this is to check if there is any error
            alert("status: " + status + " message: " + error);
        }
      }); //End Ajax call
      //return false;
    });
  });
</script>

<script>
    $(document).foundation('abide', 'events'); // this was originally before the above code, but that makes the javascript code runs twice before submitting. Moved after and that fixes it.
</script>