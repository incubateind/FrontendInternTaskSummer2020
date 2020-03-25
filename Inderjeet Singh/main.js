
 function validate(){
    var uname=document.getElementById("uname");
    var pswd=document.getElementById("pswd");

    if(uname.value.trim()=="")
    {
      
      uname.style.border="1px solid red";
  
        return false;
    }
    else if(pswd.value.trim()=="")
    {
       
       pswd.style.border="1px solid red";
      
         return false;
    }
    else if(pswd.value.trim().length<5)
    {
        
  
        document.getElementById("label-1").style.visibility="visible";
            return false;

    }   

    else if(pswd1.value.trim()=="")
    {
       
       pswd1.style.border="1px solid red";
      
         return false;
    }

    else if(pswd.value!=pswd1.value)
    {
       
         document.getElementById("label-2").style.visibility="visible";
         return false;
    }

    else if(phone.value.trim()=="")
    {
        phone.style.border="1px solid red";
        return false;
    }
 
     
    
    else if(phone.value.length !=10)
    {
        
        document.getElementById("label-3").style.visibility="visible";
        return false;

    }
    else
    {

        return true;
        
    }
}
