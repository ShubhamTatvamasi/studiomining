// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyCSGARfYJNjpxjDwSlRe4w2RzuhyDo4mZE",
    authDomain: "studiomining-4754f.firebaseapp.com",
    databaseURL: "https://studiomining-4754f.firebaseio.com",
    projectId: "studiomining-4754f",
    storageBucket: "studiomining-4754f.appspot.com",
    messagingSenderId: "409700175940"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var rig = getInputVal('rig'); 
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var address = getInputVal('address');

  // Save message
  saveMessage(rig, name, email, phone, address);

  // Show alert
  document.querySelector('.rigbook').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.rigbook').style.display = 'none';
  },5000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(rig, name, email, phone, address){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    rig: rig,
    name: name,
    email: email,
    phone: phone,
    address: address
  });
}