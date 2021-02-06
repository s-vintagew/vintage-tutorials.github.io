function valid()
{
	var x= document.frm_signin.u_mail.value;
	var a= document.frm_signin.u_name.value;
	var b= document.frm_signin.u_pass.value;
	var y= x.indexOf("@");
	if(a=="")
	{
		alert("Invalid Username");
		return false;
	}
    if(y=="")
    {
		alert("Invalid Email");
		return false;
	}    
	if(b=="")
	{
		alert("Invalid Password");
		return false;
	}
	if(y!=-1)
	{
		var z= x.substring(y);
		if (z=='@gmail.com'||z=='@yahoo.com'||z=='@protonmail.com'||z=='@rediffmail.com'||z=='@hotmail.com') 
		{
			return true;
		}
		else
		{
			alert("Invalid Email");
            return false;
		}
	}
}
function onsub()
{
    if(document.frm_signin.u_name.value!="")
        {
        if(document.frm_signin.u_mail.value!="")
            {
            if(document.frm_signin.u_pass.value!="")
                {
                    document.getElementById("sub").disabled=false;
                }
            }
        }
}
function turnon()
{
    var ctr=0;
    if(document.frm_signin.u_name.value!="")
        {
           ctr++; 
        }
    if(document.frm_signin.u_mail.value!="")
        {
           ctr++; 
        }
    if(document.frm_signin.u_pass.value!="")
        {
           ctr++; 
        }
    if(ctr==3)
        {
            document.getElementById("sub").disabled=false;
        }
    else
        {
            document.getElementById("sub").disabled=true;
        }
}