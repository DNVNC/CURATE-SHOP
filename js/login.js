// check if user is logged in
firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
    	// if logged in, display user_div html
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";

      var user = firebase.auth().currentUser;

      if(user != null){
        // if logged in, welcome user with email
      	var email = user.email;
      	document.getElementById("userpara").innerHTML = "Welcome User: " + email;
      }

    } else {
    	// User not logged in, display login_div html
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
    }
  });

// login function to initiate on clicking the button
function login() {

	var userEmail = document.getElementById("email_field").value;
	var userPass = document.getElementById("password_field").value;

  // authenticate and sign in with Firebase
	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  	// Handle Errors here.
  	var errorCode = error.code;
  	var errorMessage = error.message;

  	window.alert ("Error: " + errorMessage);
  	// ...
	});

}

// let user log out
function logout () {
	firebase.auth().signOut();
}
