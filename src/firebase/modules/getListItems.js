import { db } from "../config";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

const GetUlData = ({ collectionPath }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, collectionPath));
    const newData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setData(newData);
  };

  useEffect(() => {
    fetchData();
  }, [collectionPath]);

  return (
    <div className="body-div">
      <ul>
        {data.map(({ id, header, content, subContent }) => (
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

export default GetUlData;
