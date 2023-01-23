import { Analytics, getAnalytics } from '@firebase/analytics';
import { FirebaseApp as App, initializeApp } from '@firebase/app';
import { Auth, getAuth } from '@firebase/auth';

export class FirebaseApp {
  public readonly app: App;
  public readonly analytics: Analytics;
  public readonly auth: Auth;

  constructor() {
    this.app = initializeApp({
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      appId: process.env.REACT_APP_FIREBASE_APP_ID,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      measurementId: process.env.REACT_APP_MEASUREMENT_ID,
      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    });
    this.analytics = getAnalytics(this.app);
    this.auth = getAuth(this.app);
  }
}

export const firebaseApp = new FirebaseApp();
