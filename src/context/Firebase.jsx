import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APP_ID,
};
const firebaseApp = initializeApp(firebaseConfig);

const FirebaseContext = createContext();
// export const useFirebase = useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={{}}>{children}</FirebaseContext.Provider>
  );
};
