import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, OAuthProvider, signInWithPopup } from "firebase/auth";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Your Firebase config (from console)
const firebaseConfig = {
  apiKey: "AIzaSyDdL7qLEaka5gKmXmyhHm1LSU3Ot6eSjeg",
  authDomain: "fiftyplay-7105d.firebaseapp.com",
  projectId: "fiftyplay-7105d",
  storageBucket: "fiftyplay-7105d.firebasestorage.app",
  messagingSenderId: "1072214002744",
  appId: "1:1072214002744:web:083e3094891d1f3c38eacd",
  measurementId: "G-F8ZDTLXZBS"
};

// Init
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Social Providers
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const appleProvider = new OAuthProvider("apple.com");

// Messaging (Push Notification)
export const messaging = getMessaging(app);

// Get FCM Device Token
export const requestForToken = async () => {
  try {
    // Ensure SW is registered
    await navigator.serviceWorker.register("/firebase-messaging-sw.js");

    // ✅ Wait until service worker is active
    const registration = await navigator.serviceWorker.ready;

    const token = await getToken(messaging, {
      vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
      serviceWorkerRegistration: registration,
    });

    if (token) {
      console.log("FCM Token:", token);
      return token;
    } else {
      console.warn("No registration token available. Request permission.");
    }
  } catch (err) {
    console.error("An error occurred while retrieving token.", err);
  }
};

// Listen for messages while in foreground
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
