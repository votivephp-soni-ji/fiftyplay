importScripts("https://www.gstatic.com/firebasejs/9.6.11/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.11/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyCmj9Y7h6irE0Byboc7OwHP_S9zD3IWdJE",
    authDomain: "fifty-play-web.firebaseapp.com",
    projectId: "fifty-play-web",
    storageBucket: "fifty-play-web.firebasestorage.app",
    messagingSenderId: "861598639028",
    appId: "1:861598639028:web:1ee0d964dba6917b72c8e1",
    measurementId: "G-WP6LK5EX14"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: "/logo192.png",
    });
});
