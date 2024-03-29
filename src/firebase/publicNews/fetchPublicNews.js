import FetchList from "../../firebase/modules/fetchListModule";

const PublicNews = () => {
  return (
    <>

      <div>
        <FetchList collectionPath={"messagesApp/newsPublicDb/newsPublic"} />
      </div>
    </>
  );
};

export default PublicNews;
