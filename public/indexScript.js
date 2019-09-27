function promptLogin(){
	var loginForm = document.getElementById("loginForm");
	loginForm.style.display='block';
	if (document.getElementById("joinForm").style.display!='none'){
		console.log("yep");
		document.getElementById("joinForm").style.display="none";
	}
}

function promptJoin(){
	var joinForm = document.getElementById("joinForm");
	joinForm.style.display='block';
	if(document.getElementById("loginForm").style.display!="none"){
		document.getElementById("loginForm").style.display="none";
	}
}

