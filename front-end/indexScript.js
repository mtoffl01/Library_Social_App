function promptLogin(){
	console.log("hiii");
	var loginForm = document.getElementById("loginForm");
	loginForm.style.display='block';
	if (document.getElementById("joinForm").style.display!='none'){
		console.log("yep");
		document.getElementById("joinForm").style.display="none";
	}
	//hideButtons();
}

function promptJoin(){
	var joinForm = document.getElementById("joinForm");
	joinForm.style.display='block';
	if(document.getElementById("loginForm").style.display!="none"){
		document.getElementById("loginForm").style.display="none";
	}
}

/*hide buttons for now. Hide > Remove because a user can "cancel" and return to the other option
function hideButtons(){
	document.getElementById("login").style.display = "none";
	document.getElementById("join").style.display = "none";
}*/
