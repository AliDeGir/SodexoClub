import { useState, useEffect } from "react";
import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import FetchList from "../modules/fetchListModule"
import Chat from "../chat/fetchChatModule";

const AuthComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return unsubscribe;
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error("Error signing in:", error);
        }
    };

    const handleLogout = async () => {
        try {
            const auth = getAuth();
            await signOut(auth);
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
      <div>
        {user ? (
          <div>
            <p>Welcome, {user.email}</p>
            <button onClick={handleLogout}>Logout</button>
            <Chat />
            <FetchList
              collectionPath={"messagesApp/membersNews/membersNewsDB"}
            />

            {/* <MemberNews /> */}
          </div>
        ) : (
          <form onSubmit={handleLogin}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button type="submit">Login</button>
          </form>
        )}
      </div>
    );
};

export default AuthComponent;
