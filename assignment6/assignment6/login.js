window.onload = loginLoad;
function loginLoad(){
	var login = document.getElementById("myLogin");
	login.onsubmit = checkLogin;
}


function checkLogin()
{
	var checkId = sessionStorage.getItem("RegisId");
	console.log(checkId);
	var checkPass = sessionStorage.getItem("RegisPass");
	console.log(checkPass);
	var Id = document.forms["myLogin"]["username"];
    var passlog = document.forms["myLogin"]["password"];
	if(Id.value == checkId)
	{
		if(passlog.value == checkPass)
		{
			alert("Login Success")
		}
		else{
			alert("Login Failed กรุณากรอกใหม่อีกครั้งค่ะ")
		}
	}
	else if(Id.value != checkId)
	{
		alert("Login Failed กรุณากรอกใหม่อีกครั้งค่ะ")
	}
	return false;
	
}

			