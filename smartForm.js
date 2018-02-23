// Your jQuery goes here
var userData = {

	name: '',
	email: '',

	html: [],
	css: [],
	js: [],

	htmlSkill: null,
	cssSkill: null,
	jsSkill: null,
	position: "welcome"
};

var strUserData;
var showPage;

console.log(localStorage.getItem('userData'));
if(localStorage.getItem(userData)){

userData = JSON.parse(localStorage.getItem(userData));

$('#welcome').hide();
$(userData.currentQuestion).show();
$('#name').val(userData.name);
$('#email').val(userData.email);


} else{
	localStorage.setItem('userData',JSON.stringify(userData));
}

function validateName(name){
		var re = /^[A-z ]+$/;
		return re.test(name);
	}

	function validateEmail(email){
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}




$('#start').click(function(){
	console.log("start");
	$('#welcome').hide();
	$('#q1').show();
	userData.currentQuestion = "#q1";
	localStorage.setItem('userData',JSON.stringify(userData));

});


$('#q1next').click(function(event){
		if(validateEmail( $("#email").val()) && validateName( $("#name").val() ))
		{

			userData.name = $("#name").val();
			userData.email = $("#email").val();

			strUserData = JSON.stringify(userData);

			userData.position = "q2";
			localStorage.setItem("lPos", userData.position);// position
			localStorage.setItem("lObj", strUserData);

			$("#q1").hide();
			$("#q2").show();
		}

		else{

			if(validateName( $("#name").val() ) && !validateEmail( $("#email").val() ))
			{

				$("#email").focus();
				alert("ERROR: Invalid Email Input.");
			}

			else if(!validateName( $("#name").val() ) && validateEmail( $("#email").val() ))
			{
				$("#name").focus();
				alert("ERROR: Invalid Name Input.");
			}

			else if(!validateName( $("#name").val() ) && !validateEmail( $("#email").val() )){
				$("#name").focus();
				alert("ERROR: Invalid Name & Email Input.");
			}
		}
	});

$('#name').change(function(event){

	console.log($('#name').val());
});

$(".fet").click(function(event){
		var chosen = $(this).text();

		if(chosen == "HTML"){
			$("#q2").hide();
			userData.position = "q2a";
			localStorage.setItem("lPos", userData.position);
			$("#q2a").show();
		}
		else if(chosen == "CSS") {
			$("#q2").hide();
			userData.position = "q2b";
			localStorage.setItem("lPos", userData.position);
			$("#q2b").show();
		}
		else{
			$("#q2").hide();
			userData.position = "q2c";
			localStorage.setItem("lPos", userData.position);
			$("#q2c").show();
		}
	});

$("#htmlPrev").click(function(event){
		 var eyeD, i, temp, found = false;
		 userData.html = [];

		 for(i = 111; i <=114; i++)
		 {
			 eyeD = "#" + i.toString();
			 console.log("eyeD = " + eyeD + ", " + typeof eyeD);


			 if( $(eyeD).prop("checked") == true){
				  console.log(eyeD + " is checked");
				 	userData.html.push(eyeD);
			 }
			 else{
				 if( userData.html.indexOf(eyeD) != -1){
					 	temp = userData.html.indexOf(eyeD);
						userData.html.splice(temp, 1);
				 }
			 }
		 }

		 for(var i = 121; i <= 124; i++)
		 {
			 eyeD = "#" + i.toString();
			 console.log("eyeD = " + eyeD + ", " + typeof eyeD);


			 if( $(eyeD).prop("checked") == true){

				  console.log(eyeD + " is checked");
				 	userData.html.push(eyeD);
			 }
			 else{
				 if( userData.html.indexOf(eyeD) != -1){
					 	temp = userData.html.indexOf(eyeD);
						userData.html.splice(temp, 1);
				 }
			 }
		 }

		 console.log(userData.html);

		 if( userData.html.length >= 1){

			 $("#q2a").hide();
			 userData.position = "q2";
			 localStorage.setItem("lPos", userData.position);

			 strUserData = JSON.stringify(userData);
			 localStorage.setItem("lObj", strUserData);
			 $("#q2").show();
		 }
	});

$("#htmlNext").click(function(event){
		var eyeD, i, temp, found = false;
		userData.html = [];


		for(i = 111; i <=114; i++)
		{
			eyeD = "#" + i.toString();
			console.log("eyeD = " + eyeD + ", " + typeof eyeD);

			if( $(eyeD).prop("checked") == true){
				 console.log(eyeD + " is checked");
				 userData.html.push(eyeD);
			}
			else{
				if( userData.html.indexOf(eyeD) != -1){
					 temp = userData.html.indexOf(eyeD);
					 userData.html.splice(temp, 1);
				}
			}
		}

		for(var i = 121; i <= 124; i++)
		{

			eyeD = "#" + i.toString();


			if( $(eyeD).prop("checked") == true){
				 console.log(eyeD + " is checked");
				 userData.html.push(eyeD);
			}
			else{
				if( userData.html.indexOf(eyeD) != -1){
					 temp = userData.html.indexOf(eyeD);
					 userData.html.splice(temp, 1);
				}
			}
		}
		console.log(userData.html);
		console.log(userData.html)
		if( userData.html.length >= 1 && userData.css.length >= 1 && userData.js.length >= 1)
		{

			userData.position = "q3";
			localStorage.setItem("lPos", userData.position);

			strUserData = JSON.stringify(userData);
			localStorage.setItem("lObj", strUserData);

			$("#q2a").hide();
			$("#q3").show();
		}else{
			$('#q2a').hide();
			userData.position = "q2";
			localStorage.setItem("lPos", userData.position);

			strUserData = JSON.stringify(userData);
			localStorage.setItem("lObj", strUserData);
			$('#q2').show();
		}
	});

$("#cssPrev").click(function(event){
		var eyeD, i, temp, found = false;
		userData.css = [];


		for(i = 211; i <=214; i++)
		{
			eyeD = "#" + i.toString();
			console.log("eyeD = " + eyeD + ", " + typeof eyeD);


			if( $(eyeD).prop("checked") == true){
				 console.log(eyeD + " is checked");
				 userData.css.push(eyeD);
			}
			else{
				if( userData.css.indexOf(eyeD) != -1){
					 temp = userData.css.indexOf(eyeD);
					 userData.css.splice(temp, 1);
				}
			}
		}

		for(var i = 221; i <= 224; i++)
		{
			eyeD = "#" + i.toString();

			if( $(eyeD).prop("checked") == true){

				 console.log(eyeD + " is checked");
				 userData.css.push(eyeD);
			}
			else{
				if( userData.css.indexOf(eyeD) != -1){
					 temp = userData.css.indexOf(eyeD);
					 userData.css.splice(temp, 1);
				}
			}
		}
		console.log(userData.css);
		if( userData.css.length >= 1){
			strUserData = JSON.stringify(userData);
			console.log("strUserData " + strUserData);

			userData.position = "q2";
			localStorage.setItem("lPos", userData.position);

			strUserData = JSON.stringify(userData);
			localStorage.setItem("lObj", strUserData);


			$("#q2b").hide();
			$("#q2").show();
		}
	});

	$("#cssNext").click(function(event){
		var eyeD, i, temp, found = false;
		userData.css = [];


		for(i = 211; i <=214; i++)
		{

			eyeD = "#" + i.toString();

			if( $(eyeD).prop("checked") == true){

				 userData.css.push(eyeD);
			}
			else{
				if( userData.css.indexOf(eyeD) != -1){
					 temp = userData.css.indexOf(eyeD);
					 userData.css.splice(temp, 1);
				}
			}
		}

		for(var i = 221; i <= 224; i++)	// push the response if they are selected
		{

			eyeD = "#" + i.toString();
			if( $(eyeD).prop("checked") == true){
		 console.log(eyeD + " is checked");
				 userData.css.push(eyeD);
			}
			else{
				if( userData.css.indexOf(eyeD) != -1){
					 temp = userData.css.indexOf(eyeD);
					 userData.css.splice(temp, 1);
				}
			}
		}
		console.log(userData.css);
		if( userData.html.length >= 1 && userData.css.length >= 1 && userData.js.length >= 1)
		{

			strUserData = JSON.stringify(userData);
			console.log("strUserData " + strUserData);

			$("#q2b").hide();
			userData.position = "q3";
			localStorage.setItem("lPos", userData.position);

			strUserData = JSON.stringify(userData);
			localStorage.setItem("lObj", strUserData);

			$("#q3").show();
		}else{
			strUserData = JSON.stringify(userData);
			console.log("strUserData " + strUserData);

			$('#q2b').hide();
			userData.position = "q2";
			localStorage.setItem("lPos", userData.position);
			strUserData = JSON.stringify(userData);
			localStorage.setItem("lObj", strUserData);

			$('#q2').show();
		}

	});

	$("#jvsPrev").click(function(event){

		var eyeD, i, temp, found = false;
		userData.js = [];

		for(i = 311; i <= 314; i++)
		{
			eyeD = "#" + i.toString();
			console.log("eyeD = " + eyeD + ", " + typeof eyeD);

			if( $(eyeD).prop("checked") == true){
				 console.log(eyeD + " is checked");
				 userData.js.push(eyeD);
			}
			else{
				if( userData.js.indexOf(eyeD) != -1){
					 temp = userData.js.indexOf(eyeD);
					 userData.js.splice(temp, 1);
				}
			}
		}

		for(i = 321; i <= 324; i++)
		{

			eyeD = "#" + i.toString();
			console.log("eyeD = " + eyeD + ", " + typeof eyeD);

			if( $(eyeD).prop("checked") == true){
				 console.log(eyeD + " is checked");
				 userData.js.push(eyeD);
			}
			else{
				if( userData.js.indexOf(eyeD) != -1){
					 temp = userData.js.indexOf(eyeD);
					 userData.js.splice(temp, 1);
				}
			}
		}
		console.log(userData.js);
		if( userData.html.length >= 1){
			strUserData = JSON.stringify(userData);
			console.log("strUserData " + strUserData);

			$("#q2c").hide();
			userData.position = "q2";
			localStorage.setItem("lPos", userData.position);
			localStorage.setItem("lObj", strUserData);
			$("#q2").show();
		}
	});

	$("#jvsNext").click(function(event){

		var eyeD, i, temp, found = false;
		userData.js = [];

		for(i = 311; i <= 314; i++)
		{
			eyeD = "#" + i.toString();
			console.log("eyeD = " + eyeD + ", " + typeof eyeD);

			if( $(eyeD).prop("checked") == true){
				 console.log(eyeD + " is checked");
				 userData.js.push(eyeD);
			}
			else{
				if( userData.js.indexOf(eyeD) != -1){
					 temp = userData.js.indexOf(eyeD);
					 userData.js.splice(temp, 1);
				}
			}
		}

		for(i = 321; i <= 324; i++)
		{
			eyeD = "#" + i.toString();
			console.log("eyeD = " + eyeD + ", " + typeof eyeD);

			if( $(eyeD).prop("checked") == true){
				 console.log(eyeD + " is checked");
				 userData.js.push(eyeD);
			}
			else{
				if( userData.js.indexOf(eyeD) != -1){
					 temp = userData.js.indexOf(eyeD);
					 userData.js.splice(temp, 1);
				}
			}
		}
		console.log(userData.js);
		if( userData.html.length >= 1 && userData.css.length >= 1 && userData.js.length >= 1)
		{
			strUserData = JSON.stringify(userData);
			console.log("strUserData " + strUserData);

			$("#q2c").hide();
			userData.position = "q3";
			localStorage.setItem("lPos", userData.position);
			strUserData = JSON.stringify(userData);
			localStorage.setItem("lObj", strUserData);

			$("#q3").show();
		}else{


			userData.position = "q2";
			strUserData = JSON.stringify(userData);

			localStorage.setItem("lPos", userData.position);
			strUserData = JSON.stringify(userData);
			localStorage.setItem("lObj", strUserData);

			$('#q2c').hide();
			$('#q2').show();
		}
	});


	$("#q3Prev").click(function(event){

		 userData.position = "q2";

		 localStorage.setItem("lPos", userData.position);
		 localStorage.setItem("lObj", strUserData);
		 strUserData = JSON.stringify(userData);

		 $("#q3").hide();
		 $("#q2").show();
	});

	$("#q3Prev").click(function(event){

		var var1 = var2 = var3 = null;

		var1 = $("input[name='radio1']:checked").val();
		userData.htmlSkill = var1;
		console.log("html skill: " + userData.htmlSkill);

		var2 = $("input[name='radio2']:checked").val();
		userData.cssSkill = var2;
		console.log("css skill: " + userData.cssSkill);

		var3 =  $("input[name='radio3']:checked").val();
		userData.jsSkill = var3;
		console.log("jvs skill: " + userData.jsSkill + " " + var3);

		if(userData.htmlSkill!=null && userData.cssSkill!=null && userData.jsSkill!=null){
			userData.position = "q2";
			localStorage.setItem("lPos", userData.position);
			strUserData = JSON.stringify(userData);
			localStorage.setItem("lObj", strUserData);

		  $("#q3").hide();
			$("#q2").show();
		}
		else{
			alert("Make sure you have chosen your expertise for HTML, CSS, and JavaScript.");
		}
	});

	$("#q3Next").click(function(event){
		var var1 = var2 = var3 = null;

		var1 = $("input[name='radio1']:checked").val();
		userData.htmlSkill = var1;
		console.log("html skill: " + userData.htmlSkill);


		var2 = $("input[name='radio2']:checked").val();
		userData.cssSkill = var2;
		console.log("css skill: " + userData.cssSkill);

		var3 =  $("input[name='radio3']:checked").val();
		userData.jsSkill = var3;
		console.log("jvs skill: " + userData.jsSkill);

		if(userData.htmlSkill!=null && userData.cssSkill!=null && userData.jsSkill!=null){

			userData.position = "thanks";
			localStorage.setItem("lPos", userData.position);
			strUserData = JSON.stringify(userData);
			localStorage.setItem("lObj", strUserData);

			$("#q3").hide();
			$("#thanks").show();
		}
		else{
			alert("Make sure you have chosen your expertise for HTML, CSS, and JavaScript.");
		}
	});

	$("#viewAns").click(function(event){
		userData.position = "showRes";
		localStorage.setItem("lPos", userData.position);
		strUserData = JSON.stringify(userData);
		localStorage.setItem("lObj", strUserData);



		$("#thanks").hide();
		$("#showRes").show();
		alert("HTML skill" + userData.htmlSkill);
		alert("CSS skill" + userData.cssSkill);
		alert("JS skill" + userData.jsSkill);

	});

	$("#delAns").click(function(event){
		userData.name= userData.email = userData.htmlSkill = userData.jsSkill = userData.cssSkill= '';
		userData.html = userData.css = userData.js = [];
		strUserData = JSON.stringify(userData);
		console.log(userData);

		$("#name").val('');
		$("#exampleInputEmail1").val('');


		$('input[type=checkbox]').prop('checked', false);

		$('input[type=radio]').prop('checked', false);
		userData.position = "welcome";
		localStorage.setItem("lPos", userData.position);
		strUserData = JSON.stringify(userData);
		localStorage.setItem("lObj", strUserData);

		$("#thanks").hide();
		$("#welcome").show();
});
