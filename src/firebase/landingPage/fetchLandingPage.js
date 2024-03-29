import '../modules/collapsibleListStyle.css'
import FetchList from "../modules/fetchListModule";

const LandingPage = () => {

  return (
    <FetchList collectionPath="messagesApp/landingPageDb/landingPage" />
  );
};

export default LandingPage;
