import { useState, useEffect } from "react";
import { auth, loginWithGoogle, logout } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

const Auth = ({ setUser }) => {
  const [user, setLocalUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLocalUser(user);
      setUser(user);
    });
  }, []);

  return (
    <div className="auth-container">
      {user ? (
        <>
          <p>Welcome, {user.displayName}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={loginWithGoogle}>Login with Google</button>
      )}
    </div>
  );
};

export default Auth;