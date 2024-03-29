import { db } from "../config";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

const MemberNews = () => {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const querySnapshot = await getDocs(
      collection(db, "messagesApp/membersNews/membersNewsDB")
    );
    const items = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setItems(items);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="body-div">
      <ul>
        {items.map(({ id, header, content, subContent }) => (
          <li key={id}>
            <div>{header}</div>
            <div dangerouslySetInnerHTML={{ __html: content }} />
            {subContent && (
              <ul>
                {subContent.map((sub, index) => (
                  <li key={index}>{sub}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemberNews;
