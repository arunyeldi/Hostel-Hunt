const firebaseConfig = {
    apiKey: "AIzaSyA_-7mA7y7j_egzF2ahaVl91mW7OrJp9H0",
    authDomain: "contactform-bc623.firebaseapp.com",
    databaseURL: "https://contactform-bc623-default-rtdb.firebaseio.com",
    projectId: "contactform-bc623",
    storageBucket: "contactform-bc623.appspot.com",
    messagingSenderId: "2904094407",
    appId: "1:2904094407:web:6952611a38a4f77ac530e2"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("stname");
    var age = getElementVal("age");
    var emailid = getElementVal("email");
    var college = getElementVal("sycfl");
    var phn = getElementVal("phone");
    var place = getElementVal("place");
    saveMessages(name, age, emailid, college, phn, place);

    // enable alert
    document.querySelector(".alert").style.display = "block";

    // remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    // reset the form
    document.getElementById("contactForm").reset();
}

const saveMessages = (name, age, emailid, college, phn, place) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        age: age,
        emailid: emailid,
        college: college,
        phoneNo: phn,
        place: place,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};
