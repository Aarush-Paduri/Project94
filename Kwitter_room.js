label = localStorage.getItem("user_name", username);
document.getElementById("username").innerHTML = label;

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAMtRmQESUkGWgFLyorUWViaVzrKRDl_O4",
    authDomain: "project-94-7aade.firebaseapp.com",
    projectId: "project-94-7aade",
    storageBucket: "project-94-7aade.appspot.com",
    messagingSenderId: "966999185519",
    appId: "1:966999185519:web:f1d476461d59df50d3d59a"
  };

  // Initialize Firebase
  var app = initializeApp(firebaseConfig);