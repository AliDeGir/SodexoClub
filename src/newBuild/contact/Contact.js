import React from "react";
import FetchList from "../../firebase/modules/fetchListModule";
import FetchContact from "../../firebase/modules/fetchContact";

const Contact = () => {
    return (
        <>
            <div>Contact</div>
            <FetchContact />
            {/* <FetchList collectionPath="messagesApp/landingPageDb/landingPage" /> */}
        </>
    );
}

export default Contact