import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./newBuild/test/Projects";
import Contact from "./newBuild/contact/Contact";
import LandingPage from "./firebase/landingPage/fetchLandingPage";
import Members from "./newBuild/members/Members";
import PublicNews from "./firebase/publicNews/fetchPublicNews";
import Header from "./newBuild/header/header";
import Tariffavtalen from "./newBuild/tariffavtalen/tariffAvtalen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="publicnews" element={<PublicNews />} />
          <Route path="tariffavtalen" element={<Tariffavtalen />} />
          <Route path="members" element={<Members />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
