// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBtDWno7rQiaYo3Lt6XXBaLdzq6wF8s1w4",
    authDomain: "lets-chat-f1820.firebaseapp.com",
    databaseURL: "https://lets-chat-f1820-default-rtdb.firebaseio.com",
    projectId: "lets-chat-f1820",
    storageBucket: "lets-chat-f1820.appspot.com",
    messagingSenderId: "465078521850",
    appId: "1:465078521850:web:1c4b730d9a206ce5161e43"
  };
  


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addRoom()
{
    new_room = document.getElementById("new_room").value;
    
    firebase.database().ref("/").child(new_room).update({
        purpose : "adding Room"
    });
    
    localStorage.setItem("Room_selected", new_room);

    window.location = "chat_page.html";
   
}


function get_Data(){
    firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("rooms").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name - " + Room_names);
      
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      
       document.getElementById("rooms").innerHTML += row;
      
     });
   });

}

get_Data();


function redirectToRoomName(room_selected){
    localStorage.setItem("Room_selected", room_selected);

    window.location = "chat_page.html";
}