import FetchList from "../../firebase/modules/fetchListModule";
import TableComponent from "./table";
import './table.css';

const Tariffavtalen = () => {
    return (
      <>
        <FetchList
          collectionPath={"messagesApp/medlemsfordelerDb/medlemsfordeler"}
            />
            <FetchList collectionPath={"messagesApp/riksavtalenDb/riksavtalen"} />
            <TableComponent />
      </>
    );
}

export default Tariffavtalen