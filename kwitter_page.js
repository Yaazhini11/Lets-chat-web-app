var firebaseConfig = {

    apiKey: "AIzaSyAR07UXpueLgTQTd_QADOhjAdufhJljmXE",

    authDomain: "emeralds-and-rubies-4bcef.firebaseapp.com",

    databaseURL: "https://emeralds-and-rubies-4bcef-default-rtdb.firebaseio.com",

    projectId: "emeralds-and-rubies-4bcef",

    storageBucket: "emeralds-and-rubies-4bcef.appspot.com",

    messagingSenderId: "824193603940",

    appId: "1:824193603940:web:a3c8c835f39c79be190271"

  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);



user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function logout() {
    localStorage.removeItem("Username");
    localStorage.removeItem("Roomname");
    window.location = "Kwitter.html";
}

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}

