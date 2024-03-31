import { db, auth } from "../config";
import { collection, getDocs, onSnapshot, addDoc } from "firebase/firestore";
import { useState, useEffect } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [aliasInput, setAliasInput] = useState("");
  const [storedAlias, setStoredAlias] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const userId = auth.currentUser.uid;
        const unsub = onSnapshot(
          collection(db, "messagesApp/messages/messagesDB"),
          (snapshot) => {
            const messagesArray = snapshot.docs.map((doc) => {
              const message = doc.data();
              return {
                id: doc.id,
                timeStamp: message.timeStamp,
                alias: message.alias,
                content: message.content,
                isCurrentUser: message.userId === userId,
              };
            });

            messagesArray.sort((a, b) => a.timeStamp - b.timeStamp);
            setMessages(messagesArray);
          }
        );

        return () => {
          unsub();
        };
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMessages();
  }, []);

  useEffect(() => {
    const storedAlias = localStorage.getItem("alias");
    if (storedAlias) {
      setStoredAlias(storedAlias);
      setAliasInput("");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (commentInput.trim() !== "") {
      try {
        const uid = auth.currentUser.uid;
        const alias = storedAlias || aliasInput;
        const doqref = await addDoc(
          collection(db, "messagesApp/messages/messagesDB"),
          {
            content: commentInput,
            timeStamp: Date.now(),
            userId: uid,
            alias: alias,
          }
        );
        setCommentInput("");
        if (!storedAlias) {
          localStorage.setItem("alias", alias);
          setStoredAlias(alias);
          setAliasInput("");
        }
      } catch (error) {
        console.error("Error adding message:", error);
      }
    }
  };

  return (
    <div>
      <div className="message-container">
        {messages.map((message) => (
          <div
            key={message.id}
            style={{
              marginLeft: message.isCurrentUser ? "auto" : "0",
              backgroundColor: message.isCurrentUser
                ? "rgb(157, 198, 255)"
                : "rgb(144, 226, 125)",
            }}
            className="message"
          >
            <div style={{ color: "#333", fontSize: "10px" }}>
              {new Date(message.timeStamp).toLocaleDateString()} -{" "}
              {new Date(message.timeStamp).toLocaleTimeString([], {
                timeStyle: "short",
              })}
            </div>
            <div>
              <span style={{ color: "rgb(148, 122, 54)" }}>
                {message.alias}:{" "}
              </span>
              <i>{message.content}</i>
            </div>
          </div>
        ))}
      </div>
      <div className="chatSubmit">
        <form onSubmit={handleSubmit}>
          {storedAlias ? (
            <input type="hidden" value={storedAlias} />
          ) : (
            <input
              type="text"
              value={aliasInput}
              onChange={(e) => setAliasInput(e.target.value)}
              placeholder="Your Alias"
              required
            />
          )}
          <textarea
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            placeholder="Your Message"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Chat