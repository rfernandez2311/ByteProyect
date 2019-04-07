function sign_up(){
    var inputs = document.querySelectorAll('.input_form_sign');
  document.querySelectorAll('.ul_tabs > li')[0].className=""; 
  document.querySelectorAll('.ul_tabs > li')[1].className="active"; 
    
    for(var i = 0; i < inputs.length ; i++  ) {
  if(i == 2  ){
  
  }else{  
  document.querySelectorAll('.input_form_sign')[i].className = "input_form_sign d_block";
  }
  } 
  
  setTimeout( function(){
  for(var d = 0; d < inputs.length ; d++  ) {
   document.querySelectorAll('.input_form_sign')[d].className = "input_form_sign d_block active_inp";  
     }
  
  
   },100 );
   document.querySelector('.link_forgot_pass').style.opacity = "0";
     document.querySelector('.link_forgot_pass').style.top = "-5px";
     document.querySelector('.btn_sign').innerHTML = "SIGN UP";    
    setTimeout(function(){
  
   document.querySelector('.terms_and_cons').style.opacity = "1";
    document.querySelector('.terms_and_cons').style.top = "5px";
   
    },500);
    setTimeout(function(){
      document.querySelector('.link_forgot_pass').className = "link_forgot_pass d_none";
   document.querySelector('.terms_and_cons').className = "terms_and_cons d_block";
    },450);
  
  }
  