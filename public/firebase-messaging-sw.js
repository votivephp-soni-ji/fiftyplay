importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

// Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDdL7qLEaka5gKmXmyhHm1LSU3Ot6eSjeg",
    authDomain: "fiftyplay-7105d.firebaseapp.com",
    projectId: "fiftyplay-7105d",
    storageBucket: "fiftyplay-7105d.firebasestorage.app",
    messagingSenderId: "1072214002744",
    appId: "1:1072214002744:web:083e3094891d1f3c38eacd",
    measurementId: "G-F8ZDTLXZBS"
};

// Initialize messaging
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
    console.log("[firebase-messaging-sw.js] Received background message:", payload);

    const notificationTitle = payload.notification?.title || "New Notification";
    const notificationOptions = {
        body: payload.notification?.body || "",
        icon: "/images/notity_favicon.png",
        data: {
            url: "https://thefiftyplay.com",
        }
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

