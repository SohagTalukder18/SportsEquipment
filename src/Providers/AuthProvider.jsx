// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import React, { createContext, useState } from 'react'
// import { auth } from '../firebase/firebase.init';
// import { key } from 'localforage';

//  export const AuthContext = createContext(null);



// export default function AuthProvider({ children }) {

//     const [user, setUser]= useState(null);
//     const [loading, setLoading]= useState(true);

//     const createUser = (email, password) =>{
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password);
//     }
//     // const logInUser = (email, password) =>{
//     //     setLoading(true);
//     //     return signInWithEmailAndPassword(auth, email, password);
//     // }

//     // const logInUser = (email, password) => {
//     //     setLoading(true);
//     //     return signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
//     //         key={email}
//     //       setUser(userCredential.user); // Set user after successful login
//     //       setLoading(false);
//     //       return userCredential;
//     //     });
//     //   };


//     const logInUser = async (email, password) => {
//         setLoading(true);
//         try {
//           const userCredential = await signInWithEmailAndPassword(auth, email, password);
//           setUser(userCredential.user); // Set user after successful login
//           setLoading(false);
//           return userCredential;
//         } catch (error) {
//           setLoading(false); // Ensure loading is set to false on error
//           throw error; // Rethrow the error to handle it in the calling function
//         }
//       };

//       const logOutUser = async () => {
//         setLoading(true);
//         try {
//           await auth.signOut();
//           setUser(null);
//           setLoading(false);
//         } catch (error) {
//           setLoading(false);
//           throw error;
//         }
//       };
      


//     const userInfo = {
//         user,
//         loading,
//         setUser,
//         createUser,
//         logInUser,
//         logOutUser
//     }


//   return (
//     <AuthContext.Provider value={userInfo}>
//         { children }
//     </AuthContext.Provider>
//   )
// }


// import React, { createContext, useState } from 'react'
// import { auth } from '../firebase/firebase.init';
// import { key } from 'localforage';

//  export const AuthContext = createContext(null);




// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { signInWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check authentication state on app load
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); 
      } else {
        setUser(null); 
      }
      setLoading(false); 
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, []);


const logInUser = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user); 
      setLoading(false);
      return userCredential;
    } catch (error) {
      setLoading(false);
      throw error; 
    }
  };
  


  const logOutUser = async () => {
    setLoading(true);
    try {
      await auth.signOut();
      setUser(null);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };
  const createUser = (email, password,name) =>{
            setLoading(true);
            return createUserWithEmailAndPassword(auth, email, password);
        }

  const userInfo = {
    user,
    loading,
    logInUser,
    logOutUser,
    createUser
  };

  return (
    <AuthContext.Provider value={userInfo}>
      {!loading && children} {/* Prevent rendering children until loading is complete */}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
