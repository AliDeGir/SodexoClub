import { useState, useEffect } from "react";
import { db } from "../../firebase/config";
import { getDocs, collection } from "firebase/firestore";

const TableComponent = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "messagesApp/tableContent/tableArrays")
        );
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });
        setTableData(data);
      } catch (error) {
        console.error("Error getting documents:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="table-div">
      <table className="custom-table" border="1">
        <thead>
          <tr>
            <th>Med tariffavtale</th>
            <th>Uten tariffavtale</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              {Object.values(item)[0].map((column, idx) => (
                <td key={idx}>{column}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;