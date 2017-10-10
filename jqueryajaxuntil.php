<!DOCTYPE html>
<html  lang="en">
<head>
<meta charset="utf-8">
<title>GSF Mortgage Corporation</title>
 <script
			  src="https://code.jquery.com/jquery-3.2.1.min.js"
			  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
			  crossorigin="anonymous"></script>
</head>
<body>

<script>
	
	(function worker() {
	  $.ajax({
		url: 'upload.php', 
		success: function(data) {
		 console.log(data);
		},
		complete: function(data) {
		  // Schedule the next request when the current one's complete
		  console.log(data.responseText);
		  if(data.responseText != 8){
			setTimeout(worker, 3000);
		  }else{
			console.log('Loop completed');
		  }
		}
	  });
	})();
</script>
</body>
</html>
