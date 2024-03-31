import { db } from "../../firebase/config";
import { useState, useEffect } from "react";
import { getDocs, collection, doc, getDoc } from "firebase/firestore";
import './contact.css'

const FetchContact = () => {
  const [contactData, setContactData] = useState([]);
  const [photoUrls, setPhotoUrls] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching contact data
        const contactPaths = [
          "messagesApp/contactDb/contact/Ali Degirmenci",
          "messagesApp/contactDb/contact/Marina Fedjajeva",
          "messagesApp/contactDb/contact/Salwa Zakaria",
        ];

        const contactPromises = contactPaths.map((path) =>
          getDoc(doc(db, path)).then((docSnapshot) => ({
            id: docSnapshot.id,
            data: docSnapshot.data(),
          }))
        );

        const contactResults = await Promise.all(contactPromises);
        setContactData(contactResults);

        // Fetching photo URLs
        const photoPaths = [
          "messagesApp/photosDb/photos/raoe5QY36fWZgHVsg0qZ",
          "messagesApp/photosDb/photos/ZjNylCkih0dUb0lhrRas",
        ];

        const photoPromises = photoPaths.map((path) =>
          getDoc(doc(db, path)).then((docSnapshot) =>
            docSnapshot.exists ? docSnapshot.data().url : null
          )
        );

        const photoUrls = await Promise.all(photoPromises);
        setPhotoUrls(photoUrls);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="contact-div">
      <div className="contact-card">
        <div className="contact-photo">
          {photoUrls[0] ? (
            <img src={photoUrls[0]} alt={`Photo 1`} />
          ) : (
            "No photo"
          )}
        </div>
        <div className="contact-info">
          <h4>{contactData[0] && contactData[0].id}</h4>
          <p>
            {contactData[0] && contactData[0].data.title}
            <br />
            <span
              dangerouslySetInnerHTML={{
                __html: contactData[0] && contactData[0].data.phone,
              }}
            />
            <br />
            <span
              dangerouslySetInnerHTML={{
                __html: contactData[0] && contactData[0].data.email,
              }}
            />
            <br />
            <span
              dangerouslySetInnerHTML={{
                __html: contactData[0] && contactData[0].data.links,
              }}
            />
            <br />
          </p>
        </div>
      </div>
      <div className="contact-card">
        <div className="contact-photo">No photo</div>
        <div className="contact-info">
          <h4>{contactData[2] && contactData[2].id}</h4>
          <p>
            {contactData[2] && contactData[2].data.title}
            <br />
            <span
              dangerouslySetInnerHTML={{
                __html: contactData[2] && contactData[2].data.phone,
              }}
            />
            <br />
            <span
              dangerouslySetInnerHTML={{
                __html: contactData[2] && contactData[2].data.email,
              }}
            />
            <br />
            <span
              dangerouslySetInnerHTML={{
                __html: contactData[2] && contactData[2].data.links,
              }}
            />
            <br />
          </p>
        </div>
      </div>
      <div className="contact-card">
        <div className="contact-photo">
          {photoUrls[1] ? (
            <img src={photoUrls[1]} alt={`Photo 2`} />
          ) : (
            "No photo"
          )}
        </div>
        <div className="contact-info">
          <h4>{contactData[1] && contactData[1].id}</h4>
          <p>
            {contactData[1] && contactData[1].data.title}
            <br />
            <span
              dangerouslySetInnerHTML={{
                __html: contactData[1] && contactData[1].data.phone,
              }}
            />
            <br />
            <span
              dangerouslySetInnerHTML={{
                __html: contactData[1] && contactData[1].data.email,
              }}
            />
            <br />
            <span
              dangerouslySetInnerHTML={{
                __html: contactData[1] && contactData[1].data.links,
              }}
            />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default FetchContact;
