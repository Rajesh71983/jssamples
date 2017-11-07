<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
<script src="https://code.jquery.com/jquery-3.1.0.js"></script>
<select id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
<script>
  $("#cars")[0].setIndex = 1;
  //console.log($("#cars")[0])
  
  $("#cars")[0].selectedIndex = 1;  //set index
   ($("#cars")[0].value);           //get value
  $("#cars")[0].onchange = function (){
     alert($("#cars")[0].selectedIndex); //get index 
     alert($("#cars")[0].value);
     console.log($("#cars")[0].options); //get options
  }
  var items = document.getElementById('cars').options;
  items[1].style.color ='red'; // set color

  </script>
</body>
</html>
