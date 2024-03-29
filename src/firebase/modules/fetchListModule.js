import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react"
import { db } from "../config";

const FetchList = ({ collectionPath }) => {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const querySnapshot = await getDocs(
      collection(db, collectionPath)
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
    <div className="collapsible">
      <ul style={{ listStyle: "none" }}>
        {items.map(({ id, header, content, subContent }) => (
          <li key={id}>
            <div className="collapsible-header">
              <h3>{header}</h3>
            </div>
            <div className="collapsible-body">
              {/* Render content */}
              <div dangerouslySetInnerHTML={{ __html: content }} />
              {/* Render subContent if it exists */}
              {subContent && (
                <ul style={{ padding: "30px 30px 30px 50px" }}>
                  {subContent.map((sub, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: sub }} />
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchList;