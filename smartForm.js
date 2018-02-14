// Your jQuery goes here

var userData = {
  name : '' ,
  email: '',
  html:{likes:[], dislikes:[]},
  js:{likes:[], dislikes:[]},
  css:{likes:[], dislikes:[]},
  strength:{css:'',js:'',html:''},
  currentQuestion:'#welcome'
};
console.log(localStorage.getItem('userData'));
if(localStorage.getItem(userData)){
  userData=JSON .parse(localStorage.getItem('userData'));
  $(userData.currentQuestion).show();
$('#welcome').hide();
$('#name').val(userData.name);
$('#email').val(userData.email);
}
else{
  localStorage.setItem('userData',JSON.stringify(userData));
}

$('#start').click(function(){
 
  $('#welcome').hide();
  $('#q1').show();
});
$('#name').change(function (event) {
  console.log($('#name').val());
})

$('#email').change(function (event) {
  console.log($('#email').val());
})

$('#q1Next').click(function(){
  
  if($('#name').val() &&  $('#email').val()){
  userData.name = $('#name').val();
  userData.email = $('#email').val();
  localStorage.setItem('userData',JSON.stringify(userData));
  $('#q1').hide();
  $('#q2').show();
}
else{
  alert('please enter your name and email');
  $('#q1').hide();
  $('#q2').show();

}
});
