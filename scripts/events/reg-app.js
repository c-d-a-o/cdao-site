import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js';
import { getFirestore, doc, setDoc } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js';
import { getDatabase, ref, set, get, remove } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js"

//replace with your own firebase config!
const app = initializeApp({
  apiKey: "AIzaSyBiAuOErf5f6G3OpnYI0fP6fmwJXWV8Wzo",
  authDomain: "cdao-fun.firebaseapp.com",
  databaseURL: "https://cdao-fun-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cdao-fun",
  storageBucket: "cdao-fun.appspot.com",
  messagingSenderId: "832916817154",
  appId: "1:832916817154:web:acea1d9252db6eca522e1b",
  measurementId: "G-2KRD0Z04P3"
});

const rtDatabase = getDatabase(app);
const firestore = getFirestore(app);

const form = document.getElementById("registration");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = toTitleCase(document.getElementById("name").value.trim());
  const branch = document.getElementById("branch").value.toUpperCase();
  const id = document.getElementById("rollNo").value;
  const phoneNo = document.getElementById("phoneNo").value.replace(/\s/g, "").slice(-10);
  const email = document.getElementById("email").value;

  //required fields: name, branch, id, phoneNo, email: done!
  if (id.length != 8 || isNaN(id)) { 
    alert("Aw Snap! invalid roll no.");
    return;
  }
  if (phoneNo.length != 10 || isNaN(phoneNo)) {
    alert("Aw Snap! invalid phone no.");
    return;
  }

  get(ref(rtDatabase, `users/${id}`))
  .then((snapshot) => {
    if (snapshot.exists()) {
      alert("Whoop! You already registered!");
      form.reset();
    } else {

      const newData = {
        name: name,
        branch: branch,
        roll: id,
        mobile: phoneNo,
        email: email
      };
  
      set(ref(rtDatabase, `users/${id}`), newData)
        .then(() => {
          setDoc(doc(firestore, 'users', id), newData)
            .then(() =>{
              alert("Registration Successful!")
              form.reset();
            })
        })
        .catch((error) => {
          console.error(error);
          get(ref(rtDatabase, `users/${id}`))
            .then((snapshot) => {
            if (snapshot.exists()) {
              remove(ref(rtDatabase, `users/${id}`))
            }
          });
          alert("Registration failed! Please try again.")
        });
    }
  })
  .catch((error) => {
    alert("Oops! Please try after sometimes.")
    console.error(error);
  });
});

function toTitleCase(str) {
  return str.toLowerCase().replace(/(?:^|\s|-)\w/g, function(match) {
    return match.toUpperCase();
  });
}
document.getElementById("name").addEventListener("input", function(event) {
  event.target.value = toTitleCase(event.target.value);
});
document.getElementById("branch").addEventListener("input", function(event) {
  event.target.value = event.target.value.toUpperCase();
});
