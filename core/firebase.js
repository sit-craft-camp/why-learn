import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyBOYdgrulM1Jff3yH4KtdpxmAA5Ffi0DuE",
    authDomain: "whylearn-d67ad.firebaseapp.com",
    databaseURL: "https://whylearn-d67ad.firebaseio.com",
    projectId: "whylearn-d67ad",
    storageBucket: "whylearn-d67ad.appspot.com",
    messagingSenderId: "176255058185"
}

const api = firebase.initializeApp(config);

export default api

