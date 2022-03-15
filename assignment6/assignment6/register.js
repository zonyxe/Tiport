window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = check;
    form.onreset = nothing;
}

function nothing()
{
    var error = document.getElementById("errormsg");
        error.textContent = null;
}

function check()
{
    var z =document.forms["myForm"]["username"];
    var x =document.forms["myForm"]["password1"];
    var y =document.forms["myForm"]["password2"];
    var id = z.value;
    sessionStorage.setItem("RegisId",id);
    var pass = y.value;
    sessionStorage.setItem("RegisPass",pass);
    if(x.value != y.value)
    {
        var error = document.getElementById("errormsg");
        error.textContent ="Passwordไม่ตรงกัน";
        return false;
    }
    else{
        return true;
    }
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}