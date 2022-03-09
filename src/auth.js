const auth = firebase.auth()

function signUpNewUser(email, password){
    //create User with email and password
    auth.createUserWithEmailAndPassword(email, password).catch(function (error) {
        //handle errors here
        let errorCode = error.code;
        let errorMessage = error.message;
        alert(errorMessage);
        //cont...
    });
    updateUserDetails()
};

function logInUser(email, password){
   auth.signInWithEmailAndPassword(email, password).catch(function (error) {
       //handle errors here
       let errorCode = error.code
       let errorMessage = error.message
       console.log(errorCode)
       console.log(errorMessage)
   })
}

function signUserOut(){
    auth.signOut().then(function() {
        //sign out successful.
        console.log("User successfully logged out.")
    }).catch(function (error){
        //erorr happened
        console.log(error)
    })
}

//auth state observer, gets user data on login
auth.onAuthStateChanged(function (user) {
    if (user) {
        //user is signed in
        let displayName = user.displayName
        let email = user.email;
        let emailVerified = user.emailVerified
        let photoURL = user.photoURL
        let uid = user.uid 
    }
})

function updateUserDetails(){
    user.updateProfile({
        displayName: "Updated User's Name",
        photoURL: "https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg"
    })
}

function passwordReset(email){
    auth.sendPasswordResetEmail(email).then(function(){
        //Email Sent
        console.log("Password reset sent.")
    }).catch(function(error){
        //error has occurred
        console.log("Password reset unsuccessful")
    })
}
