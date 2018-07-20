var mainApp = {};

(function(){
	var firebase = app_fireBase;
	var uid = null;
	firebase.auth()onAutStateChanged(function(user){
		if (user){
			// user is signed in.
			uid = user.uid;
			
		}else{
			// redirect to login page
			uid=null;
			window.location.replace("login.html");
			
		}
	});
	function logOut(){
		firebase.auth().signOut();
	}
	
	mainApp.logOut = logOut;
	
})()
