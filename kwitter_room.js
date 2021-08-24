// Your web app's Firebase configuration
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
  
  
      user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";
  
      function addroom() {
             room_name = document.getElementById("room_name").value;
  
             firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"
            });
    
            localStorage.setItem("Room_name",room_name);
        
            window.location = "kwitter_page.html";
      }
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
            console.log("room_name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML += row;
      //End code
      });});}
  getData();
  function redirectToroomname(name){
      console.log(name);
      localStorage.setItem("Roomname",name);
      window.location = "kwitter_page.html";
  }
  function logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem("Roomname");
      window.location = "Kwitter.html";
  }
  
  function updateLike(message_id)
  {
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
  
      firebase.database().ref(room_name).child(message_id).update({
          like : updated_likes
      });
  }