

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
