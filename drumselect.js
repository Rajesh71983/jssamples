<html>
<head>
	<meta charset='utf-8'>
	<meta id="viewport" name="viewport" content ="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />	
	<title>DateTime Test</title>
	<script src="../contrib/jquery-1.9.1.js"></script>
	<script src="../contrib/hammerjs/hammer.min.js"></script>
	<script src="../contrib/hammerjs/hammer.fakemultitouch.js"></script>

	<link rel="stylesheet" href="../lib/drum.css"></link>
	<script src="../lib/drum.js"></script>

	<style media="screen">
		body {
			background-color: #fefefe;
			font-family: Arial,Verdana,sans-serif;
		}
		div.date_wrapper {
			width: 265px;
		}
		div.date_wrapper .date_header {
			height: 25px;
			font-weight: 400;
			border-bottom: 1px solid #CCC;
			margin-bottom: 10px;
		}
		div.date_wrapper .date_header span.title {
			float: left;
			text-align: left;
		}
		div.date_wrapper .date_header span.selection {
			float: right;
			text-align: right;
			color: #CE0000;
		}

		div.date_wrapper form {
			position: relative;
		}
		div.date_wrapper .lines {
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;  
			border-top: solid 1px #CCC;
			border-bottom: solid 1px #CCC;
			position: absolute;
			top: 58px;
			left: 0px;
			width: 100%;
			height: 24px;
		}
		div.date_wrapper .lines div {
			margin-left: 220px;
			line-height: 21px;
		}		

		div.drum-wrapper {
			float: left;
		}
		div.drum figure {
			text-align: left;
		}
		#drum_hours figure, 
		#drum_date figure {
			text-align: right;
		}
		#drum_date, #drum_to_date {
			margin-left: 10px;
			margin-right: 5px;
		}
		#drum_date,
		#drum_hours, 
		#drum_minutes {
			width: 30px;
		}
		#drum_hours {
			margin-left: 10px;
		}
		#drum_minutes {
			margin-left: 4px;
		}
		#drum_month {
			width: 90px;
		}
		#drum_fullYear {
			width: 45px;
		}
		#drum_hours .dial div {
			margin: 0 7px;
		}
		#drum_minutes .dial div {
			margin: 0 2px;
		}
	</style>
	<script>
		Hammer.plugins.fakeMultitouch();

		function getIndexForValue(elem, value) {
			for (var i=0; i<elem.options.length; i++)
				if (elem.options[i].value == value)
					return i;
		}

		function pad(number) {
			if ( number < 10 ) {
				return '0' + number;
			}
			return number;
		}

		function update(datetime) {
			$("#date").drum('setIndex', datetime.date); 
			$("#month").drum('setIndex', datetime.month); 
						
		}
		function update2(datetime) {
			
			$("#month").drum('setIndex', datetime.month); 
						
		}

		$(document).ready(function () {
			$("select.date").drum({
				onChange : function (elem) {
					
					var pos =0;
					for(var i=0; i<elem.options.length;i++){
						if(elem.options[i].value == elem.value){
							pos = i;
						}
					}
						
					//alert(i);
					$("#selected").val(elem.value);
					//$("#month").val(elem.value);
					//alert($("#month").val());
					update({date:pos,month:pos});
					}
				
			});
			
			
			update({date:'1',month:'1'});
		});
	</script>
</head>
<body>
<h1>DrumJS Datetime Picker</h1>
<div class="date_wrapper outside">
	<div class="date_header">
		<span class="title">Date Time:</span>
		<span class="selection"></span>
	</div>
	<input type="name" id="selected" value="1">
	<form name="date">
		<div class="lines"><div>:</div></div>
		<select class="date" id="date" name="date">
			<option value="11">1.</option>
			<option value="12">2.</option>
			<option value="13">3.</option>
			<option value="14">4.</option>
			<option value="15">5.</option>
			<option value="16">6.</option>
			<option value="17">7.</option>
			<option value="18">8.</option>
			<option value="19">9.</option>
			<option value="110">10.</option>
			<option value="111">11.</option>
			<option value="112">12.</option>
			<option value="113">13.</option>
			<option value="114">14.</option>
			<option value="115">15.</option>
			<option value="116">16.</option>
			<option value="117">17.</option>
			<option value="118">18.</option>
			<option value="119">19.</option>
			<option value="120">20.</option>
			<option value="121">21.</option>
			<option value="122">22.</option>
			<option value="123">23.</option>
			<option value="124">24.</option>
			<option value="125">25.</option>
			<option value="126">26.</option>
			<option value="127">27.</option>
			<option value="128">28.</option>
			<option value="129">29.</option>
			<option value="130">30.</option>
			<option value="131">31.</option>
		</select>
		<select class="date" id="month" name="month">
			<option value="11">1.</option>
			<option value="12">2.</option>
			<option value="13">3.</option>
			<option value="14">4.</option>
			<option value="15">5.</option>
			<option value="16">6.</option>
			<option value="17">7.</option>
			<option value="18">8.</option>
			<option value="19">9.</option>
			<option value="110">10.</option>
			<option value="111">11.</option>
			<option value="112">12.</option>
			<option value="113">13.</option>
			<option value="114">14.</option>
			<option value="115">15.</option>
			<option value="116">16.</option>
			<option value="117">17.</option>
			<option value="118">18.</option>
			<option value="119">19.</option>
			<option value="120">20.</option>
			<option value="121">21.</option>
			<option value="122">22.</option>
			<option value="123">23.</option>
			<option value="124">24.</option>
			<option value="125">25.</option>
			<option value="126">26.</option>
			<option value="127">27.</option>
			<option value="128">28.</option>
			<option value="129">29.</option>
			<option value="130">30.</option>
			<option value="131">31.</option>
		</select>
		</form>
</div>
</body>
</html>
