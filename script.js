var pass = document.getElementById("pass");
var cpass = document.getElementById("cpass");
var name1 = document.getElementById("name");
var username = document.getElementById("username");
var email = document.getElementById("email");
var btn = document.getElementById("btn");
var chk = document.getElementById("chk");


console.log(btn);

btn.onclick = (e)=>{
    e.preventDefault();
    if(chk.checked){
        if(pass.value==cpass.value){
            alert(`Thank You for Registering with us and We welcome you to our family , ${name1.value}`);
        }
        else{
            alert("Error as both Password doesn't match");
        }
        pass.value="";
        cpass.value="";
        name1.value="";
        username.value="";
        email.value="";
    }
    else{
        alert("Accept to the terms and condition before creating account.")
    }
}