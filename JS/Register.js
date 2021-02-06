function validate()
{
    if(document.frm.fname.value=="")
        {
            alert('First Name Required');
            document.frm.fname.focus();
            return false;
        }
    if(document.frm.lname.value=="")
        {
            alert('last Name Required');
            document.frm.lname.focus();
            return false;
        }
    if(document.frm.uname.value=="")
        {
            alert('User Name Required');
            document.frm.uname.focus();
            return false;
        }
    if(document.frm.date.value=="date")
        {
            alert('Enter Date Of Birth');
            document.frm.uname.focus();
            return false;
        }
    if(document.frm.mon.value=="mon")
        {
            alert('Enter Date Of Birth');
            document.frm.uname.focus();
            return false;
        }
    if(document.frm.year.value=="year")
        {
            alert('Enter Date Of Birth');
            document.frm.uname.focus();
            return false;
        }
    if(document.frm.mail.value=="")
        {
            alert('Email Id Required');
            document.frm.mail.focus();
            return false;
        }
    if(document.frm.pass.value=="")
        {
            alert('Set Password');
            document.frm.pass.focus();
            return false;
        }
    if(document.frm.pass1.value=="")
        {
            alert('Confirm Password');
            document.frm.pass1.focus();
            return false;
        }
    
    var z= document.frm.mail.value.substring(document.frm.mail.value.indexOf("@"));
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
function check()
{
    if(document.frm.pass.value!=document.frm.pass1.value)
        {
            alert('Password Doesn\'t Match');
            document.frm.pass1.focus();
        }
    
}
function but()
{
    if(document.frm.agree.checked==true)
        {
            var x = document.getElementById("sub1");
            x.disabled = false;
        }
    else{
            var x = document.getElementById("sub1");
            x.disabled = true;
    }
    var y = document.getElementById("sub");
    y.disabled=true;
}