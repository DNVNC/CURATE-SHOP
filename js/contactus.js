const dbRef = firebase.database().ref();
const detailsRef = dbRef.child('details');
detailsRef.on('child_added', function(snapshot, prevChildKey) {
  var newPost = snapshot.val();
});

// record messages to Firebase database  
function send() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var message = document.getElementById('msg').value;
  detailsRef.push().set({
    name: name,
    email: email,
    phone: phone,
    message: message
  });
}
