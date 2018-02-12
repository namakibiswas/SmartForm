// Your jQuery goes here

var userData = {
  name : '' ,
  email: '',
  html:{likes:[], dislikes[]},
  js:{likes:[], dislikes[]},
  css:{likes:[], dislikes[]},
  strength:{css:'',js:'',html''},
  currentQuestion:'#welcome'
};
$('#start').click(function(){
  console.log("start");
  $('#welcome').hide();
  $('#q1').show();
});
$('#name').change(function (event) {
  console.log($('#name').val());
})

$('#email').change(function (event) {
  console.log($('#email').val());
})

s('#eq1Next').click(function(){
  console.log("Q1 Next");
  if(userData.name=('#name').val() && userData.email =('#email').val()){}
  userData.name =('name').val();
  userData.email =('email').val();
}
else{
  alert('please enter your name and email');
  $('#eq1').hide();
  $('#q2').show();

}
});
