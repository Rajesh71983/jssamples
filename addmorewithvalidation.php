<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>CtrlS SOC</title>
<!-- Tell the browser to be responsive to screen width -->
<meta
	content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
	name="viewport">	
<link rel="stylesheet" href="http://localhost/vsocassetsuat/assets/bootstrap/css/bootstrap.css" type="text/css" />
<script type="text/javascript" src="http://localhost/vsocassetsuat/assets/plugins/jQuery/jquery-2.2.3.min.js"></script>
<script type="text/javascript" src="http://localhost/vsocassetsuat/assets/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="http://localhost/vsocassetsuat/assets/plugins/jQueryValidation/jquery.validate.min.js"></script>
<script type="text/javascript" src="http://localhost/vsocassetsuat/assets/js/jquery-validate.bootstrap-tooltip.min.js"></script>
</head>
<body >
	<div class="container">
		

		<form class="commentForm" method="get" action="">
			<div>

				<p id="inputs">    
					<input type="checkbox"  name="cname0" id="cname0"/>
					<input type="text" class="comment" name="name0"  />
					
				</p>

			<input class="submit" type="submit" value="Submit" />
			<input type="button" value="add" id="addInput" />

			</div>
		</form>
</div>
<script type="text/javascript">
   $(document).ready(function() {
        var numberIncr = 1; // used to increment the name for the inputs
        function addInput() {
            $('#inputs').append($('<p id="inputs"><input type="checkbox"  name="cname'+numberIncr+'" id="cname'+numberIncr+'"/><input class="comment" name="name'+numberIncr+'"  /></p>'));
            numberIncr++;
        }
        $('form.commentForm').on('submit', function(event) {
            // adding rules for inputs with class 'comment'
            $('input.comment').each(function() {
				var attrname=$(this).attr("name");
				var res = attrname.slice(4);
                $(this).rules("add", 
                    {
                        required: function(element){
																					
							if($('#cname'+res).prop('checked') ==1){
								return true;
							}
							
							else{
								return false;
							}
						}
                    })
            });            
            // prevent default submit action         
           // event.preventDefault();

            // test if form is valid 
            if($('form.commentForm').validate().form()) {
                console.log("validates");
            } else {
                console.log("does not validate");
            }
        })

        // set handler for addInput button click
        $("#addInput").on('click', addInput);

        // initialize the validator
        $('form.commentForm').validate();
   });
</script>
